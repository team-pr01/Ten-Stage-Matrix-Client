import ActionDetails from "../../../Reusable/ActionDetails/ActionDetails";

const RecentWithdraws = () => {
    const recentWithdraws = [
    {
      date: "2024-06-24",
      amount: "$2,000",
      status: "Complete",
      info: "Something",
      type: "Bank Transfer",
    },
    {
      date: "2024-06-24",
      amount: "$2,600",
      status: "Pending",
      info: "Something",
      type: "Crypto",
    },
    {
      date: "2024-06-24",
      amount: "$2,033",
      status: "Complete",
      info: "Something",
      type: "PayPal",
    },
    {
      date: "2024-06-24",
      amount: "$200",
      status: "Complete",
      info: "Something",
      type: "PayPal",
    },
  ];
    return (
        <div>
      <h1 className="text-xl text-white font-medium font-Outfit mt-8 mb-7">
        Withdrawal Details
      </h1>

      <ActionDetails data={recentWithdraws} />
    </div>
    );
};

export default RecentWithdraws;