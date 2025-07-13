import { MdMessage } from "react-icons/md";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function MessageDraggable() {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: "message",
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    backgroundColor: isDragging ? 'rgba(37, 99, 235, 0.1)' : undefined, // Light blue fill when dragging
    cursor: 'grab',
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`w-44 h-24 border-2 rounded-lg font-sans shadow-sm flex flex-col items-center justify-center
        border-blue-600 
        ${isDragging ? 'text-blue-700' : 'text-blue-600'}
        hover:bg-blue-50`}
    >
      <MdMessage size={24} className="mb-1" />
      <p className="text-sm font-medium">Message</p>
    </div>
  );
}
