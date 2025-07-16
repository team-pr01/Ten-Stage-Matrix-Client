/* eslint-disable @typescript-eslint/no-explicit-any */
import { formatDate } from "../../../../utile/formatDate";
import Table from "../../../Reusable/Table/Table";

const AllGeneratedAddresses = () => {
  const isLoading = false;
  const data = [
    {
      walletAddress: "adsyausdyiasduyasdasdasdasdsa",
      created_at: "2023-01-01",
    },
    {
      walletAddress: "adsyausdyiasduyasdasdasdasdsa",
      created_at: "2023-01-01",
    },
    {
      walletAddress: "adsyausdyiasduyasdasdasdasdsa",
      created_at: "2023-01-01",
    },
  ];

  return (
    <div>
      <Table
        title="Your Generated Wallet Addresses"
        tableHeaders={["Serial No", "Wallet Address", "Created At"]}
        data={
          data?.map((item: any, index: number) => ({
            serial_no: index + 1,
            wallet_address: item.walletAddress,
            created_at: formatDate(item?.created_at),
          })) || []
        }
        isLoading={isLoading}
      />
    </div>
  );
};

export default AllGeneratedAddresses;
