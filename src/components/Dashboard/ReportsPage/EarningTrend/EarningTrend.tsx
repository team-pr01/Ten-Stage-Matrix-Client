/* eslint-disable @typescript-eslint/no-explicit-any */

import DashboardCard from "../../../Reusable/DashboardCard/DashboardCard";

const EarningTrend = ({ data }: { data: any }) => {
  return (
    <div className="font-Outfit">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-8">
        {data?.map((item: any, index: number) => (
          <DashboardCard
            key={index}
            direction="col"
            icon={item.icon}
            title={item.title}
            description={item.description}
            value={item.value}
            isCurrencyVisible={false}
          />
        ))}
      </div>
    </div>
  );
};

export default EarningTrend;
