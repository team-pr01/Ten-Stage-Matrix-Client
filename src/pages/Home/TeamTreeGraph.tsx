/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from "react";
import Tree from "react-d3-tree";
import { useGetReferralTreeQuery } from "../../redux/Features/User/userApi";
import { transformToD3Tree } from "./transformToTree";

export const TeamTreeGraph: React.FC = () => {
  const { data, isLoading, isError } = useGetReferralTreeQuery({});

  const treeData = useMemo(() => {
    if (!data?.data) return [];

    const transformed = transformToD3Tree(data.data);
    return transformed ? [transformed] : [];
  }, [data]);

  if (isLoading)
    return <div className="p-10 text-center text-white">Loading...</div>;
  if (isError)
    return (
      <div className="p-10 text-center text-red-500">Error loading tree</div>
    );
  if (treeData.length === 0)
    return (
      <div className="p-10 text-center text-white">No tree data available</div>
    );

  return (
    <div
      className="rounded-[28px] border-2 border-neutral-155 bg-neutral-155"
      style={{
        width: "100%",
        height: "600px",
        boxShadow: "inset 4px 4px 33.2px 0px rgba(255, 255, 255, 0.20)",
        backdropFilter: "blur(5.05px)",
      }}
    >
      <Tree
        data={treeData}
        orientation="vertical"
        translate={{ x: 400, y: 50 }}
        pathFunc="diagonal"
        separation={{ siblings: 1.5, nonSiblings: 2 }}
        renderCustomNodeElement={({ nodeDatum }) => {
          const firstChar = nodeDatum.name?.[0]?.toUpperCase() || "";

          return (
            <g>
              <rect
                width="60"
                height="60"
                x="-30"
                y="-30"
                fill="#fe7c0af3"
                rx={10}
                stroke="#dddddd11"
              />
              <text
                fill="black"
                stroke="black"
                strokeWidth={0.5}
                x="0"
                y="5"
                textAnchor="middle"
                style={{ fontWeight: "bold", fontSize: "18px" }}
              >
                {firstChar}
              </text>
              {/* <text
                fill=""
                x="0"
                y="15"
                textAnchor="middle"
                style={{ fontSize: "10px" }}
              >
                Stage {stage}
              </text> */}
              <title>
                {`Name: ${nodeDatum.attributes?.fullName}
Stage: ${nodeDatum.attributes?.stage}
Position: ${nodeDatum.attributes?.position}`}
              </title>
            </g>
          );
        }}
      />
    </div>
  );
};
