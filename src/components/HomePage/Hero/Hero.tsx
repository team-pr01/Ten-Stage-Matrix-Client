import { Link } from "react-router-dom";
import { IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";

const Hero = () => {
  
  return (
    <div className="">
     
      <Container>
          <div className="z-10 py-20 flex flex-col items-center justify-center">
            <h1 className="text-3xl lg:text-[64px] font-semibold text-white max-w-full xl:max-w-[948px] text-center mx-auto">
              Every Contribution Matters On{" "}
              <span className="gradient-text">Ten Stage Matrix</span>
            </h1>
            <p className="text-sm lg:text-xl font-medium text-neutral-160 mt-3 max-w-[948px] text-center mx-auto mb-10">
              A decentralized, blockchain-integrated platform empowering
              community-driven donations, ensuring security, and
              efficient resource distribution for sustainable impact.
            </p>
             <Link
                  to={"/signin"}
                  style={{
                    boxShadow: "0px 4px 24px 0px rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(8.050000190734863px)",
                  }}
                  className="rounded-xl border border-neutral-90 bg-primary-50 text-white px-10 py-3 font-semibold hover:bg-primary-10 transition duration-300"
                >
                  Sign In
                </Link>
                  <img src={IMAGES.heroImg} alt="" className="mt-10 mx-auto" />
          </div>
      </Container>
    </div>
  );
};

export default Hero;
