const DashboardCard = ({
  icon,
  title,
  value,
  direction,
  isCurrencyVisible=true,
}: {
  icon: string;
  title: string;
  value: number | string;
  direction?: string;
  isCurrencyVisible?: boolean;
}) => {
  return (
    <div
      style={{
        boxShadow: "inset 4px 4px 33.2px 0px rgba(255, 255, 255, 0.20)",
        backdropFilter: "blur(5.05px)",
      }}
      className={`rounded-[28px] border border-primary-50 bg-neutral-90/10 p-6 flex items-start md:items-center gap-[33px] ${
        direction === "col" ? "flex-col" : "flex-col md:flex-row-reverse"
      }`}
    >
      <img
        src={icon}
        alt=""
        className={`size-[200px] mx-auto`}
      />
      <div className="w-full flex flex-col gap-3">
        <h2 className="text-white text-xl font-medium capitalize">{title}</h2>
        <div
          style={{
            textShadow: "0px 0px 13.5px #E6700B",
          }}
          className="text-primary-10 text-2xl font-bold border border-neutral-90 px-6 py-2 rounded-3xl w-fit capitalize"
        >
          {value ? `${isCurrencyVisible ? "$" : ""}${value}` : "$0.00000"}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
