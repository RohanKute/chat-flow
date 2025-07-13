// src/hooks/useFlowState.ts
import { useCallback } from "react";
import {
  useNodesState,
  useEdgesState,
  addEdge,
  type Connection,
} from "@xyflow/react";
import { initialEdges, initialNodes } from "../constants/flowConstants";

export const useFlowState = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => {
      const isHandleAlreadyConnected = edges.some(
        (edge) => edge.source === params.source
      );

      if (isHandleAlreadyConnected) {
        console.warn(
          "Connection aborted: Source handle already has an outgoing edge."
        );
        return;
      }
      setEdges((eds) => addEdge(params, eds));
    },
    [edges, setEdges]
  );

  return {
    nodes,
    setNodes,
    onNodesChange,
    edges,
    onEdgesChange,
    onConnect,
  };
};