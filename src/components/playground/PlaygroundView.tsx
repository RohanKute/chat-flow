import React from 'react';
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  Controls,
  type Node,
  type Edge,
  type OnNodesChange,
  type OnEdgesChange,
  type OnConnect,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import MessageNode from './nodes/MessageNode';
import { useDroppable } from '@dnd-kit/core';

const nodeTypes = {
  message: MessageNode
};

interface PlaygroundViewProps {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  setReactFlowInstance: (instance: any) => void;
}

const PlaygroundView: React.FC<PlaygroundViewProps> = ({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onConnect,
  setReactFlowInstance
}) => {
  const { setNodeRef } = useDroppable({
    id: 'playground-droppable-area',
  });

  return (
    <div className="h-full w-full" ref={setNodeRef}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        fitView
        multiSelectionKeyCode={null}
        selectionOnDrag={false}
      >
        <Controls />
        <Background color="#ccc" variant={BackgroundVariant.Cross} />
      </ReactFlow>
    </div>
  );
};

export default PlaygroundView;
