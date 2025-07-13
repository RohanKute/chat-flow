// src/hooks/useNodeCreator.ts
import { useState, useCallback } from "react";
import { type ReactFlowInstance, type Node } from "@xyflow/react";
import { nanoid } from "nanoid";

interface NodeCreatorParams {
  reactFlowInstance: ReactFlowInstance | null;
  setNodes: (nodes: Node[] | ((nodes: Node[]) => Node[])) => void;
  reactFlowWrapper: React.RefObject<HTMLDivElement | null>;
}

export const useNodeCreator = ({
  reactFlowInstance,
  setNodes,
  reactFlowWrapper,
}: NodeCreatorParams) => {
  const [dragPosition, setDragPosition] = useState<{ x: number; y: number } | null>(null);

  const onDragMove = useCallback((event: any) => {
    if (event.delta) {
      setDragPosition({
        x: event.activatorEvent.clientX + event.delta.x,
        y: event.activatorEvent.clientY + event.delta.y,
      });
    }
  }, []);

  const onDragEnd = useCallback(
    (event: any) => {
      if (!event.over || event.over.id !== "playground-droppable-area") {
        setDragPosition(null);
        return;
      }

      if (!reactFlowInstance || !reactFlowWrapper.current) {
        setDragPosition(null);
        return;
      }

      const type = event.active.id as string;
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const clientX = dragPosition?.x || event.activatorEvent.clientX;
      const clientY = dragPosition?.y || event.activatorEvent.clientY;

      const position = reactFlowInstance.screenToFlowPosition({
        x: clientX - reactFlowBounds.left,
        y: clientY - reactFlowBounds.top,
      });

      const newNode: Node = {
        id: nanoid(),
        type,
        position,
        data: { label: "" }, 
      };

      setNodes((nds) => nds.concat(newNode));
      setDragPosition(null);
    },
    [dragPosition, reactFlowInstance, setNodes, reactFlowWrapper]
  );

  return { onDragMove, onDragEnd };
};