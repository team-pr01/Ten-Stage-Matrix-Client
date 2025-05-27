/* eslint-disable @typescript-eslint/no-explicit-any */

const EarningTrend = ({data} : {data:any}) => {
  
  return (
    <div className="font-Outfit">
      {/* <h1 className="text-2xl text-white font-medium mt-6">Earning Trend</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-8">
        {data?.map((item:any, index:number) => (
          <div
            key={index}
            className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col items-center justify-center py-5 xl:py-[37px] px-12 xl:px-[100px]"
          >
            <img
              src={item?.icon}
              alt={item?.title || "icon"}
              className="size-[90px]"
            />
            <h2 className="text-white text-xl font-medium capitalize mt-[26px] text-center">
              {item?.title || "N/A"}
            </h2>
            <h1 className="text-white font-medium capitalize mt-[7px] text-center text-[34px]">
              {item?.value || "0"}
            </h1>
            {item?.description && (
              <p className="text-neutral-135 text-sm mt-2 text-center max-w-[150px] mx-auto">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarningTrend;
