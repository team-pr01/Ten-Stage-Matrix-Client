import AllGeneratedAddresses from "../../../components/Dashboard/DepositPage/AllGeneratedAddresses/AllGeneratedAddresses";
import MakeDeposit from "../../../components/Dashboard/DepositPage/MakeDeposit/MakeDeposit";
import RecentDeposit from "../../../components/Dashboard/DepositPage/RecentDeposit/RecentDeposit";

const Deposit = () => {
  return (
    <div className="min-h-screen">
      <MakeDeposit />
      <RecentDeposit />
      <div className="mt-8">
        <AllGeneratedAddresses/>
      </div>
    </div>
  );
};

export default Deposit;
