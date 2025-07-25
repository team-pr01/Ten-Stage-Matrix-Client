/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import Table from "../../components/Reusable/Table/Table";
import Button from "../../components/Reusable/Button/Button";
import { useState } from "react";
import GraphView from "./GraphView";
import {useGetTeamTreeByIdListQuery } from "../../redux/Features/User/userApi";

const ReferralDetails = () => {
  const [viewMode, setViewMode] = useState("list");
  const { id } = useParams();
  const [page, setPage] = useState(1);
    const [limit] = useState(10);
  const { data, isLoading, isFetching } = useGetTeamTreeByIdListQuery({ id, page: 1, limit: 20 });
  console.log(data);
  return (
    <div className="font-Outfit min-h-screen">
      <div className="flex items-center gap-4 mb-5">
        <button
          onClick={() => setViewMode("list")}
          className="px-5 py-3 rounded-xl bg-neutral-25/10 text-white shadow-custom-dropdown transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 focus:outline-none cursor-pointer flex items-center justify-between gap-3 w-fit"
        >
          List View
        </button>
        <Button
          onClick={() => setViewMode("graph")}
          label="Graph View"
          classNames="w-[176px]"
        />
      </div>
      <div className="h-fit">
        {viewMode === "list" ? (
          <Table
            title={
              <h1 className="text-neutral-35 text-xl lg:text-2xl font-medium">
                Referral Details
              </h1>
            }
            tableHeaders={[
              "Serial No",
              "Name",
              "Status",
              "Stage",
            ]}
            data={
              data?.data?.map((item: any, index: number) => ({
                serial_no: (page - 1) * limit + index + 1,
                name: item.name,
                status: (<p className="capitalize">{item.status}</p>),
                stage: item.stage,
              })) || []
            }
            isLoading={isLoading}
            isFetching={isFetching}
            page={page}
            setPage={setPage}
            AllData={data}
          />
        ) : (
          <GraphView id={id ? id : ""} />
        )}
      </div>
    </div>
  );
};

export default ReferralDetails;
