import MakeDeposit from "../../../components/Dashboard/DepositPage/MakeDeposit/MakeDeposit";
import RecentDeposit from "../../../components/Dashboard/DepositPage/RecentDeposit/RecentDeposit";

const Deposit = () => {
  return (
    <div className="min-h-screen">
      <MakeDeposit />
      <RecentDeposit />
    </div>
  );
};

export default Deposit;
