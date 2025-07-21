/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import {
  useGenerateWalletAddressMutation,
  useGetPublicSettingsQuery,
} from "../../../../redux/Features/User/userApi";
import QRCode from "react-qr-code";
import { GoCopy } from "react-icons/go";
import { MdOutlineDone } from "react-icons/md";

// Add ethereum to window type
declare global {
  interface Window {
    ethereum: any;
  }
}

const MakeDeposit = () => {
  const { data: settings } = useGetPublicSettingsQuery({});
  const [generateWalletAddress, { isLoading }] =
    useGenerateWalletAddressMutation();

  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async (walletAddress: string) => {
    try {
      await navigator.clipboard.writeText(walletAddress);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy referral code", error);
    }
  };

  const [data, setData] = useState<any>(null);

  const handleMakeDeposit1 = async () => {
    try {
      const response = await generateWalletAddress({}).unwrap();
      if (response?.success) {
        const currentTime = new Date().getTime();
        const expiryTime = currentTime + 60 * 60 * 1000; // 1 hour

        const dataWithExpiry = {
          data: response.data,
          expiry: expiryTime,
        };

        localStorage.setItem("walletData", JSON.stringify(dataWithExpiry));
        setData(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAndGenerateWallet = async () => {
      const stored = localStorage.getItem("walletData");
      const currentTime = new Date().getTime();

      if (stored) {
        const { data, expiry } = JSON.parse(stored);
        if (currentTime < expiry) {
          // Data still valid
          setData(data);
          return;
        } else {
          // Expired, remove it
          localStorage.removeItem("walletData");
        }
      }

      // No valid data found — call the function
      await handleMakeDeposit1();
    };

    checkAndGenerateWallet();
  }, []);

  // Load data from localStorage if still valid
  useEffect(() => {
    const stored = localStorage.getItem("walletData");
    if (stored) {
      const { data, expiry } = JSON.parse(stored);
      const currentTime = new Date().getTime();

      if (currentTime < expiry) {
        setData(data);
      } else {
        localStorage.removeItem("walletData");
      }
    }
  }, []);

  console.log(settings);

  return (
    <div className="font-Outfit">
      <div className="bg-border-gradient2 p-[1px] rounded-xl w-fit mb-8">
        <button
          onClick={handleMakeDeposit1}
          disabled={isLoading}
          className={`px-6 py-3 rounded-xl bg-neutral-175 text-white shadow-custom-dropdown flex items-center gap-[14px] transition-all duration-300 ease-in-out transform hover:scale-105 ${
            isLoading ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          {isLoading ? "Generating..." : "Generate Wallet"}
        </button>
      </div>
      {/* Conditionally render QR code */}
      {data?.wallet_address && (
        <div className="w-fit">
          <h2 className="text-white text-lg font-semibold mb-2">
            Your USDT BEP-20 Wallet Address
          </h2>
          <h2 className="text-white font-semibold mb-2">Scan QR to Deposit</h2>
          {/* bg-white rounded-xl p-3 */}
          <div className="">
            <QRCode
              value={data?.wallet_address}
              bgColor="#000000"
              fgColor="#ffffff"
              size={200}
            />
          </div>
          <div className="my-7 p-[1px] rounded-md bg-transparent hover:bg-gradient-to-r hover:from-orange-400 hover:via-green-400 hover:to-cyan-400 transition-all duration-300">
            <div
              style={{
                boxShadow: "inset 0px 4px 10.5px 0px rgba(255, 255, 255, 0.25)",
              }}
              className="bg-neutral-140 text-white font-medium rounded-md py-4 px-6 tracking-wider font-mono flex items-center justify-between gap-4 text-[8px] md:text-base w-full h-full"
            >
              {data?.wallet_address}
              <GoCopy
                onClick={() => handleCopy(data?.wallet_address)}
                className={`${
                  isCopied ? "opacity-0 hidden" : "opacity-100 flex"
                } transition-all duration-300 cursor-pointer`}
              />
              <MdOutlineDone
                className={`${
                  isCopied ? "opacity-100 flex" : "opacity-0 hidden"
                } transition-all duration-300 cursor-pointer`}
              />
            </div>
          </div>

          <p className="text-red-500">
            This wallet address will be expired in {data?.expires_in}. Please
            make sure to deposit within the time limit.
          </p>
        </div>
      )}
    </div>
  );
};

export default MakeDeposit;
