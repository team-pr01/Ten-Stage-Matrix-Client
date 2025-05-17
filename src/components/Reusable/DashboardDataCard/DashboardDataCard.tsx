import React from "react";

type DashboardDataCardProps = {
  icon: string;
  title: string;
  value: string | number;
};

const DashboardDataCard: React.FC<DashboardDataCardProps> = ({ icon, title, value }) => {
  return (
    <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 p-[90px] flex flex-col items-center justify-center">
      <img src={icon} alt={title} className="size-[90px]" />
      <h2 className="text-white text-xl font-medium capitalize mt-[18px]">{title}</h2>
      <h1 className="text-white text-[34px] font-medium capitalize mt-[6px]">{value}</h1>
    </div>
  );
};

export default DashboardDataCard;
