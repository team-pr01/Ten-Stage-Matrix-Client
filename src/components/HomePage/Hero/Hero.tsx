import { Link } from "react-router-dom";
import { IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";
import { useSelector } from "react-redux";
import { useCurrentUser } from "../../../redux/Features/Auth/authSlice";

const Hero = () => {
  const user = useSelector(useCurrentUser);
  return (
    <div className="relative">
      <div className="hidden xl:block absolute top-40 left-32 z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="71"
          height="71"
          viewBox="0 0 71 71"
          fill="none"
        >
          <mask
            id="mask0_113_30"
            maskUnits="userSpaceOnUse"
            x="8"
            y="8"
            width="55"
            height="55"
          >
            <circle
              cx="35.3477"
              cy="35.3477"
              r="27.1211"
              transform="rotate(22.16 35.3477 35.3477)"
              fill="url(#paint0_linear_113_30)"
            />
          </mask>
          <g mask="url(#mask0_113_30)">
            <g filter="url(#filter0_i_113_30)">
              <circle
                cx="35.3477"
                cy="35.3477"
                r="27.1211"
                transform="rotate(22.16 35.3477 35.3477)"
                fill="#15072B"
              />
            </g>
            <g filter="url(#filter1_f_113_30)">
              <path
                d="M20.1488 4.49092C14.3932 17.7999 12.5278 27.0063 44.1865 37.0233C55.3452 41.5681 63.0697 37.2991 69.488 26.0693C72.2253 34.6663 72.0362 44.4419 68.2641 53.7036C60.0904 73.7728 38.2018 83.8266 19.3753 76.159C0.548749 68.4913 -8.08718 46.0055 0.0865685 25.9364C4.11351 16.049 11.4705 8.59487 20.1488 4.49092Z"
                fill="#5EEDD0"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_i_113_30"
              x="8.21945"
              y="5.2707"
              width="54.2565"
              height="57.2054"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="1.84299"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_innerShadow_113_30"
              />
              <feOffset dy="-2.94878" />
              <feGaussianBlur stdDeviation="3.31738" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.46 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_113_30"
              />
            </filter>
            <filter
              id="filter1_f_113_30"
              x="-48.6663"
              y="-41.1783"
              width="165.682"
              height="165.579"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="22.8347"
                result="effect1_foregroundBlur_113_30"
              />
            </filter>
            <linearGradient
              id="paint0_linear_113_30"
              x1="32.2081"
              y1="18.1799"
              x2="35.3477"
              y2="71.0193"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="hidden lg:block absolute top-40 right-0 z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="187"
          viewBox="0 0 100 187"
          fill="none"
        >
          <mask
            id="mask0_113_51"
            maskUnits="userSpaceOnUse"
            x="15"
            y="14"
            width="158"
            height="158"
          >
            <circle
              cx="94.08"
              cy="93.1579"
              r="78.3218"
              transform="rotate(-12.188 94.08 93.1579)"
              fill="url(#paint0_linear_113_51)"
            />
          </mask>
          <g mask="url(#mask0_113_51)">
            <g filter="url(#filter0_i_113_51)">
              <circle
                cx="94.08"
                cy="93.1579"
                r="78.3218"
                transform="rotate(-12.188 94.08 93.1579)"
                fill="#15072B"
              />
            </g>
            <g filter="url(#filter1_f_113_51)">
              <path
                d="M7.55934 44.3436C15.5218 85.4589 26.0724 110.452 117.884 82.7497C151.896 75.4034 163.359 52.6379 160.363 15.4012C180.898 31.4388 196.371 55.0614 202.468 83.2912C215.68 144.46 179.873 204.094 122.492 216.488C65.1107 228.881 7.88372 189.341 -5.32809 128.173C-11.8375 98.035 -6.44736 68.2697 7.55934 44.3436Z"
                fill="#5EEDD0"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_i_113_51"
              x="15.7418"
              y="6.30417"
              width="156.676"
              height="165.192"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="5.32228"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_innerShadow_113_51"
              />
              <feOffset dy="-8.51566" />
              <feGaussianBlur stdDeviation="9.58011" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.46 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_113_51"
              />
            </filter>
            <filter
              id="filter1_f_113_51"
              x="-139.956"
              y="-116.485"
              width="477.052"
              height="467.132"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="65.9431"
                result="effect1_foregroundBlur_113_51"
              />
            </filter>
            <linearGradient
              id="paint0_linear_113_51"
              x1="85.0132"
              y1="43.5798"
              x2="94.08"
              y2="196.172"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute bottom-[600px] left-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="86"
          height="153"
          viewBox="0 0 86 153"
          fill="none"
        >
          <mask
            id="mask0_113_44"
            maskUnits="userSpaceOnUse"
            x="-50"
            y="17"
            width="118"
            height="118"
          >
            <circle
              cx="9.09337"
              cy="76.0939"
              r="58.3842"
              transform="rotate(22.16 9.09337 76.0939)"
              fill="url(#paint0_linear_113_44)"
            />
          </mask>
          <g mask="url(#mask0_113_44)">
            <g filter="url(#filter0_i_113_44)">
              <circle
                cx="9.09337"
                cy="76.0939"
                r="58.3842"
                transform="rotate(22.16 9.09337 76.0939)"
                fill="#15072B"
              />
            </g>
            <g filter="url(#filter1_f_113_44)">
              <path
                d="M-23.625 9.6615C-36.0172 38.3151 -40.0358 58.135 28.1218 79.7003C52.1451 89.4844 68.7747 80.2939 82.5922 56.1154C88.4858 74.6231 88.0724 95.6697 79.9517 115.609C62.3559 158.812 15.2374 180.454 -25.2909 163.948C-65.8192 147.442 -84.4101 99.0375 -66.8143 55.8341C-58.1449 34.548 -42.3085 18.4959 -23.625 9.6615Z"
                fill="#5EEDD0"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_i_113_44"
              x="-49.3063"
              y="11.3462"
              width="116.799"
              height="123.147"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="3.96745"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_innerShadow_113_44"
              />
              <feOffset dy="-6.34792" />
              <feGaussianBlur stdDeviation="7.14141" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.46 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_113_44"
              />
            </filter>
            <filter
              id="filter1_f_113_44"
              x="-171.766"
              y="-88.652"
              width="356.669"
              height="356.451"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="49.1567"
                result="effect1_foregroundBlur_113_44"
              />
            </filter>
            <linearGradient
              id="paint0_linear_113_44"
              x1="2.33461"
              y1="39.1363"
              x2="9.09339"
              y2="152.885"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Container>
        <div className="z-10 py-20 flex flex-col items-center justify-center relative">
          <h1 className="text-3xl lg:text-[64px] font-semibold text-white max-w-full xl:max-w-[800px] text-center mx-auto">
            Every Contribution Matters On{" "}
            <span className="gradient-text">Ten Stage Matrix</span>
          </h1>
          <p className="text-sm lg:text-xl font-medium text-neutral-160 mt-3 max-w-[948px] text-center mx-auto mb-10">
            A decentralized, blockchain-integrated platform empowering
            community-driven donations, ensuring security, and efficient
            resource distribution for sustainable impact.
          </p>
          {
            user ?
            <Link
            to={"/dashboard"}
            style={{
              boxShadow: "0px 4px 24px 0px rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(8.050000190734863px)",
            }}
            className="rounded-xl border border-neutral-90 bg-primary-50 text-white px-10 py-3 font-semibold hover:bg-primary-10 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
          >
            Dashboard
          </Link>
          :
          <Link
            to={"/auth/signin"}
            style={{
              boxShadow: "0px 4px 24px 0px rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(8.050000190734863px)",
            }}
            className="rounded-xl border border-neutral-90 bg-primary-50 text-white px-10 py-3 font-semibold hover:bg-primary-10 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
          >
            Sign In
          </Link>
          }
          <img src={IMAGES.heroImg} alt="" className="mt-10 mx-auto" />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
