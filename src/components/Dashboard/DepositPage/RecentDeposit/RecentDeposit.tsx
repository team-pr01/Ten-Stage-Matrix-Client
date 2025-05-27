import { useGetTransactionHistoryQuery } from "../../../../redux/Features/User/userApi";
import ActionDetails from "../../../Reusable/ActionDetails/ActionDetails";

const RecentDeposit = () => {
  const { data, isLoading } = useGetTransactionHistoryQuery({});
  console.log(data);
  return (
    <div>
      <h1 className="text-xl text-white font-medium font-Outfit mt-8 mb-7">
        Deposit Details
      </h1>

      <ActionDetails data={data?.data?.transactions} />
    </div>
  );
};

export default RecentDeposit;
