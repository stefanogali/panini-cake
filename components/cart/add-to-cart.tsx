'use client';

import { PlusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { Button } from 'components/button';
import { addItem } from 'components/cart/actions';
import LoadingDots from 'components/loading-dots';
import { ProductVariant } from 'lib/shopify/types';
import { useSearchParams } from 'next/navigation';
import { useTransition } from 'react';
import { useRouter } from 'next/navigation';

function SubmitButton({
  availableForSale,
  selectedVariantId,
  isPending
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
  isPending: boolean;
}) {
  const buttonClasses =
    'relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white';
  const disabledClasses = 'cursor-not-allowed opacity-60 hover:opacity-60';

  if (!availableForSale) {
    return (
      <Button aria-disabled className={clsx(buttonClasses, disabledClasses)}>
        Out Of Stock
      </Button>
    );
  }

  if (!selectedVariantId) {
    return (
      <Button
        aria-label="Please select an option"
        aria-disabled
        className={clsx(buttonClasses, disabledClasses)}
      >
        <div className="absolute left-0 ml-4">
          <PlusIcon className="h-5" />
        </div>
        Add To Cart
      </Button>
    );
  }

  return (
    <Button
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (isPending) e.preventDefault();
      }}
      aria-label="Add to cart"
      aria-disabled={isPending}
      className={clsx(buttonClasses, {
        'hover:opacity-90': true,
        [disabledClasses]: isPending
      })}
    >
      <div className="absolute left-0 ml-4">
        {isPending ? <LoadingDots className="mb-3 bg-white" /> : <PlusIcon className="h-5" />}
      </div>
      Add To Cart
    </Button>
  );
}

export function AddToCart({
  variants,
  availableForSale
}: {
  variants: ProductVariant[];
  availableForSale: boolean;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase())
    )
  );
  const selectedVariantId = variant?.id || defaultVariantId;

  const handleAddToCart = () => {
    startTransition(async () => {
      await addItem(null, selectedVariantId);
      router.refresh();
    });
  };

  return (
    <div onClick={handleAddToCart}>
      <SubmitButton
        availableForSale={availableForSale}
        selectedVariantId={selectedVariantId}
        isPending={isPending}
      />
    </div>
  );
}
