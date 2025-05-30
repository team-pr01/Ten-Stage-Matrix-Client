/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "../../../assets";
import ReferralInfo from "../../../components/Dashboard/DashboardHomePage/ReferralInfo/ReferralInfo";
import TotalWithdrawnAndBalance from "../../../components/Dashboard/DashboardHomePage/TotalWithdrawnAndBalance/TotalWithdrawnAndBalance";
import DashboardDataCard from "../../../components/Reusable/DashboardDataCard/DashboardDataCard";
import DashboardHeaderTitle from "../../../components/Reusable/DashboardHeaderTitle/DashboardHeaderTitle";
import {
  useGetUserProfileQuery,
  useUpdateWalletAddressMutation,
} from "../../../redux/Features/User/userApi";
// import Web3 from 'web3';
import detectEthereumProvider from "@metamask/detect-provider";
import { useState, useEffect } from "react";

// Add ethereum to window type
declare global {
  interface Window {
    ethereum: any;
  }
}

const DashboardHome = () => {
  const [updateWalletAddress] = useUpdateWalletAddressMutation();
  const { data } = useGetUserProfileQuery({});
  const [isConnecting, setIsConnecting] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [isConnected, setIsConnected] = useState(false);

  const handleUpdateWalletAddress = async (walletAddress: string) => {
    try {
      const payload = { wallet_address: walletAddress };
      const response = await updateWalletAddress(payload);
      console.log(response);
    } catch (error) {
      console.error("Error updating wallet address:", error);
    }
  };

  // Check if wallet is already connected
  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({
            method: "eth_accounts",
          });

          if (accounts.length > 0) {
            setWalletAddress(accounts);
            setIsConnected(true);
          }
        } catch (error) {
          console.error("Error checking wallet connection:", error);
        }
      }
    };

    checkConnection();
  }, []);

  useEffect(() => {
  if (walletAddress) {
    handleUpdateWalletAddress(walletAddress);
  }
}, [walletAddress]);

  // Listen for account changes
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          setIsConnected(true);
        } else {
          setWalletAddress("");
          setIsConnected(false);
        }
      });
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener("accountsChanged", () => {});
      }
    };
  }, []);

  const connectWallet = async () => {
    try {
      setIsConnecting(true);
      const provider = await detectEthereumProvider();

      if (!provider) {
        alert("Please install MetaMask!");
        return;
      }

      // Request account access
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
        setIsConnected(true);
      }
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
      alert("Error connecting to MetaMask. Please try again.");
    } finally {
      setIsConnecting(false);
    }
  };

  const formatAddress = (address: string) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="font-Outfit">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-3 md:gap-0 items-start md:items-center justify-between">
        <DashboardHeaderTitle title="Financial Overview" />
        <button
          onClick={connectWallet}
          disabled={isConnecting}
          className={`p-2 w-auto h-12 rounded-lg border border-primary-10 ${
            isConnected ? "bg-green-600" : "bg-primary-10"
          } text-white font-medium flex items-center justify-center cursor-pointer ${
            isConnecting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isConnecting
            ? "Connecting..."
            : isConnected
            ? formatAddress(walletAddress)
            : "Connect wallet"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-[18px]">
        <DashboardDataCard
          icon={ICONS.totalDonation}
          title="Total Donation"
          value={
            data?.data?.stats?.total_donation
              ? `$${data?.data?.stats?.total_donation}`
              : "$0"
          }
        />

        <DashboardDataCard
          icon={ICONS.totalEarn}
          title="Total Earn"
          value={
            data?.data?.stats?.total_earn
              ? `$${data?.data?.stats?.total_earn}`
              : "$0"
          }
        />

        <DashboardDataCard
          icon={ICONS.withdraw}
          title="Total Deposit"
          value={
            data?.data?.stats?.total_deposit
              ? `$${data?.data?.stats?.total_deposit}`
              : "$0"
          }
        />
      </div>

      {/* Total Withdraw and Current Balance */}
      <TotalWithdrawnAndBalance
        totalWithdraw={data?.data?.stats?.total_withdraw}
        balance={data?.data?.balances?.balance}
      />

      {/* Referral info */}
      <ReferralInfo
        data={data?.data?.profile}
        totalTeamMembers={data?.data?.stats?.total_team_members}
      />
    </div>
  );
};

export default DashboardHome;
