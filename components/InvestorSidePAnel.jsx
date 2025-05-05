import { Fragment } from "react";

export default function SidePanelModal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-30 transition-opacity"
        onClick={onClose}
      />
      {/* Side Panel */}
      <div className="ml-auto w-full max-w-md bg-white shadow-xl h-full p-8 overflow-y-auto relative z-10">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
          onClick={onClose}
        >
          <span className="sr-only">Close</span>
          <svg width={24} height={24} fill="none" stroke="currentColor">
            <path
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}
