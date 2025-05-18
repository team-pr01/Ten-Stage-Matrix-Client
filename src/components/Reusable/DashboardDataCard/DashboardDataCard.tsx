import React from "react";

type DashboardDataCardProps = {
  icon: string;
  title: string;
  value: string | number;
  valueFontSize? : string;
  padding? : string;
};

const DashboardDataCard: React.FC<DashboardDataCardProps> = ({ icon, title, value, valueFontSize="text-[34px]", padding="px-[90px] py-[90px]" }) => {
  return (
    <div className={`rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col items-center justify-center ${padding}`}>
      <img src={icon} alt={title} className="size-[90px]" />
      <h2 className="text-white text-xl font-medium capitalize mt-[22px] text-center">{title}</h2>
      <h1 className={`text-white font-medium capitalize mt-[6px] text-center ${valueFontSize}`}>{value}</h1>
    </div>
  );
};

export default DashboardDataCard;
