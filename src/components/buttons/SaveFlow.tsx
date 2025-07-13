import React from 'react';

interface SaveFlowProps {
  onSave: () => void;
}

const SaveFlow: React.FC<SaveFlowProps> = ({ onSave }) => {
  return (
    <button
      onClick={onSave}
      className="ml-auto inline-flex items-center gap-2 px-5 py-2 border border-emerald-500 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 active:scale-95 transition-all duration-200 shadow-sm"
    >
      Save Flow
    </button>
  );
};

export default SaveFlow;
