import { Link } from "react-router-dom";
import { ICONS, IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";
import { useSelector } from "react-redux";
import { useCurrentUser } from "../../../redux/Features/Auth/authSlice";

const DonationProgram = () => {
  const user = useSelector(useCurrentUser);
  return (
    <div className="relative mt-[350px] md:mt-[600px] lg:mt-0">
      <img
        src={ICONS.circle}
        alt=""
        className="hidden xl:block absolute -top-40 right-0 z-0 rotate-180 w-[200px]"
      />
      <Container>
        <div className="bg-neutral-170 shadow-donation-program rounded-[28px] font-Outfit p-6 md:p-[30px] xl:p-[56px] flex flex-col lg:flex-row gap-10 items-center">
          <img
            src={IMAGES.donationProgram}
            alt=""
            className="w-full md:w-[300px] xl:w-[500px]"
          />
          <div>
            <h1 className="text-3xl lg:text-[48px] font-semibold text-white max-w-full xl:max-w-[590px] text-center lg:text-start">
              Give Back with Our Donation Program
            </h1>
            <p className="text-neutral-160 font-medium mt-6 text-sm sm:text-base text-center lg:text-start">
              Give a Little, Gain a Lot —{" "}
              <span className="text-white text-lg">Start with $10</span>
            </p>

            <div className="p-[2px] rounded-2xl md:rounded-[28px] hover:scale-105 transition-all duration-300 ease-in-out bg-border-gradient mt-10">
              <div className="bg-neutral-10 rounded-2xl md:rounded-[28px]">
                <div
                  style={{
                    backdropFilter: "blur(5.050000190734863px)",
                    boxShadow: "inset 4px 4px 33.2px rgba(255, 255, 255, 0.20)",
                  }}
                  className="border border-primary-50 bg-neutral-155 shadow-home-card rounded-[28px] p-6 flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between"
                >
                  <div className="text-center md:text-start">
                    <h1 className="text-base lg:text-2xl font-medium text-white">
                      {user ? "Welcome Back" : "Sign Up"}
                    </h1>
                    <p className="text-sm lg:text-base font-medium text-neutral-160 mt-3 md:mt-5">
                      {user
                        ? "Go to dashboard to start donating"
                        : "Sign Up and Step Into Financial Freedom  "}
                    </p>
                  </div>
                  <Link
                    to={user ? "/dashboard" : "/auth/signup"}
                    className="px-10 py-[15px] rounded-xl hover:bg-primary-10 bg-primary-85 text-white font-semibold text-sm text-center cursor-pointer flex justify-center items-center gap-[6px] transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 w-fit"
                    style={{
                      boxShadow: `
                    inset 0px 2px 2px 0px #D26407,
                    inset 0px -4px 4px 0px rgba(0, 0, 0, 0.35),
                    inset 0px 4px 4px 0px rgba(255, 255, 255, 0.40),
                    0px 4px 24px 0px rgba(168, 82, 5, 0.50)
                  `,
                    }}
                  >
                    {user ? "Dashboard" : "Sign Up"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DonationProgram;
