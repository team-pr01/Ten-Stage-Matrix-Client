import RecentWithdraws from "../../../components/Dashboard/WithdrawPage/RecentWithdraws/RecentWithdraws";
import RequestWithdraw from "../../../components/Dashboard/WithdrawPage/RequestWithdraw/RequestWithdraw";
import DashboardHeaderTitle from "../../../components/Reusable/DashboardHeaderTitle/DashboardHeaderTitle";

const Withdraw = () => {
    return (
         <div>
      <DashboardHeaderTitle title="Withdraw Funds" />
      <RequestWithdraw />
      <RecentWithdraws />
    </div>
    );
};

export default Withdraw;