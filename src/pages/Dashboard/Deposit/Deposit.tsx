import MakeDeposit from "../../../components/Dashboard/DepositPage/MakeDeposit/MakeDeposit";
import RecentDeposit from "../../../components/Dashboard/DepositPage/RecentDeposit/RecentDeposit";
import DashboardHeaderTitle from "../../../components/Reusable/DashboardHeaderTitle/DashboardHeaderTitle";

const Deposit = () => {
  return (
    <div>
      <DashboardHeaderTitle title="Deposit Funds" />
      <MakeDeposit />
      <RecentDeposit />
    </div>
  );
};

export default Deposit;
