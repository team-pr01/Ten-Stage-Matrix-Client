import {
  MdDashboard,
  MdPeopleAlt,
  MdOutlineSettings,
  MdReport,
} from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaDonate, FaLevelDownAlt, FaMoneyCheckAlt } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FiSend } from "react-icons/fi";

export const dashboardSidebarLinks = [
    {
      icon: <MdDashboard />,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <AiOutlineTransaction />,
      label: "Transactions",
      path: "/dashboard/transactions",
    },
    {
      icon: <FiSend />,
      label: "Fund Transfer",
      path: "/dashboard/fund-transfer",
    },
    {
      icon: <MdPeopleAlt />,
      label: "Network",
      path: "/dashboard/network",
    },
    {
      icon: <RiMoneyDollarCircleLine />,
      label: "Deposit",
      path: "/dashboard/deposit",
    },
    {
      icon: <FaMoneyCheckAlt />,
      label: "Withdraw",
      path: "/dashboard/withdraw",
    },
    {
      icon: <FaDonate />,
      label: "Donate",
      path: "/dashboard/donate",
    },
    {
      icon: <MdReport />,
      label: "Reports",
      path: "/dashboard/reports",
    },
    {
      icon: <FaLevelDownAlt />,
      label: "Levels",
      path: "/dashboard/levels",
    },
    {
      icon: <MdOutlineSettings />,
      label: "Setting",
      path: "/dashboard/setting",
    },
  ];