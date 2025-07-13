import { useOnSelectionChange, type Node } from "@xyflow/react";
import MessageDraggable from "./draggables/MessageDragabble";
import { useState } from "react";
import NodeInput from "./NodeInput";

export default function Panel() {
  const [selectedNode, setSelectedNode] = useState<Node>();

  useOnSelectionChange({
    onChange: ({ nodes }) => {
      setSelectedNode(nodes[0]);
    },
  });

  return (
    <div className="w-full h-full bg-white text-gray-900 p-4 flex flex-col justify-start font-sans text-base leading-6 border-l border-gray-300 shadow-inner">
      {selectedNode ? (
        <NodeInput node={selectedNode} />
      ) : (
        <>
          <p className="mb-4 text-gray-600">
            Drag any element to create a node
          </p>
          <MessageDraggable />
        </>
      )}
    </div>
  );
}
