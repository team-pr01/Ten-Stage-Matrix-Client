import { Link } from "react-router-dom";
import { IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";

const Hero = () => {
  return (
    <Container>
      <div className="flex flex-col xl:flex-row items-center justify-between py-20">
        {/* Left side */}
        <div className="z-10">
          <div className="bg-neutral-20 rounded-4xl p-2 text-white w-fit">
            <span className="text-primary-10">200k+</span> Daily active investor
          </div>
          <h1 className="text-3xl lg:text-[56px] font-medium text-white mt-1 max-w-full xl:max-w-[529px]">
            Matters On Ten Stage Matrix
          </h1>
          <p className="text-sm lg:text-xl text-white mt-3 max-w-[558px]">
            A decentralized, blockchain-integrated platform empowering
            community-driven donations, ensuring transparency, security, and
            efficient resource distribution for sustainable impact.
          </p>

          {/* Input field */}
          <div className="py-1 text-base rounded-md bg-white shadow-secondary-button text-neutral-700 leading-6 cursor-pointer transition-all duration-300 ease-in-out transform active:scale-95 text-nowrap flex gap-2 justify-between items-center w-full lg:w-fit mt-8">
            <input
              // value={keyword}
              // onChange={(e) => {
              //   setKeyword(e.target.value);
              // }}
              type="text"
              placeholder={`Enter  your email `}
              className="bg-white focus:outline-none pl-4"
            />
            <Link
              to={"/signup"}
              className="bg-primary-10 py-3 px-[10px] rounded-xl mr-[14px] text-white font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>

        <img src={IMAGES.heroImg} alt="" className="z-10" />
      </div>
    </Container>
  );
};

export default Hero;
