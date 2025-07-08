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
      email: "test@gmail.com",
      role: "Test",
      referralLevel: "Test",
    },
    {
      name: "Test",
      email: "test@gmail.com",
      role: "Test",
      referralLevel: "Test",
    },
  ];
  return (
    <div className="font-Outfit">
      <Table
        title={
          <h1 className="text-neutral-35 text-xl lg:text-2xl font-medium">
            Referral Details of{" "}
            <span className="text-white font-bold">{name}</span>
          </h1>
        }
        tableHeaders={["Serial No", "Name", "Email", "Role", "Referral Level"]}
        data={
          data?.map((item: any) => ({
            name: item.name,
            email: item.email,
            role: item.role,
            referral_level: item?.referralLevel,
          })) || []
        }
        isLoading={isLoading}
      />
    </div>
  );
};

export default ReferralDetails;
