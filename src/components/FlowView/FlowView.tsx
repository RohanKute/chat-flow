import React, { useState, useRef } from "react";
import PlaygroundView from "../playground/PlaygroundView";
import Panel from "../setting-panel/Panel";

import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import {
  type ReactFlowInstance,
  ReactFlowProvider,
} from "@xyflow/react";

import SaveFlow from "../buttons/SaveFlow";
import useSaveFlow from "../../hooks/useSaveFlow";
import ToasterConfig from "../common/Toaster.config";
import { useNodeCreator } from "../../hooks/useNodeCreator";
import { useFlowState } from "../../hooks/useFlowState";


const FlowView: React.FC = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance | null>(null);

  const { nodes, setNodes, onNodesChange, edges, onEdgesChange, onConnect } = useFlowState();
  const { onDragMove, onDragEnd } = useNodeCreator({ reactFlowInstance, setNodes, reactFlowWrapper });
  const onSave = useSaveFlow(nodes, edges);

  const sensors = useSensors(useSensor(PointerSensor));

  return (
    <ReactFlowProvider>
      <DndContext
        sensors={sensors}
        onDragMove={onDragMove}
        onDragEnd={onDragEnd}
      >
        <ToasterConfig />

        <div className="w-full h-[50px] bg-white flex items-center justify-end px-4 border border-gray-300">
          <SaveFlow onSave={onSave} />
        </div>

        <div className="w-full h-[calc(100vh-50px)] flex overflow-hidden m-0">
          <div className="flex-[3] relative" ref={reactFlowWrapper}>
            <PlaygroundView
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              setReactFlowInstance={setReactFlowInstance}
            />
          </div>
          <div className="flex-[1]">
            <Panel />
          </div>
        </div>
      </DndContext>
    </ReactFlowProvider>
  );
};

export default FlowView;
