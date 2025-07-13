import { useCallback } from "react";
import { toast } from "react-hot-toast";
import type { Node, Edge } from "@xyflow/react";

const useSaveFlow = (nodes: Node[], edges: Edge[]) => {
  return useCallback(() => {
    if (!nodes || nodes.length === 0) {
      toast.error("Cannot save: The flow is empty.");
      return;
    }

    const targetNodeIds = new Set(edges.map((edge) => edge.target));
    const unconnectedNodes = nodes.filter((node) => !targetNodeIds.has(node.id));

    if (nodes.length > 1 && unconnectedNodes.length > 1) {
      toast.error("Cannot save: Multiple nodes are missing incoming connections.");
      return;
    }

    const hasEmptyLabels = nodes.some(
      (node) => typeof node.data?.label !== "string" || node.data.label.trim() === ""
    );

    if (hasEmptyLabels) {
      toast.error("Cannot save: All nodes must have a message.");
      return;
    }

    // Passed all checks
    console.log("✅ Flow saved successfully!", { nodes, edges });
    toast.success("Flow saved successfully!");
  }, [nodes, edges]);
};

export default useSaveFlow;
