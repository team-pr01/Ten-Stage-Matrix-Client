/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { ICONS } from "../../../../assets";
import { useMakeDepositMutation } from "../../../../redux/Features/Deposit/depositApi";
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import { useState, useEffect } from 'react';
import { contractAbiUsdt } from '../../../../utile/ContractABIUSDT';

// USDT Contract Address (Ethereum Mainnet)
const USDT_CONTRACT_ADDRESS = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
const WALLET_ADDRESS = '0x797bb6C4544B0B7ba2609111bb39a650d91dB66F';
const DECIMAL_VALUE = 'ether'; // USDT has 18 decimals

// Add ethereum to window type
declare global {
  interface Window {
    ethereum: any;
  }
}

type TFormValues = {
  amount: string;
};

const MakeDeposit = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [balance, setBalance] = useState<string>('0');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();

  const [deposit] = useMakeDepositMutation();

  // Function to get USDT balance
  const getBalance = async () => {
    try {
      const web3 = new Web3(window.ethereum);
      const usdtContract = new web3.eth.Contract(contractAbiUsdt(), USDT_CONTRACT_ADDRESS);
      
      const balance = await usdtContract.methods.balanceOf(WALLET_ADDRESS).call();
      if (balance) {
        const formattedBalance = Web3.utils.fromWei(String(balance), DECIMAL_VALUE);
        setBalance(formattedBalance);
      }
    } catch (error) {
      console.error('Error getting balance:', error);
    }
  };

  // Get balance on component mount
  useEffect(() => {
    getBalance();
  }, []);

  // Function to connect to MetaMask
  const connectWallet = async () => {
    try {
      const provider = await detectEthereumProvider();
      
      if (!provider) {
        alert('Please install MetaMask!');
        return false;
      }

      // Request account access
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      return true;
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
      return false;
    }
  };

  // Function to handle USDT payment
  const handlePayment = async (amount: string) => {
    try {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      
      if (accounts.length === 0) {
        alert('Please connect your MetaMask wallet first!');
        return;
      }

      // Get current gas price
      const gasPrice = await web3.eth.getGasPrice();
      const gasPriceInGwei = Web3.utils.fromWei(gasPrice, 'gwei');

      // Create USDT contract instance
      const usdtContract = new web3.eth.Contract(contractAbiUsdt(), USDT_CONTRACT_ADDRESS);
      
      // Convert amount to USDT decimals
      const usdtAmount = Web3.utils.toWei(amount, DECIMAL_VALUE);

      // Send USDT transaction
      const transaction = await usdtContract.methods.transfer(
        WALLET_ADDRESS,
        usdtAmount
      ).send({
        from: accounts[0],
        gas: '100000',
        gasPrice: Web3.utils.toWei(gasPriceInGwei, 'gwei')
      });

      // Update balance after successful transfer
      await getBalance();

      return transaction;
    } catch (error) {
      console.error('Error processing payment:', error);
      throw error;
    }
  };

  // Function to deposit
  const handleMakeDeposit = async (data: TFormValues) => {
    try {
      setIsConnecting(true);
      
      // Connect to MetaMask
      const isConnected = await connectWallet();
      if (!isConnected) {
        setIsConnecting(false);
        return;
      }

      // Process payment
      const transaction = await handlePayment(data.amount);
      
      if (!transaction) {
        throw new Error('Transaction failed');
      }

      // If payment successful, proceed with deposit
      const payload = {
        amount: data.amount,
        wallet_address:transaction?.from,
        network: "BSC",
        payment_method: "metamask",
        trx_id: transaction.transactionHash,
        type : "Deposit"
      };

      const response = await deposit(payload).unwrap();
      if (response?.message) {
        alert(response?.message || "Deposit successful!");
      }
    } catch (error) {
      console.error(error);
      alert('Error processing payment. Please try again.');
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="font-Outfit">
      <h1 className="text-xl text-white font-medium mt-[57px]">
        Minimum Deposit $10
      </h1>
      <div className="mt-4 text-white">
        <p>Your USDT Balance: {balance} USDT</p>
      </div>
      <form onSubmit={handleSubmit(handleMakeDeposit)}>
        <div className="flex flex-col gap-2 mt-[22px]">
          <label htmlFor="" className="text-neutral-125 text-lg font-medium">
            Amount (USDT)
          </label>
          <div className="flex items-center justify-between max-w-[415px] relative">
            <input
              type="text"
              placeholder="Enter your amount in USDT"
              {...register("amount", {
                required: "Amount is required",
                min: {
                  value: 10,
                  message: "Minimum deposit is $10"
                }
              })}
              className={`w-full p-3 rounded-[8px] border border-neutral-130 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85 ${
                errors?.amount ? "border-red-500" : "border-neutral-130"
              }`}
            />
            <img
              src={ICONS.currency}
              alt=""
              className="size-6 absolute right-3"
            />
          </div>
          {errors?.amount && (
            <span className="text-red-500 text-sm">
              {errors.amount.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          disabled={isConnecting}
          className={`p-[10px] w-[119px] h-10 rounded-[80px] bg-primary-10 text-white font-medium text-center cursor-pointer mt-[21px] flex items-center justify-center ${
            isConnecting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isConnecting ? 'Processing...' : 'Confirm'}
        </button>
      </form>
    </div>
  );
};

export default MakeDeposit;
