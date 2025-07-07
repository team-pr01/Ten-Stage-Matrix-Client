const DashboardCard = ({
  icon,
  title,
  description,
  value,
  direction,
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
      className="p-[2px] rounded-[28px]"
      style={{
        background: `linear-gradient(
    60deg,
    rgba(255, 255, 255, 0.005) 0%,
    rgba(42, 245, 149, 0.60) 30%,
    rgba(255, 255, 255, 0.005) 40%
  )`,
      }}
    >
      <div className="bg-neutral-10 rounded-[28px]">
        <div
        className={`rounded-[26px] bg-neutral-90/10 p-6 flex items-start md:items-center gap-[33px] ${
          direction === "col" ? "flex-col" : "flex-col md:flex-row-reverse"
        }`}
        style={{
          boxShadow: "inset 4px 4px 33.2px rgba(255, 255, 255, 0.20)",
          backdropFilter: "blur(5.05px)",
        }}
      >
        <img src={icon} alt="" className="size-[200px] mx-auto" />

        <div className="w-full flex flex-col gap-3 text-center md:text-left">
          <div>
            <h2 className="text-white text-xl font-medium capitalize">
              {title}
            </h2>
            {description && (
              <p className="text-neutral-110 text-sm font-semibold mt-1">
                {description}
              </p>
            )}
          </div>

          <div
            style={{
              textShadow: "0px 0px 13.5px #E6700B",
              background: `linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))`,
            }}
            className="text-primary-10 text-2xl font-bold border border-neutral-90 px-6 py-2 rounded-3xl w-fit mx-auto md:mx-0 capitalize"
          >
            {value ? `${isCurrencyVisible ? "$" : ""}${value}` : "$0.00000"}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default DashboardCard;
