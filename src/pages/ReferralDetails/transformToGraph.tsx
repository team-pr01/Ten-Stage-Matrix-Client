/* eslint-disable @typescript-eslint/no-explicit-any */
export const transformToGraph = (node: any | null): any => {
  if (!node || typeof node !== "object") return null;

  const children: any[] = [];

  if (node.children) {
    const { left, center, right } = node.children;

    if (left) children.push(transformToGraph(left));
    if (center) children.push(transformToGraph(center));
    if (right) children.push(transformToGraph(right));
  }

  return {
    name: node.name?.charAt(0) ?? "?",
    attributes: {
      fullName: node.name ?? "Unknown",
      position: node.position ?? "",
      stage: node.stage ?? "",
      referred_by: node.referred_by,
    },
    children: children.filter(Boolean),
  };
};
