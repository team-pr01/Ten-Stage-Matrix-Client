import { useLocation } from "react-router-dom";

const DashboardHeader = () => {
    const location = useLocation();

    const title = location.pathname === "/dashboard" ? "Financial Overview"
    :
    location.pathname === "/dashboard/transactions" ? "Activity Details"
    :
    location.pathname === "/dashboard/fund-transfer" ? "Transfer Funds"
    :
    location.pathname === "/dashboard/network" ? ""
    :
    location.pathname === "/dashboard/deposit" ? "Deposit"
    :
    location.pathname === "/dashboard/withdraw" ? "Withdraw"
    :
    "Financial Overview"


  return (
    <div>
      <h1 className="text-white font-Outfit font-medium text-[32px]">
        Financial Overview
      </h1>
      <button className="p-2 w-[165px] h-12 rounded-lg border border-primary-10 bg-primary-10 text-white font-medium flex items-center justify-center cursor-pointer">
        Connect wallet
      </button>
    </div>
  );
};

export default DashboardHeader;
