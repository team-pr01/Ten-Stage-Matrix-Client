import { IMAGES } from "../../../../assets";
import RecentAddition from "../RecentAddition/RecentAddition";
import ReferralAddition from "../ReferralAddition/ReferralAddition";

const ReferralTree = () => {
  return (
    <div className="font-Outfit">
      <h1 className="text-2xl text-white font-medium mt-6">
        Network Structure
      </h1>

      <div className="flex flex-col md:flex-row gap-5 mt-7 w-full">
        <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col py-6 px-[18px] w-full md:w-[40%] xl:w-[20%] h-full md:h-[300px]">
          <img
            src={IMAGES.dummyProfileImg}
            alt=""
            className="rounded-[10px] h-full"
          />
        </div>
        <RecentAddition />
      </div>

      <ReferralAddition />
    </div>
  );
};

export default ReferralTree;
