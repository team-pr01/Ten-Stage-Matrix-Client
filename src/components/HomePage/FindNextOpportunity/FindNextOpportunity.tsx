import { IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";

const FindNextOpportunity = () => {
  const cardDetails = [
    {
      title: "Your Assets Secured by Binance Smart Chain",
      description:
        "Donations and assets secured by Binance Smart Chain with transparent transactions.",
      image: IMAGES.assetsSecured,
    },
    {
      title: "Empower. Unite. Thrive",
      description:
        "Empowering communities through collaboration, transparency, and collective action for lasting change.",
      image: IMAGES.unite,
    },
    {
      title: "24/7 Support",
      description:
        "Count on us for round-the-clock support, help whenever you need it.",
      image: IMAGES.support,
    },
    {
      title: "Trusted Secure",
      description: "Your assets. On your terms. At your fingertips.",
      image: IMAGES.trustedSecure,
    },
  ];
  return (
    <div className="relative">
      <div className="bg-[#fda15333] w-[300px] lg:w-[800px] xl:w-[1100px] h-[300px] lg:h-[500px] blur-[280px] rounded-full absolute bottom-10 right-5 lg:right-0 left-0 mx-auto rotate-[30deg] transform"></div>
      <Container>
        <div className="font-Outfit">
          <div className="flex flex-col xl:flex-row gap-5 xl:gap-0 justify-between">
            <h1 className="text-3xl lg:text-[48px] font-semibold text-white max-w-full xl:max-w-[504px]">
              Find your next opportunity with Ten Stage Matrix
            </h1>
            <p className="text-sm lg:text-base font-medium text-neutral-160 max-w-full xl:max-w-[603px]">
              Donate to the Community — Where Everyone Benefits from Stage
              Earnings Your donation directly supports the heart of our
              community, providing essential resources through the earnings
              generated at each stage. Every contribution ensures that everyone
              benefits equally from the progress made, fostering collective
              growth and a stronger, more unified community. No complex
              systems—just a simple, transparent way to make a lasting impact,
              where everyone thrives from shared success.
            </p>
          </div>

          <div className="mt-[60px] grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              {cardDetails?.slice(0, 2)?.map((item) => (
                <div
                  key={item?.title}
                  className="p-[2px] rounded-2xl md:rounded-[28px] hover:scale-105 transition-all duration-300 ease-in-out bg-border-gradient"
                >
                  <div className="bg-neutral-10 rounded-2xl md:rounded-[28px]">
                    <div
                      style={{
                        backdropFilter: "blur(5.050000190734863px)",
                        boxShadow:
                          "inset 4px 4px 33.2px rgba(255, 255, 255, 0.20)",
                      }}
                      className="p-[30px] rounded-[28px] border border-primary-50 shadow-home-card"
                    >
                      <h1 className="text-white text-2xl font-semibold">
                        {item?.title}
                      </h1>
                      <p className="text-sm lg:text-base font-medium text-neutral-160 mt-5">
                        {item?.description}
                      </p>
                      <div className="flex justify-end mt-3">
                        <img
                          src={item?.image}
                          alt=""
                          className="w-[200px] h-[170px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Middle card */}
            <div className="p-[2px] rounded-2xl md:rounded-[28px] hover:scale-105 transition-all duration-300 ease-in-out bg-border-gradient h-full">
              <div className="bg-neutral-10 rounded-2xl md:rounded-[28px] h-full">
                <div
                  style={{
                    backdropFilter: "blur(5.050000190734863px)",
                    boxShadow: "inset 4px 4px 33.2px rgba(255, 255, 255, 0.20)",
                  }}
                  className="p-[30px] rounded-[28px] border border-primary-50 shadow-home-card flex flex-col justify-between h-full"
                >
                  <div>
                    <h1 className="text-white text-2xl font-semibold">
                      Earnings Start from Your Donation to the Community
                    </h1>
                    <p className="text-sm lg:text-base font-medium text-neutral-160 mt-5">
                      Your donation sparks a cycle of earnings, directly
                      benefiting everyone in the community. By contributing, you
                      help create opportunities for all to thrive through shared
                      growth. It's a simple, transparent system where your
                      support ensures fairness and equal benefits at every
                      stage.
                    </p>
                  </div>
                  <div className="flex justify-center mt-5 lg:mt-0">
                    <img
                      src={IMAGES.startEarning}
                      alt=""
                      className="w-[284px] h-[217px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              {cardDetails?.slice(2, 4)?.map((item) => (
                <div
                  key={item?.title}
                  className="p-[2px] rounded-2xl md:rounded-[28px] hover:scale-105 transition-all duration-300 ease-in-out bg-border-gradient"
                >
                  <div className="bg-neutral-10 rounded-2xl md:rounded-[28px]">
                    <div
                      style={{
                        backdropFilter: "blur(5.050000190734863px)",
                        boxShadow:
                          "inset 4px 4px 33.2px rgba(255, 255, 255, 0.20)",
                      }}
                      className="p-[30px] rounded-[28px] border border-primary-50 shadow-home-card"
                    >
                      <h1 className="text-white text-2xl font-semibold">
                        {item?.title}
                      </h1>
                      <p className="text-sm lg:text-base font-medium text-neutral-160 mt-5">
                        {item?.description}
                      </p>
                      <div className="flex justify-end mt-3">
                        <img
                          src={item?.image}
                          alt=""
                          className="w-[200px] h-[200px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FindNextOpportunity;
