import React from "react";
interface TreeNodeData {
  name: string;
  color: "light" | "dark";
  children?: TreeNodeData[];
}

interface TreeProps {
  node: TreeNodeData;
}
export const ReferralTree: React.FC<TreeProps> = ({ node }) => {
  const hasChildren = node.children && node.children.length > 0;
  const isMultiChild = hasChildren && node?.children!.length > 1;

  const nodeStyles = {
    light: "bg-sky-300 text-slate-900",
    dark: "bg-slate-800 text-white",
  };

  const NodeDisplay = (
    <div
      className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-lg font-semibold shadow-md ${
        nodeStyles[node.color]
      }`}
    >
      {node.name}
    </div>
  );

  return (
    <div className="flex flex-col items-center w-full max-w-full overflow-x-auto">
    {/* Render the current node */}
    {NodeDisplay}

    {/* Render children and connectors if they exist */}
    {hasChildren && (
      <div className="relative flex flex-wrap justify-center w-full max-w-full">
        {/* Connector line from Parent to the horizontal line */}
        <div className="absolute bottom-full left-1/2 h-8 w-0.5 -translate-x-1/2 bg-slate-400" />

        {/* Horizontal line: only rendered if there are multiple children */}
        {isMultiChild && (
          <div className="absolute left-0 right-0 top-0 h-0.5 bg-slate-400" />
        )}

        {/* Map through children and render them recursively */}
        {node?.children?.map((child) => (
          <div
            key={child.name}
            className="relative px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10"
          >
            {/* Vertical line from horizontal bar down to the child */}
            <div className="absolute left-1/2 top-0 h-8 w-0.5 -translate-x-1/2 bg-slate-400" />

            {/* Arrowhead pointing down to the child node */}
            <div
              className="absolute top-[2rem] left-1/2 h-0 w-0 -translate-x-1/2
                         border-x-[6px] border-t-[8px]
                         border-solid border-x-transparent border-t-slate-400"
            />

            {/* Add padding-top to create space for the lines and arrows */}
            <div className="pt-16">
              <ReferralTree node={child} />
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
  );
};