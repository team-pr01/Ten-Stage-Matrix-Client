import { IMAGES } from "../../../assets";

const Earn = () => {
  return (
    <div className="mt-10 min-h-screen">
      <h1 className="text-white font-semibold font-Outfit text-center text-lg md:text-2xl 2xl:text-5xl">
        Coming Soon
      </h1>
      <div className="hidden md:flex flex-wrap justify-center gap-5 mt-10">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
          <div
            key={index}
            className="p-[2px] rounded-2xl md:rounded-[28px] hover:scale-105 transition-all duration-300 ease-in-out bg-border-gradient"
          >
            <div className="bg-neutral-10 rounded-2xl md:rounded-[28px]">
              <div
                className={`rounded-2xl md:rounded-[28px] bg-neutral-90/10 p-[18px] md:p-6 flex items-start md:items-center gap-3 md:gap-[33px]`}
                style={{
                  boxShadow: "inset 4px 4px 33.2px rgba(255, 255, 255, 0.20)",
                  backdropFilter: "blur(5.05px)",
                }}
              >
                <img
                  src={IMAGES.lock}
                  alt=""
                  className="size-[110px] md:size-[190px] mx-auto"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="md:hidden grid grid-cols-2 justify-center gap-5 mt-10">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
          <div
            key={index}
            className="p-[2px] rounded-2xl md:rounded-[28px] hover:scale-105 transition-all duration-300 ease-in-out bg-border-gradient"
          >
            <div className="bg-neutral-10 rounded-2xl md:rounded-[28px]">
              <div
                className={`rounded-2xl md:rounded-[28px] bg-neutral-90/10 p-[18px] md:p-6 flex items-start md:items-center gap-3 md:gap-[33px]`}
                style={{
                  boxShadow: "inset 4px 4px 33.2px rgba(255, 255, 255, 0.20)",
                  backdropFilter: "blur(5.05px)",
                }}
              >
                <img
                  src={IMAGES.lock}
                  alt=""
                  className="size-[110px] md:size-[190px] mx-auto"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Earn;
