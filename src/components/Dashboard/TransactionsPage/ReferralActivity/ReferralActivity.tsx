/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { useGetReferralListQuery } from "../../../../redux/Features/User/userApi";
import Table from "../../../Reusable/Table/Table";
import { useState } from "react";

const ReferralActivity = () => {
  const [page, setPage] = useState(1);
    const [limit] = useState(10);
  const { data:referralList, isLoading, isFetching } = useGetReferralListQuery({
    page,
    limit,
  });
  
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
          referralList?.data?.referrals?.map((item: any, index: number) => ({
            serial_no: (page - 1) * limit + index + 1,
            name: (
              <Link
                to={`/dashboard/referral-details/${item?._id}`}
                className="underline"
              >
                {item.name}
              </Link>
            ),
            email: item.email,
            position:
              item.team_tree?.position === "left"
                ? "Line 1"
                : item.team_tree?.position === "right"
                ? "Line 3"
                : item.team_tree?.position === "center"
                ? "Line 2"
                : item?.position,
            status: (<p className="capitalize">{item.status}</p>),
            referral_code: item.referral_code,
            stage: `Stage ${item.stage}`,
          })) || []
        }
        isLoading={isLoading}
        isFetching={isFetching}
        AllData={referralList}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default ReferralActivity;
