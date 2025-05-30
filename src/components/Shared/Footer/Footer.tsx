import { Link } from "react-router-dom";
import { ICONS, IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { TfiSkype } from "react-icons/tfi";
import { LiaFacebookMessenger } from "react-icons/lia";

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/prtechsolutions/",
      icon: (
        <FaFacebook className=" text-neutral-10 group-hover:text-white transition duration-300 text-[22px]" />
      ),
    },
    {
      name: "Instagram",
      link: "https://www.facebook.com/prtechsolutions/",
      icon: (
        <FaInstagram className=" text-neutral-10 group-hover:text-white transition duration-300 text-[22px]" />
      ),
    },
    {
      name: "Linkedin",
      link: "https://www.facebook.com/prtechsolutions/",
      icon: (
        <TfiSkype className=" text-neutral-10 group-hover:text-white transition duration-300 text-[22px]" />
      ),
    },
    {
      name: "WhatsApp",
      link: "https://www.facebook.com/prtechsolutions/",
      icon: (
        <LiaFacebookMessenger className=" text-neutral-10 group-hover:text-white transition duration-300 text-[22px]" />
      ),
    },
  ];
  return (
    <div className="bg-primary-40 py-20 font-Outfit z-10 relative">
      <Container>
        <h1 className="text-3xl lg:text-[40px] font-medium text-white capitalize text-center">
          Join us today!
        </h1>
        <p className="text-sm lg:text-base text-neutral-60 mt-[14px] max-w-full md:max-w-[519px] text-center mx-auto">
          Ten Stage Matrix is built by a decentralized community of scientists,
          engineers, and thought leaders united in a common purpose.
        </p>

        {/* Input field */}
        <div className="py-1 text-base rounded-md bg-white shadow-secondary-button text-neutral-700 leading-6 cursor-pointer transition-all duration-300 ease-in-out transform active:scale-95 text-nowrap flex gap-2 justify-between items-center w-full md:w-[461px] mx-auto mt-8">
          <input
            // value={keyword}
            // onChange={(e) => {
            //   setKeyword(e.target.value);
            // }}
            type="text"
            placeholder={`Enter your email`}
            className="bg-white focus:outline-none pl-4"
          />
          <button className="bg-primary-10 py-3 px-[10px] rounded-xl mr-[14px] text-white font-medium">
            Get Started
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between mt-[119px]">
          <div>
            <img src={IMAGES.logo} alt="logo" className="z-10" />
            <p className="text-neutral-60 max-w-[292px]">
              Begin your fitness journey now! Join us to achieve your health
              goalswith experientialnd supportive comm
            </p>
            <div className="flex items-center gap-3 mt-[29px]">
              {socialLinks?.map((item) => (
                <a
                  href={item?.link}
                  key={item?.name}
                  className="size-[40px] rounded-full hover:bg-primary-10 group bg-white transition-all duration-300 cursor-pointer flex items-center justify-center group"
                >
                  {item?.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-[22px] font-bold text-white">Quick Link</h1>
            <div className="flex flex-col gap-3 mt-[15px]">
              <Link
                to={"/"}
                className="text-neutral-65 font-medium hover:underline"
              >
                Home
              </Link>
              <Link
                to={"/"}
                className="text-neutral-65 font-medium hover:underline"
              >
                About Us
              </Link>
              <Link
                to={"/"}
                className="text-neutral-65 font-medium hover:underline"
              >
                Store
              </Link>
              <Link
                to={"/"}
                className="text-neutral-65 font-medium hover:underline"
              >
                Team
              </Link>
              <Link
                to={"/"}
                className="text-neutral-65 font-medium hover:underline"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h1 className="text-[22px] font-bold text-white">Instagram</h1>
            <div className="grid grid-cols-3 gap-3 mt-[15px]">
              <img
                src={IMAGES.instagram1}
                alt=""
                className="w-[81px] h-[78px]"
              />
              <img
                src={IMAGES.instagram2}
                alt=""
                className="w-[81px] h-[78px]"
              />
              <img
                src={IMAGES.instagram3}
                alt=""
                className="w-[81px] h-[78px]"
              />
              <img
                src={IMAGES.instagram4}
                alt=""
                className="w-[81px] h-[78px]"
              />
              <img
                src={IMAGES.instagram5}
                alt=""
                className="w-[81px] h-[78px]"
              />
              <img
                src={IMAGES.instagram6}
                alt=""
                className="w-[81px] h-[78px]"
              />
            </div>
          </div>

          <div>
            <h1 className="text-[22px] font-bold text-white">Contact Us</h1>
            <p className="text-neutral-60 max-w-[256px] mt-[15px]">
              England main City B block Raight Side 1st Building
            </p>
            <div className="flex  flex-col gap-3 mt-[15px]">
              <a
                href="tel:+62 81 2945 1234"
                className="flex items-center gap-5 text-white font-medium hover:underline"
              >
                <img src={ICONS.phone} alt="" className="size-5" />
                <p>(+62) 81 2945 1234</p>
              </a>
              <a
                href="mailto:asufy@gmail.com"
                className="flex items-center gap-5 text-white font-medium hover:underline"
              >
                <img src={ICONS.email} alt="" className="size-5" />
                <p>asufy@gmail.com</p>
              </a>
            </div>
          </div>
        </div>

        <hr className="border border-neutral-70 w-full h-[1px] mt-[31px] mb-[11px]" />

        <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 items-start lg:items-center justify-between text-neutral-75">
          <p className="">Design Template Kit by Creativehubit</p>
          <p className="">Copyright (C) 2025.All right reserved</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
