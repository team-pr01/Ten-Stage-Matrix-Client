import { ICONS, IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";

const HighPerformance = () => {
  const successStatus = [
    {
      title: "Cardano Mine Pool",
      value: "45M+",
    },
    {
      title: "Rating from 1M+ reviews",
      value: "4.9",
    },
    {
      title: "Total funds disbursed",
      value: "85M+",
    },
    {
      title: "World’s leading website",
      value: "#1",
    },
  ];
  return (
    <div className="font-Outfit relative py-20 overflow-hidden bg-neutral-10">
      <div className="bg-primary-15 w-[443px] h-[351px] rounded-[443px] blur-[75px] z-10 absolute top-0 -left-40 opacity-50"></div>
      <div className="bg-primary-20 w-[432px] h-[351px] rounded-[431px] blur-[75px] z-0 absolute top-0 -right-32"></div>
      <Container>
        <div className="flex flex-col items-center justify-between w-full">
          <div className="flex items-center justify-between w-full">
            {successStatus?.map((item) => (
              <div key={item.title} className="flex flex-col z-10">
                <h1 className="text-[48px] font-medium text-white text-center">
                  {item.value}
                </h1>
                <p className="text-white text-xl font-semibold text-center">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col z-10 w-full mt-[100px]">
            <h1 className="text-[48px] font-medium text-white text-center">
              High Performance{" "}
              <span className="text-primary-10">Cardano Mine Pool</span>
            </h1>
            <p className="text-white max-w-[843px] mx-auto mt-5 text-center">
              MORH Pool is a High Performance Cardano Mine Pool powered by
              multiple green-energy bare-metal servers, operated by a team that
              is passionate about delivering the best reliable Mining rewards to
              our delegators.
            </p>

            {/* Video */}
            <div className="bg-neutral-30 border-[3px] border-neutral-25/30 rounded-[15px] py-[18px] px-[15px] mt-[58px] relative w-full max-w-[1004px] mx-auto">
              <img
                src={IMAGES.dummyVideoImg}
                alt=""
                className="rounded-[10px]"
              />
              <button className="p-2 w-[157px] h-[54px] rounded-lg bg-primary-10 text-white font-medium flex items-center justify-center gap-2 absolute right-11 bottom-12">
                Start Now
                <img src={ICONS.play} alt="" className="size-6" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HighPerformance;
