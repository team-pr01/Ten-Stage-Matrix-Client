import { ICONS } from "../../../assets";
import Container from "../../Reusable/Container/Container";

const StepsToGetStarted = () => {
  const steps = [
    {
      icon: ICONS.addFund,
      title: "Create Account",
      description: (
        <p className="text-neutral-35 text-xl capitalize mt-[3px]">
          Sign in to Ten Stage Matrix to register a new profile.
        </p>
      ),
    },
    {
      icon: ICONS.createAccount,
      title: "Deposit crypto",
      description: (
        <p className="text-neutral-35 text-xl capitalize mt-[3px]">
          Add Funds to Your Personal USDT ( BEP-20) Wallet
        </p>
      ),
    },
    {
      icon: ICONS.statistics,
      title: "Start your journey",
      description: (
        <p className="text-neutral-35 text-xl capitalize mt-[3px]">
          Donate and Start Earning Unlimited Rewards
        </p>
      ),
    },
    {
      icon: ICONS.referralCode,
      title: "Share, Refer, Earn",
      description: (
        <p className="text-neutral-35 text-xl capitalize mt-[3px]">
          Introduce Our Project to Others and Boost Your Rewards
        </p>
      ),
    },
  ];
  return (
    <div className="bg-primary-40 py-20 z-20 relative">
      <Container>
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-0 items-center justify-between">
          <div>
            <h1 className="text-3xl lg:text-[48px] font-medium text-white max-w-full xl:max-w-[506px]">
              3 very simple steps to get started with Ten Stage matrix
            </h1>
            <p className="text-sm lg:text-base text-white max-w-[517px] mt-[22px]">
              With over 18.4 million Active Stake, Ten Stage matrix is the best
              platform to get started stake your Ten Stage Matrix. It is the
              easiest platform for beginners to easily get into ADA Pool.
            </p>
          </div>

          <div className="flex flex-col gap-11 relative">
            {/* <img
              src={ICONS.line}
              alt=""
              className="absolute left-[33px] top-[90px] z-0"
            /> */}
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-[31px] z-10">
                <div className="bg-white rounded-full size-[67px] p-3 flex items-center justify-center">
                  <img src={step.icon} alt={step.title} />
                </div>
                <div>
                  <h2 className="text-white text-2xl md:text-[30px]">
                    {step.title}
                  </h2>
                  <p className="text-neutral-35 text-sm md:text-xl capitalize mt-[3px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StepsToGetStarted;
