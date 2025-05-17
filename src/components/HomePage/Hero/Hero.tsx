import { IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";

const Hero = () => {
  return (
    <div className="font-Outfit">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <div className="bg-neutral-20 rounded-4xl p-2 text-white w-fit">
              <span className="text-primary-10">200k+</span> Daily active
              investor
            </div>
            <h1 className="text-[56px] font-medium text-white mt-1 max-w-[529px]">
              Haping a World That Benefits Everyone
            </h1>
            <p className="text-xl text-white mt-3 max-w-[558px]">
              TEN STAGE MATRIX is a blockchain platform empowering changemakers,
              innovators, and visionaries with the technology and tools to
              unlock opportunities for both the many and the few—driving
              meaningful global impact
            </p>

            {/* Input field */}
            <div className="py-1 text-base rounded-md bg-white shadow-secondary-button text-neutral-700 leading-6 cursor-pointer transition-all duration-300 ease-in-out transform active:scale-95 text-nowrap flex gap-2 justify-between items-center w-full xl:w-fit mt-8">
              <input
                // value={keyword}
                // onChange={(e) => {
                //   setKeyword(e.target.value);
                // }}
                type="text"
                placeholder={`Search course...`}
                className="bg-white focus:outline-none pl-4"
              />
              <button className="bg-primary-10 py-3 px-[10px] rounded-xl mr-[14px] text-white font-medium">
                Get Started
              </button>
            </div>
          </div>

          <img src={IMAGES.heroImg} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
