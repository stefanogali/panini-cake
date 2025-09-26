export default function PageSkeleton({ repeater = 1 }: { repeater?: number }) {
  return (
    <div className="animate-pulse">
      <div className="mb-8 h-8 max-w-40 rounded-sm bg-slate-200"></div>
      {Array.from({ length: repeater }).map((_, index) => {
        const isEven = index % 2 === 0;
        const isMultipleOfFour = index % 4 === 0 && index !== 0;
        return (
          <div key={index}>
            {isMultipleOfFour && <div className="mb-8 h-8 max-w-40 rounded-sm bg-slate-200"></div>}
            <div className="mb-7 flex space-x-4">
              <div className="flex-1 space-y-4 py-1">
                <div className="h-2 rounded-sm bg-slate-200"></div>
                <div className="space-y-3">
                  <div className="flex gap-4">
                    <div
                      className={`h-2 ${isEven ? 'basis-3/4' : 'basis-1/4'} rounded-sm bg-slate-200`}
                    ></div>
                    <div
                      className={`h-2 ${isEven ? 'basis-1/4' : 'basis-3/4'} rounded-sm bg-slate-200`}
                    ></div>
                  </div>
                  <div className="h-2 rounded-sm bg-slate-200"></div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
