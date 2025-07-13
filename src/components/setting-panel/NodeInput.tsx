import { useState, useEffect } from 'react';
import { useReactFlow, type Node } from '@xyflow/react';
import { nodeInputComponentMap } from './nodeinput.config';

interface NodeInputProps {
  node: Node;
}

export default function NodeInput({ node }: NodeInputProps) {
  const { updateNode } = useReactFlow();
  const [value, setValue] = useState(() => {
    const label = node.data?.label;
    return typeof label === 'string' ? label : '';
  });

  useEffect(() => {
    const label = node.data?.label;
    setValue(typeof label === 'string' ? label : '');
  }, [node]);

  if (!node.type) return <div className="text-sm text-gray-500">No input type provided</div>;

  const Input = nodeInputComponentMap[node.type];
  if (!Input) return <div className="text-sm text-red-500">No input available for node type "{node.type}"</div>;

  const handleUpdate = () => {
    updateNode(node.id, () => ({
      data: { label: value },
      selected: false,
    }));
  };

  return (
    <div className="space-y-4 font-sans">
      <div>
        <label htmlFor="node-input" className="block text-sm font-medium text-gray-700 mb-1">
          {node.type.charAt(0).toUpperCase() + node.type.slice(1)}
        </label>
        <Input value={value} onChange={setValue} />
      </div>

      <button
        onClick={handleUpdate}
        className="px-4 py-2 text-sm font-medium border border-emerald-500 text-emerald-600 rounded-md bg-white hover:bg-emerald-50 transition"
      >
        Update Node
      </button>
    </div>
  );
}
