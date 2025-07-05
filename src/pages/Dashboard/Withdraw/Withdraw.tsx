import RecentWithdraws from "../../../components/Dashboard/WithdrawPage/RecentWithdraws/RecentWithdraws";
import RequestWithdraw from "../../../components/Dashboard/WithdrawPage/RequestWithdraw/RequestWithdraw";

const Withdraw = () => {
  return (
    <div className="min-h-screen">
      <RequestWithdraw />
      <RecentWithdraws />
    </div>
  );
};

export default Withdraw;
