import { ICONS } from "../../../assets";
import Container from "../../Reusable/Container/Container";

const WhyChooseUs = () => {
  const whyChooseUs = [
    {
      icon: ICONS.strongSecurity,
      title: "Strong security",
      description:
        "A platform built for a sustainable future, to help people work better together, trust one another, and build global solutions to global problems.",
    },
    {
      icon: ICONS.highLiquidity,
      title: "High liquidity",
      description:
        "Ten Stage Matrix began with and has grown through research. Before any technology we integrate is developed, it is specified. And before it is specified, it is researched.",
    },
    {
      icon: ICONS.opportunity,
      title: "Opportunity",
      description:
        "The staging point for every new opportunity. Empower your business through Ten Stage Matrix, and discover the future of technology.",
    },
    {
      icon: ICONS.technology,
      title: "Technology",
      description:
        "Ten Stage Matrix brings a new standard in technology – open and inclusive – to challenge the old and activate a new age of sustainable, globally-distributed innovation.",
    },
  ];

  return (
    <div className="font-Outfit relative py-20">
      <div className="bg-primary-30 w-[300px] lg:w-[432px] h-[300px] lg:h-[351px] rounded-[431px] blur-[75px] z-0 absolute left-0 -top-10"></div>
      <Container>
        <h1 className="text-3xl lg:text-[48px] font-medium text-white text-center capitalize z-10 relative">
          Why you choose{" "}
          <span className="text-primary-10">Ten Stage matrix</span>
        </h1>
        <p className="text-sm lg:text-2xl text-white mt-[14px] text-center z-10 relative  `">
          The exchange is where users can buy, sell, and trade.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[21px] mt-[60px] z-10">
          {whyChooseUs?.map((item) => (
            <div
              key={item.title}
              className="bg-primary-25 py-7 px-4 rounded-xl flex flex-col items-center shadow-custom z-10"
            >
              <img src={item.icon} alt="" className="size-[70px]" />
              <h1 className="text-2xl text-white text-center font-medium mt-3">
                {item.title}
              </h1>
              <p className="text-white text-center text-sm mt-[6px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
