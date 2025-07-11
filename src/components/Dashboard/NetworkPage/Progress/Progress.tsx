/* eslint-disable @typescript-eslint/no-explicit-any */
import Table from "../../../Reusable/Table/Table";

const Progress = () => {
  const isLoading = false;

  const dummyData = [
    {
      serial_no: 1,
      stage: "Stage 1",
      line_1: "Alice Johnson",
      line_2: "Bob Smith",
      line_3: "Carol Davis",
      active_referrals: 5,
      upgrade_status: "Pending",
    },
    {
      serial_no: 1,
      stage: "Stage 1",
      line_1: "Alice Johnson",
      line_2: "Bob Smith",
      line_3: "Carol Davis",
      active_referrals: 5,
      upgrade_status: "Pending",
    },
    {
      serial_no: 1,
      stage: "Stage 1",
      line_1: "Alice Johnson",
      line_2: "Bob Smith",
      line_3: "Carol Davis",
      active_referrals: 5,
      upgrade_status: "Pending",
    },
  ];

  return (
    <div className="font-Outfit min-h-screen">
      <Table
        title="Your Progress"
        tableHeaders={[
          "Serial No",
          "Stage",
          "Line 1",
          "Line 2",
          "Line 3",
          "Active Referrals",
          "Upgrade Status",
        ]}
        data={dummyData}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Progress;
