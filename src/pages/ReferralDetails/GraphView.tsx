import { useMemo } from "react";
import Tree from "react-d3-tree";
import { transformToGraph } from "./transformToGraph";
import { useGetAllReferralListQuery } from "../../redux/Features/User/userApi";

const GraphView = ({ id }: { id: string }) => {
  const { data, isLoading, isError } = useGetAllReferralListQuery(id);

  const treeData = useMemo(() => {
    if (!data?.data?.length) return [];

    const root = data.data[0];
    const transformed = transformToGraph(root);
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
          const status = nodeDatum.attributes?.status || "N/A";
          const referral_level =
            typeof nodeDatum.attributes?.referral_level === "object" &&
            nodeDatum.attributes?.referral_level !== null
              ? (nodeDatum.attributes?.referral_level as { name?: string }).name ||
                "N/A"
              : String(nodeDatum.attributes?.referral_level ?? "N/A");

          const nodeWidth = 140;
          const nodeHeight = 120;
          const isActive = nodeDatum.attributes?.status === "active";

          return (
            <g>
              <foreignObject
                x={-nodeWidth / 2}
                y={-nodeHeight / 2}
                width={nodeWidth}
                height={nodeHeight}
              >
                <div
                  style={{
                    width: `${nodeWidth}px`,
                    height: `${nodeHeight}px`,
                    background:
                      data?.data?.status === "active"
                        ? "linear-gradient(127deg, #7BFFC0 2.28%, #FFCF84 97.9%)"
                        : "#1F1F1F",
                    boxShadow: isActive
                      ? undefined
                      : "inset 4px 4px 33.2px 0px rgba(255, 255, 255, 0.20)",
                    backdropFilter: isActive ? undefined : "blur(5.05px)",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    fontFamily: "Arial, sans-serif",
                    color:
                      data?.data?.status === "active" ? "black" : "#ffffff",
                    WebkitFontSmoothing: "antialiased",
                    MozOsxFontSmoothing: "grayscale",
                  }}
                  title={`Name: ${fullName}\nStage: ${stage}\nstatus: ${status}\nReferred by: ${referral_level}`}
                >
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      marginBottom: "4px",
                    }}
                  >
                    {fullName}
                  </div>
                  <div style={{ fontSize: "10px", lineHeight: "1.4" }}>
                    Stage: {stage}
                  </div>
                  <div style={{ fontSize: "10px", lineHeight: "1.4" }}>
                    Status: {status}
                  </div>
                  <div style={{ fontSize: "10px", lineHeight: "1.4" }}>
                    Referral Level : {referral_level}
                  </div>
                </div>
              </foreignObject>
            </g>
          );
        }}
      />
    </div>
  );
};

export default GraphView;
