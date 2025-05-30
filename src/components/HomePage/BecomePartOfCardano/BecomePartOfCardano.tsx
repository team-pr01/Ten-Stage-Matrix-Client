import { Link } from "react-router-dom";
import { IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";
import { useSelector } from "react-redux";
import { useCurrentUser } from "../../../redux/Features/Auth/authSlice";

const BecomePartOfTenStageMatrix = () => {
  const user = useSelector(useCurrentUser);
  return (
    <div className="bg-primary-40 py-20 relative">
      {/* Crypto images */}
      <img
        src={IMAGES.cryptoIcons}
        alt=""
        className="w-full mx-auto absolute top-0 z-0"
      />
      <Container>
        <div className="flex flex-col items-center gap-[46px] z-10">
          <h1 className="text-2xl lg:text-[48px] font-medium text-white max-w-full xl:max-w-[851px] mx-auto text-center z-10 relative">
            Delegate Your Mine To Build The Network, Earn Rewards, And Become
            Part Of The Ten Stage Matrix Journey.
          </h1>

          <img
            src={IMAGES.becomePartOfTen}
            alt=""
            className="rounded-[10px]"
          />

          <p className="text-sm lg:text-base text-neutral-45 max-w-full xl:max-w-[924px] mx-auto text-center">
            There are two ways an ada holder can earn rewards: by delegating
            their Mine to a Mine pool run by someone else, or running their own
            Mine pool. The amount of Mine delegated to a given Mine pool is the
            primary way the Ouroboros protocol chooses who should add the next
            block to the blockchain, and receive a monetary reward for doing so.
          </p>

         {
          !user ?
           <Link
            to={"/signup"}
            className="p-2 w-[185px] h-[58px] rounded-lg border border-primary-10 bg-primary-10 text-white font-medium flex items-center justify-center"
          >
            Create Now
          </Link>
          :
           <Link
            to={"/dashboard"}
            className="p-2 w-[185px] h-[58px] rounded-lg border border-primary-10 bg-primary-10 text-white font-medium flex items-center justify-center"
          >
            Go To Dashboard
          </Link>
         }
        </div>
      </Container>
    </div>
  );
};

export default BecomePartOfTenStageMatrix;
