/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetTeamTreeQuery } from "../../../../redux/Features/User/userApi";
import Loader from "../../../Shared/Loader/Loader";

const RecentAddition = () => {
  const { data, isLoading } = useGetTeamTreeQuery({});
  return (
    <div className="font-Outfit rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col py-7 px-[34px] w-full h-full overflow-y-auto custom-scrollbar">
      <h1 className="text-2xl font-medium text-white">Recent Addition</h1>
      <div className="mt-5 overflow-x-auto">
        {isLoading ? (
          <Loader size="size-10 mt-5" />
        ) : (
          <table className="min-w-[600px] w-full text-white">
            <thead>
              <tr className="border-b border-neutral-110 text-left">
                <th className="py-3 whitespace-nowrap">Serial No</th>
                <th className="py-3 whitespace-nowrap">Name</th>
                <th className="py-3 whitespace-nowrap">Email</th>
                <th className="py-3 whitespace-nowrap">Status</th>
                <th className="py-3 whitespace-nowrap">Referral Code</th>
                <th className="py-3 whitespace-nowrap">Stage</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.all_members?.length < 1 ? (
                <p className="text-white mt-4">No data found</p>
              ) : (
                data?.data?.all_members?.map((item: any, index: number) => (
                  <tr key={index} className="border-b border-neutral-110/50">
                    {/* Name + Avatar */}
                     <td className="py-3 whitespace-nowrap">{index+1}</td>
                    <td className="flex items-center gap-2 py-3 whitespace-nowrap">
                      <span className="capitalize">{item?.name}</span>
                    </td>

                    {/* Level */}
                   
                    <td className="py-3 whitespace-nowrap">{item?.email}</td>
                    <td className="py-3 whitespace-nowrap capitalize">{item?.status}</td>
                    <td className="py-3 whitespace-nowrap">
                      {item?.referral_code}
                    </td>
                    <td className="py-3 whitespace-nowrap">
                      Stage {item?.stage}
                    </td>

                    {/* Joined */}
                    <td className="py-3 whitespace-nowrap">{item?.joined}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default RecentAddition;
