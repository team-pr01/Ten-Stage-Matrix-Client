/* eslint-disable @typescript-eslint/no-explicit-any */
import { FiUserCheck } from "react-icons/fi";
import { useGetReferralListQuery } from "../../../../redux/Features/User/userApi";
import Loader from "../../../Shared/Loader/Loader";

const ReferralActivity = () => {
  const { data, isLoading } = useGetReferralListQuery({});
  console.log(data);
  return (
    <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col py-7 px-[34px] font-Outfit w-full min-h-[350px] max-h-auto overflow-y-auto">
      <h1 className="text-2xl font-medium text-white">Referral Activity</h1>

      <div className="flex flex-col gap-[26px] mt-6">
        {isLoading ? (
          <Loader size="size-10" />
        ) : (
          data?.data?.referrals?.map((item: any) => (
            <div className="flex items-center justify-between">
              {/* Name and avatar */}
              <div className="flex items-center gap-3">
                <FiUserCheck className="text-2xl text-white" />
                <div>
                  <h1 className="text-white text-lg font-medium capitalize">
                    {item?.name}
                  </h1>
                  <p className="text-neutral-35 text-sm mt-[2px]">
                    {item?.email}
                  </p>
                </div>
              </div>
              {/* <button className="cursor-pointer">
                <img src={ICONS.addUser} alt="" className="size-[30px]" />
              </button> */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReferralActivity;
