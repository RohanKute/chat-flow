interface MessageInputProps {
  value: string;
  onChange: (val: string) => void;
}

export default function MessageInput({ value, onChange }: MessageInputProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter your message..."
      className="w-full h-32 p-3 text-sm font-sans text-gray-800 border border-gray-300 rounded-md resize-y placeholder-gray-400 focus:outline-none focus:ring-0.2 focus:ring-emerald-400 focus:border-emerald-400 transition"
    />
  );
}
