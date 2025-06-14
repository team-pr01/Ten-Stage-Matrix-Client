/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetReferralListQuery } from "../../../../redux/Features/User/userApi";
import Loader from "../../../Shared/Loader/Loader";

const ReferralActivity = () => {
  const { data, isLoading } = useGetReferralListQuery({});
  return (
    <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col py-7 px-[34px] font-Outfit w-full min-h-[350px] max-h-auto overflow-y-auto">
      <h1 className="text-2xl font-medium text-white">Referral Activity</h1>

      <div className="flex flex-col gap-[26px] mt-6">
        {isLoading ? (
          <Loader size="size-10 mt-5" />
        ) : (
         <div className="overflow-x-auto custom-scrollbar">
           <table className="min-w-[600px] w-full text-white">
            <thead>
              <tr className="border-b border-neutral-110 text-left">
                <th className="p-3 whitespace-nowrap">Serial No</th>
                <th className="p-3 whitespace-nowrap">Name</th>
                <th className="p-3 whitespace-nowrap">Email</th>
                <th className="p-3 whitespace-nowrap">Position</th>
                <th className="p-3 whitespace-nowrap">Status</th>
                <th className="p-3 whitespace-nowrap">Referral Code</th>
                <th className="p-3 whitespace-nowrap">Stage</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.referrals?.length < 1 ? (
                <p className="text-white mt-4">No data found</p>
              ) : (
                data?.data?.referrals?.map((item: any, index: number) => (
                  <tr key={index} className="border-b border-neutral-110/50">
                    {/* Name + Avatar */}
                     <td className="p-3 whitespace-nowrap">{index+1}</td>
                    <td className="flex items-center gap-2 p-3 whitespace-nowrap">
                      <span className="capitalize">{item?.name}</span>
                    </td>

                    {/* Level */}
                   
                    <td className="p-3 whitespace-nowrap">{item?.email}</td>
                    <td className="p-3 whitespace-nowrap capitalize">{item?.team_tree?.position}</td>
                    <td className="p-3 whitespace-nowrap capitalize">{item?.status}</td>
                    <td className="p-3 whitespace-nowrap">
                      {item?.referral_code}
                    </td>
                    <td className="p-3 whitespace-nowrap">
                      Stage {item?.stage}
                    </td>

                    {/* Joined */}
                    <td className="p-3 whitespace-nowrap">{item?.joined}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
         </div>
        )}
      </div>

      
    </div>
  );
};

export default ReferralActivity;
