/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import Table from "../../components/Reusable/Table/Table";

const ReferralDetails = () => {
  // const { data, isLoading } = useGetReferralListQuery({});
  const { name, id } = useParams();
  console.log(id);
  const isLoading = false;
  const data = [
    {
      name: "Test",
      status: "Active",
      stage: "1",
      referralLevel: "Test",
    },
    {
      name: "Test",
      status: "Active",
      stage: "2",
      referralLevel: "Test",
    },
  ];
  return (
    <div className="font-Outfit min-h-screen">
      <div className="h-fit">
        <Table
          title={
            <h1 className="text-neutral-35 text-xl lg:text-2xl font-medium">
              Referral Details of{" "}
              <span className="text-white font-bold">{name}</span>
            </h1>
          }
          tableHeaders={[
            "Serial No",
            "Name",
            "Status",
            "Stage",
            "Referral Level",
          ]}
          data={
            data?.map((item: any) => ({
              name: item.name,
              status: item.status,
              stage: item.stage,
              referral_level: item?.referralLevel,
            })) || []
          }
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default ReferralDetails;
