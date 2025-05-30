import { ICONS } from "../../../assets";
import Container from "../../Reusable/Container/Container";

const WhyChooseUs = () => {
  const whyChooseUs = [
    {
      icon: ICONS.strongSecurity,
      title: "Secured by Binance Smart Chain",
      description:
        "Your donations and assets are protected by Binance Smart Chain, ensuring security, transparency, and efficiency in every transaction",
    },
    {
      icon: ICONS.highLiquidity,
      title: "Empower. Unite. Thrive",
      description:
        "Empowering communities through inclusive collaboration, transparent communication, and united collective action to drive meaningful, sustainable, and lasting social change.",
    },
    {
      icon: ICONS.opportunity,
      title: "24/7 Support",
      description:
        "Count on us for dependable, round-the-clock support. Whether day or night, we’re always here to assist you, ensuring help is available whenever you need it, no matter the situation.",
    },
    {
      icon: ICONS.technology,
      title: "Trusted & Secure",
      description:
        "Your assets, your terms—securely access, manage, and grow them anytime, anywhere, with confidence and ease, all right at your fingertips.",
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
              className="bg-primary-25 py-7 px-2 rounded-xl flex flex-col items-center shadow-custom z-10"
            >
              <img src={item.icon} alt="" className="size-[70px]" />
              <h1 className="text-xl text-white text-center font-medium mt-3">
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
