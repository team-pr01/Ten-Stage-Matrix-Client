import { Link } from "react-router-dom";
import Container from "../../Reusable/Container/Container";
import { IMAGES } from "../../../assets";
import { useSelector } from "react-redux";
import { useCurrentUser } from "../../../redux/Features/Auth/authSlice";

const SecurelyBuySell = () => {
  const user = useSelector(useCurrentUser);
  return (
    <div className="font-Outfit relative py-20">
      <div className="bg-primary-15 w-[443px] h-[351px] rounded-[443px] blur-[75px] z-10 absolute top-0 -left-40 opacity-50"></div>
      <Container>
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <div className="flex flex-col gap-5 z-10">
            <p className="text-white text-2xl">Securely buy, sell, store</p>
            <h1 className="text-3xl lg:text-[48px] font-medium text-white max-w-full xl:max-w-[674px]">
              Made with confidence with best platform and easy to use.
            </h1>
            <p className="text-white max-w-[580px] text-sm lg:text-base">
              We provide a wide range of cryptocurrencies for trading and offer
              high returns on investment with competitive fees and low
              transaction costs.
            </p>

            {
              !user ?
              <Link
              to={"/signup"}
              className="p-2 w-[184px] h-12 rounded-lg border border-primary-10 bg-primary-10 text-white font-medium mt-3 text-center"
            >
              Let's Get Started
            </Link>
            :
            <Link
              to={"/dashboard"}
              className="p-2 w-[184px] h-12 rounded-lg border border-primary-10 bg-primary-10 text-white font-medium mt-3 text-center"
            >
              Dashboard
            </Link>
            }
          </div>

          <img src={IMAGES.securelyBuySell} alt="" className="z-10" />
        </div>
      </Container>
    </div>
  );
};

export default SecurelyBuySell;
