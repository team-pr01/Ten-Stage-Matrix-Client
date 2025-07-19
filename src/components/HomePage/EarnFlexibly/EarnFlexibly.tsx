import { ICONS, IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";

const EarnFlexibly = () => {
  return (
    <div className="mt-[135px] font-Outfit relative h-[800px]">
      <div className="bg-[#fda15333] w-[300px] lg:w-[800px] h-[800px] blur-[290px] rounded-full absolute right-5 lg:right-0 left-0"></div>

      <img src={ICONS.circle} alt="" className="absolute -top-12 left-0 z-0" />
      <Container>
        <div className="relative">
          <h1 className="text-3xl lg:text-[48px] font-semibold text-white max-w-full xl:max-w-[632px] text-center lg:text-start">
            Earn crypto flexibly with Ten Stage Matrix
          </h1>

          <div className="flex flex-col lg:flex-row gap-16 mt-10">
            <div className="flex gap-10">
              <img src={IMAGES.verticleLine} alt="" className="h-[380px]" />
              <div>
                <div className="p-[2px] rounded-2xl md:rounded-[28px] hover:scale-105 transition-all duration-300 ease-in-out bg-border-gradient">
                  <div className="bg-neutral-10 rounded-2xl md:rounded-[28px]">
                    <div
                      style={{
                        backdropFilter: "blur(5.050000190734863px)",
                        boxShadow:
                          "inset 4px 4px 33.2px rgba(255, 255, 255, 0.20)",
                      }}
                      className="border border-primary-50 bg-[#251A34] shadow-home-card rounded-[28px] p-[30px] relative max-w-[590px]"
                    >
                      <h1 className="text-base lg:text-2xl font-semibold text-white">
                        Unlocking Passive Income Through Affiliate Marketing
                      </h1>
                      <p className="text-sm lg:text-base font-medium text-neutral-160 mt-5">
                        Affiliate marketing offers a powerful way to earn
                        passive income by promoting products or services you
                        believe in. With little upfront cost, you can monetize
                        your content, blog, or social media following by sharing
                        referral links and earning commissions on sales. As your
                        audience grows, so does your income potential—without
                        trading more time. It's a flexible, scalable way to
                        build revenue streams and achieve financial freedom
                        while helping others discover valuable solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <h1 className="text-lg md:text-2xl font-semibold mt-[30px] text-white">
                  Stage Income: The Power of Community
                </h1>
              </div>
            </div>
            <img
              src={IMAGES.earnFlexibly}
              alt=""
              className="w-full lg:w-[403px] lg:h-[389px]"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EarnFlexibly;
