import { Link } from "react-router-dom";
import Container from "../../Reusable/Container/Container";
import { RiSendPlaneFill } from "react-icons/ri";

const Footer = () => {
  // const socialLinks = [
  //   {
  //     name: "Facebook",
  //     link: "https://www.facebook.com/prtechsolutions/",
  //     icon: (
  //       <FaFacebook className=" text-neutral-10 group-hover:text-white transition duration-300 text-[22px]" />
  //     ),
  //   },
  //   {
  //     name: "Instagram",
  //     link: "https://www.facebook.com/prtechsolutions/",
  //     icon: (
  //       <FaInstagram className=" text-neutral-10 group-hover:text-white transition duration-300 text-[22px]" />
  //     ),
  //   },
  //   {
  //     name: "Linkedin",
  //     link: "https://www.facebook.com/prtechsolutions/",
  //     icon: (
  //       <TfiSkype className=" text-neutral-10 group-hover:text-white transition duration-300 text-[22px]" />
  //     ),
  //   },
  //   {
  //     name: "WhatsApp",
  //     link: "https://www.facebook.com/prtechsolutions/",
  //     icon: (
  //       <LiaFacebookMessenger className=" text-neutral-10 group-hover:text-white transition duration-300 text-[22px]" />
  //     ),
  //   },
  // ];
  return (
    <div className="relative h-[830px] lg:h-[400px] xl:h-[500px]">
      <div className="bg-[#fda15333] w-[300px] lg:w-[800px] h-[300px] blur-[230px] rounded-full absolute right-5 lg:right-0 left-0"></div>
      <Container>
        <div className="border border-primary-50 rounded-[28px] font-Outfit z-10 flex flex-col lg:flex-row justify-between mt-[160px]">
          <div
            style={{ backdropFilter: "blur(5.050000190734863px)" }}
            className="border border-primary-50 bg-neutral-155 shadow-home-card rounded-[28px] p-6 lg:p-10"
          >
            <h1 className="text-3xl lg:text-[48px] font-semibold text-white text-center">
              Contact Us
            </h1>
            <p className="text-sm lg:text-base text-neutral-160 mt-4 text-center max-w-[450px] mx-auto">
              Welcome to Ten Stage Matrix your gateway to the world Of Web3
              trading! Our user— friendly platform
            </p>
            <div className="relative border border-primary-50 px-6 py-4 rounded-[10px] mt-[50px]">
              <input
                type="text"
                name=""
                id=""
                placeholder="Type massage here...."
                className="text-neutral-40 focus:outline-none "
              />
              <RiSendPlaneFill className="text-white text-2xl absolute top-4 right-4 cursor-pointer" />
            </div>
          </div>

          <div className="pt-[56px] pl-10 lg:pl-0">
            <h1 className="font-semibold text-white">Connect with Us Now</h1>
            <div className="flex flex-col gap-4 mt-6 text-neutral-160 text-sm">
              <Link to={"/"} className="hover:underline">
                Discord
              </Link>
              <Link to={"/"} className="hover:underline">
                Telegram
              </Link>
              <Link to={"/"} className="hover:underline">
                Twitter
              </Link>
              <Link to={"/"} className="hover:underline">
                YouTube
              </Link>
            </div>
          </div>

          <hr className="h-[1px] border border-primary-50 my-5" />

          <div className="hidden lg:block h-[1px] md:h-[320px] w-[1px] bg-primary-50"></div>

          <div className="pt-0 lg:pt-[56px] pl-10 lg:pl-0 mr-0 lg:mr-[140px] pb-5 lg:pb-0">
            <h1 className="font-semibold text-white">Follow Us</h1>
            <div className="flex flex-col gap-4 mt-6 text-neutral-160 text-sm">
              <Link to={"/"} className="hover:underline">
                Facebook
              </Link>
              <Link to={"/"} className="hover:underline">
                X
              </Link>
              <Link to={"/"} className="hover:underline">
                LinkedIn
              </Link>
              <Link to={"/"} className="hover:underline">
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <p className="text-sm lg:text-base text-neutral-160 text-center mt-[30px]">
          Copyright@ 2025 Ten Stage Matrix
        </p>
    </div>
  );
};

export default Footer;
