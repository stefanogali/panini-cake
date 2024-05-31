export default function ProductSkeleton({ repeater = 1 }: { repeater?: number }) {
  return (
    <div className="animate-pulse">
      <ul className="flex flex-wrap gap-5">
        {Array.from({ length: repeater }).map((_, index) => {
          return (
            <li
              key={index}
              className="aspect-square w-full rounded-lg bg-slate-200 min-[480px]:w-[calc(50%-10px)] md:w-[calc(33.33%-13.6px)] lg:w-[calc(33.33%-13.3px)]"
            ></li>
          );
        })}
      </ul>
    </div>
  );
}
