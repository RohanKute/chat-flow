import { memo } from "react";
import { Handle, Position } from "@xyflow/react";
import { FaWhatsapp } from "react-icons/fa";

function MessageNode({ data, selected }: any) {
  return (
    <div
      className={`bg-white rounded-lg w-[125px] overflow-hidden font-sans shadow-md border ${
        selected ? "border-indigo-500" : "border-slate-200"
      }`}
    >
      <Handle
        type="target"
        position={Position.Left}
        style={{ top: "50%", background: "#555" }}
      />

      <div className="bg-[#48c39a] text-black px-3 py-1 text-[8px] font-semibold flex items-center justify-between">
        <span>Send Message</span>
        <FaWhatsapp size={10} />
      </div>

      <div
        className={`px-3 py-2 min-h-[25px] text-[8px] ${
          data.label ? "text-[#1a192b]" : "text-[#696969] italic"
        }`}
      >
        <span>{data.label || "Your message here..."}</span>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        style={{ top: "50%", background: "#555" }}
      />
    </div>
  );
}

export default memo(MessageNode);
