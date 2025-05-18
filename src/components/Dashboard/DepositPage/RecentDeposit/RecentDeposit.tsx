import ActionDetails from "../../../Reusable/ActionDetails/ActionDetails";

const RecentDeposit = () => {
  const recentDeposits = [
    {
      date: "2024-06-24",
      amount: "$2,000",
      status: "Complete",
      info: "Something",
      type: "Deposit",
    },
    {
      date: "2024-06-24",
      amount: "$2,600",
      status: "Pending",
      info: "Something",
      type: "Withdrawal",
    },
    {
      date: "2024-06-24",
      amount: "$2,033",
      status: "Complete",
      info: "Something",
      type: "Donation",
    },
    {
      date: "2024-06-24",
      amount: "$200",
      status: "Complete",
      info: "Something",
      type: "Deposit",
    },
  ];
  return (
    <div>
      <h1 className="text-xl text-white font-medium font-Outfit mt-8 mb-7">
        Deposit Details
      </h1>

      <ActionDetails data={recentDeposits} />
    </div>
  );
};

export default RecentDeposit;
