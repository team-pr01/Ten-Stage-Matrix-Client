/* eslint-disable @typescript-eslint/no-explicit-any */
export const transformToD3Tree = (node: any | null): any => {
  if (!node || typeof node !== "object") return null;

  const children: any[] = [];

  if (node.children) {
    const { left, center, right } = node.children;

    if (left) children.push(transformToD3Tree(left));
    if (center) children.push(transformToD3Tree(center));
    if (right) children.push(transformToD3Tree(right));
  }

  return {
    name: node.name?.charAt(0) ?? "?",
    attributes: {
      fullName: node.name ?? "Unknown",
      position: node.position ?? "",
      stage: node.stage ?? "",
      referred_by: node.referred_by,
      status: node.status,
    },
    children: children.filter(Boolean),
  };
};
