import { useMemo } from "react";
import { useGetReferralTreeQuery } from "../../redux/Features/User/userApi";
import Tree from "react-d3-tree";
import { transformToGraph } from "./transformToGraph";

const GraphView = () => {
    const { data, isLoading, isError } = useGetReferralTreeQuery({});
      console.log(data);
    
      const treeData = useMemo(() => {
        if (!data?.data) return [];
    
        const transformed = transformToGraph(data.data);
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
          const fullName = nodeDatum.attributes?.fullName || "N/A";
          const stage = nodeDatum.attributes?.stage || "N/A";
          const position = nodeDatum.attributes?.position || "N/A";
         const referredBy =
           typeof nodeDatum.attributes?.referred_by === "object" && nodeDatum.attributes?.referred_by !== null
             ? (nodeDatum.attributes?.referred_by as { name?: string }).name || "N/A"
             : nodeDatum.attributes?.referred_by ?? "N/A";

          return (
            <g>
              {/* Rectangle for the node */}
              <rect
                width="140"
                height="120"
                x="-70"
                y="-60"
                fill="#dddddd"
                rx={10}
                stroke="#dddddd11"
              />
              
              {/* Node details with consistent styling */}
              <text
                fill="black"
                x="0"
                y="-30"
                textAnchor="middle"
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  fontFamily: "Arial, sans-serif" // Ensures consistent font rendering
                }}
              >
                {fullName}
              </text>
              
              <text
                fill="black"
                x="0"
                y="-10"
                textAnchor="middle"
                style={{
                  fontSize: "10px",
                  fontWeight: "normal",
                  fontFamily: "Arial, sans-serif"
                }}
              >
                Stage: {stage}
              </text>
              
              <text
                fill="black"
                x="0"
                y="10"
                textAnchor="middle"
                style={{
                  fontSize: "10px",
                  fontWeight: "normal",
                  fontFamily: "Arial, sans-serif"
                }}
              >
                Position: {position}
              </text>
              
              <text
                fill="black"
                x="0"
                y="30"
                textAnchor="middle"
                style={{
                  fontSize: "10px",
                  fontWeight: "normal",
                  fontFamily: "Arial, sans-serif"
                }}
              >
                Referred by: {referredBy}
              </text>

              {/* Tooltip (shows on hover) */}
              <title>
                {`Name: ${fullName}
Stage: ${stage}
Position: ${position}
Referred by: ${referredBy}`}
              </title>
            </g>
          );
        }}
      />
    </div>
    );
};

export default GraphView;