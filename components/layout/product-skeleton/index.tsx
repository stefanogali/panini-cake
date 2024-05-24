export default function ProductSkeleton({ repeater = 1 }: { repeater?: number }) {
  return (
    <div className="animate-pulse">
      <ul className="flex flex-wrap gap-5">
        {Array.from({ length: repeater }).map((_, index) => {
          return (
            <>
              <li
                key={index}
                className="aspect-square h-[22.75rem] w-[calc(33.33%-13.3px)] rounded-lg bg-slate-200"
              ></li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
