const DashboardCard2 = ({
  icon,
  title,
  description,
  value,
  isCurrencyVisible = true,
}: {
  icon: string;
  title: string;
  description?: string;
  value: number | string;
  direction?: string;
  isCurrencyVisible?: boolean;
}) => {
  return (
    <div
      className="p-[2px] rounded hover:scale-105 transition-all duration-300 ease-in-out bg-border-gradient"

      //     style={{
      //       background: `linear-gradient(
      //   60deg,
      //   rgba(255, 255, 255, 0.005) 0%,
      //   rgba(42, 245, 149, 0.60) 30%,
      //   rgba(255, 255, 255, 0.005) 40%
      // )`,
      //     }}
    >
      <div className="bg-neutral-10 rounded">
        <div
          className={`rounded bg-neutral-90/10 p-3 flex items-center justify-center gap-5`}
          style={{
            boxShadow: "inset 4px 4px 33.2px rgba(255, 255, 255, 0.20)",
            backdropFilter: "blur(5.05px)",
          }}
        >
          <img src={icon} alt="" className="size-10" />

          <div className="flex flex-col gap-3">
            <div>
              <h2 className="text-white text-sm font-medium capitalize">
                {title}
              </h2>
              {description && (
                <p className="text-neutral-110 text-xs font-semibold mt-1">
                  {description}
                </p>
              )}
            </div>

            <h2 className="text-white text-sm font-medium capitalize">
              {value ? `${isCurrencyVisible ? "$" : ""}${value}` : "$0.00000"}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard2;
