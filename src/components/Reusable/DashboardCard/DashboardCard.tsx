const DashboardCard = ({icon, title, value} : {icon: string, title: string, value: number | string}) => {
  return (
    <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 px-[25px] py-11 flex items-center gap-[33px]">
      <img src={icon} alt="" className="size-[90px]" />
      <div className="w-full">
        <h2 className="text-white text-xl font-medium capitalize">
          {title}
        </h2>
        <h1 className="text-white text-[34px] font-medium capitalize">
          {value ? `$${value}` : "$0.00000"}
        </h1>
      </div>
    </div>
  );
};

export default DashboardCard;
