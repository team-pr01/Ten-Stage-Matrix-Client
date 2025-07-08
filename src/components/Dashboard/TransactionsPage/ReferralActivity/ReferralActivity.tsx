/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { useGetReferralListQuery } from "../../../../redux/Features/User/userApi";
import Table from "../../../Reusable/Table/Table";

const ReferralActivity = () => {
  const { data, isLoading } = useGetReferralListQuery({});
  console.log(data);
  return (
    <div>
      <Table
        title="Referral Activity"
        tableHeaders={[
          "Serial No",
          "Name",
          "Email",
          "Position",
          "Status",
          "Referral Code",
          "Stage",
        ]}
        data={
          data?.data?.referrals?.map((item: any) => ({
            name: (
              <Link
                to={`/dashboard/referral-details/${item?.name}/${item?._id}`}
                className="underline"
              >
                {item.name}
              </Link>
            ),
            email: item.email,
            position: item.team_tree?.position,
            status: item.status,
            referral_code: item.referral_code,
            stage: `Stage ${item.stage}`,
          })) || []
        }
        isLoading={isLoading}
      />
    </div>
  );
};

export default ReferralActivity;
