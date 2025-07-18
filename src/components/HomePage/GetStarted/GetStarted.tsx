import { Link } from "react-router-dom";
import { IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";

const GetStarted = () => {
  const steps = [
    {
      title: "Create account",
      description: "Sign in to Ten Stage Matrix to register a new profile.",
    },
    {
      title: "Deposit crypto",
      description:
        "Add Funds to Your Personal USDT (BEP-20) Wallet Harnessing Community Power for Collective Growth.",
    },
    {
      title: "Start your journey",
      description:
        "Donate and Start Earning Unlimited Rewards Donate and Activate Endless Earnings.",
    },
    {
      title: "Share, Refer, Earn",
      description:
        "Introduce Our Project to Others and Boost Your Rewards Community Growth, Shared Rewards.",
    },
  ];

  return (
    <div className="font-Outfit relative">
      {/* <img
        src={IMAGES.startEarningGrdietent}
        alt=""
        className="absolute top-0 w-[1400px] h-[500px] right-0"
      /> */}
      <div className="bg-[#fda15333] w-[300px] lg:w-[800px] h-[500px] blur-[330px] rounded-full absolute right-0 left-0 mx-auto rotate-[30deg] transform"></div>
      <Container>
        <div className="mt-[160px]">
          <h1 className="text-3xl lg:text-[48px] font-semibold text-white text-center">
            How To Get Started
          </h1>
          <p className="text-sm lg:text-base font-medium text-neutral-160 max-w-full xl:max-w-[632px] mx-auto text-center mt-4">
            Affiliate marketing offers a powerful way to earn passive income by
            promoting products or services you believe in.
          </p>
          <img src={IMAGES.line2} alt="" className="mt-[60px] w-full h-1" />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
            {steps?.map((step, index) => (
              <div
                key={step?.title}
                style={{ backdropFilter: "blur(5.050000190734863px)" }}
                className="border border-primary-50 bg-neutral-155 shadow-home-card rounded-[28px] p-[30px] relative h-[300px]"
              >
                <div
                  style={{
                    boxShadow:
                      "inset 0px 0px 16px 0px rgba(253, 161, 83, 0.49)",
                    filter:
                      "drop-shadow(0px 0px 42.9px rgba(253, 161, 83, 0.30))",
                  }}
                  className="bg-primary-50 text-white font-semibold text-2xl flex items-center justify-center size-[61px] rounded-full"
                >
                  {index + 1}
                </div>
                <h1 className="text-base lg:text-2xl font-semibold text-white mt-5">
                  {step?.title}
                </h1>
                <p className="text-sm lg:text-base font-medium text-neutral-160 mt-2 mb-10">
                  {step?.description}
                </p>

                {index === 0 && (
                  <Link
                    to={"/signup"}
                    style={{
                      boxShadow: "0px 4px 24px 0px rgba(255, 255, 255, 0.15)",
                      backdropFilter: "blur(8.050000190734863px)",
                    }}
                    className="rounded-xl border border-neutral-90 bg-primary-50 text-white px-7 py-3 font-semibold hover:bg-primary-10 transition duration-300"
                  >
                    Register Now
                  </Link>
                )}

                {index === 0 && (
                  <div className="absolute bottom-0 right-0 h-fit rounded-br-[28px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="302"
                      height="309"
                      viewBox="0 0 302 309"
                      fill="none"
                      className="rounded-br-[28px]"
                      
                    >
                      <g opacity="0.27">
                        <g filter="url(#filter0_f_113_135)">
                          <ellipse
                            cx="215"
                            cy="215.132"
                            rx="124"
                            ry="119.867"
                            fill="#FD7D10"
                          />
                        </g>
                        <g filter="url(#filter1_f_113_135)">
                          <ellipse
                            cx="255.92"
                            cy="254.688"
                            rx="65.72"
                            ry="63.5293"
                            fill="white"
                          />
                        </g>
                      </g>
                      <defs>
                        <filter
                          id="filter0_f_113_135"
                          x="-34.1"
                          y="-29.8344"
                          width="498.2"
                          height="489.933"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feGaussianBlur
                            stdDeviation="62.55"
                            result="effect1_foregroundBlur_113_135"
                          />
                        </filter>
                        <filter
                          id="filter1_f_113_135"
                          x="128.8"
                          y="129.758"
                          width="254.24"
                          height="249.859"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feGaussianBlur
                            stdDeviation="30.7"
                            result="effect1_foregroundBlur_113_135"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GetStarted;
