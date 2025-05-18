import MakeDeposit from "../../../components/Dashboard/DepositPage/MakeDeposit/MakeDeposit";
import DashboardHeaderTitle from "../../../components/Reusable/DashboardHeaderTitle/DashboardHeaderTitle";

const Deposit = () => {
  return (
    <div>
      <DashboardHeaderTitle
        title="Deposit Funds"
      />
      <MakeDeposit/>
    </div>
  );
};

export default Deposit;
