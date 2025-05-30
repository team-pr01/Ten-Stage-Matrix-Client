import { ICONS } from "../../../assets";
import Container from "../../Reusable/Container/Container";

const ADAFeatures = () => {
  const adaFeatured = [
    {
      icon: ICONS.geoDispersed,
      title: "Unlocking Passive Income Through Affiliate Marketing",
      description:
        "Affiliate marketing offers a powerful way to earn passive income by promoting products or services you believe in. With little upfront cost,you can monetize your content, blog, or social media following by sharing referral links and earning commissions on sales. As your audience grows, so does your income potential—without trading more time. It's a flexible, scalable way to build revenue streams and achieve financial freedom while helping others discover valuable solutions.",
    },
    {
      icon: ICONS.lowLatency,
      title: "Stage Income: The Power of Community",
      description:
        "Stage income thrives on the strength of community. As individuals work together, support one another, and grow as a network, everyone benefits. The more people join and contribute, the greater the collective earning potential. Community-driven models create momentum—where each person's success fuels the next. Through shared goals, mentorship, and team effort, stage income becomes more than just earnings; it becomes a movement built on trust, unity, and mutual growth. Together, we earn more.",
    },
  ];
  return (
    <div className="py-20 relative overflow-hidden">
      {/* Gradients */}
      <div className="bg-primary-15 w-[443px] h-[351px] rounded-[443px] blur-[75px] z-0 absolute -bottom-20 -right-20"></div>
      <div className="bg-primary-20 w-[432px] h-[351px] rounded-[431px] blur-[75px] z-0 absolute -top-20 -right-20"></div>
      <Container>
        <div className="flex flex-col gap-10 w-full">
          {/* Left side image */}
          

          <div className="z-10">
            <h1 className="text-3xl lg:text-[48px] font-medium text-white text-start">
              Earn crypto flexibly with Ten Stage Matrix
            </h1>

            {/* ADA Features card */}
            <div className="flex flex-col lg:flex-row items-center gap-[30px] mt-[45px]">
              {adaFeatured.map((item, index) => (
                <div key={index} className="bg-primary-25 py-7 px-4 rounded-xl flex flex-col gap-3 shadow-custom z-10 w-full min-h-[310px]">
                    <h2 className="text-white text-[30px] font-bold">{item.title}</h2>
                    <p className="text-neutral-35">
                      {item.description}
                    </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ADAFeatures;
