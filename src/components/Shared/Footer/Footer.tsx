import Container from "../../Reusable/Container/Container";
import { RiSendPlaneFill, RiWhatsappFill } from "react-icons/ri";
import { SiTelegram } from "react-icons/si";

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
        <div className=" font-Outfit z-10 flex flex-col lg:flex-row justify-center gap-10 mt-[160px]">
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

          <div
            style={{ backdropFilter: "blur(5.050000190734863px)" }}
            className="border border-primary-50 bg-neutral-155 shadow-home-card rounded-[28px] p-6 lg:p-10"
          >
            <h1 className="text-3xl lg:text-[48px] font-semibold text-white text-center">
              Connect With Us
            </h1>
            <p className="text-sm lg:text-base text-neutral-160 mt-4 text-center max-w-[450px] mx-auto">
              Connect with us on WhatsApp and Telegram for quick updates,
              instant support, and easy communication anytime.
            </p>
            <div className="flex items-center justify-center gap-5 mt-5">
              <a href="">
                <RiWhatsappFill className="text-green-600 text-5xl" />
              </a>
              <a href="">
                <SiTelegram className="text-[#31A5DB] text-4xl" />
              </a>
            </div>
          </div>
        </div>
      </Container>
      <p className="text-sm lg:text-base text-neutral-160 text-center mt-[30px]">
        Copyright@ 2025 Ten Stage Matrix V 2.0
      </p>
    </div>
  );
};

export default Footer;
