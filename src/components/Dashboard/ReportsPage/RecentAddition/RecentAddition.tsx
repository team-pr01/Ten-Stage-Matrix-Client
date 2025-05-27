/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetTeamTreeQuery } from "../../../../redux/Features/User/userApi";
import Loader from "../../../Shared/Loader/Loader";

const RecentAddition = () => {

  const {data, isLoading} = useGetTeamTreeQuery({});
  console.log(data);
  return (
    <div className="font-Outfit rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col py-7 px-[34px] w-full h-full md:h-[300px] overflow-y-auto custom-scrollbar">
      <h1 className="text-2xl font-medium text-white">Recent Addition</h1>
      <div className="mt-5 overflow-x-auto">
        {
          isLoading ?
            <Loader size="size-10 mt-5" />
            :
       
        <table className="min-w-[600px] w-full text-white">
          <thead>
            <tr className="border-b border-neutral-110 text-left">
              <th className="py-3 whitespace-nowrap">Name</th>
              <th className="py-3 whitespace-nowrap">Email</th>
              <th className="py-3 whitespace-nowrap">Level</th>
              <th className="py-3 whitespace-nowrap">Stage</th>
            </tr>
          </thead>
          <tbody>
            {
            data?.data?.tree?.children?.map((item:any, index:number) => (
              <tr key={index} className="border-b border-neutral-110">
                {/* Name + Avatar */}
                <td className="flex items-center gap-2 py-3 whitespace-nowrap">
                  {/* <img
                    src={item?.children?.avatar}
                    alt=""
                    className="size-6 rounded-full"
                  /> */}
                  <span className="capitalize">{item?.children?.name}</span>
                </td>

                {/* Level */}
                <td className="py-3 whitespace-nowrap">{item?.children?.email}</td>
                <td className="py-3 whitespace-nowrap">{item?.children?.level}</td>
                <td className="py-3 whitespace-nowrap">Stage {item?.children?.stage}</td>

                {/* Joined */}
                <td className="py-3 whitespace-nowrap">
                  {item?.joined}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
         }
      </div>
    </div>
  );
};

export default RecentAddition;
