import React from "react";

interface HistoryEntryProps {
  entry: {
    prompt: string;
    input: string;
    output: string | React.ReactNode;
  };
}

const HistoryEntry: React.FC<HistoryEntryProps> = ({ entry }) => {
  return (
    <div className="p-4 space-y-2">
      <div className="mb-1">
        <span className="text-purple-400">{entry.prompt}</span>
        <span> {entry.input}</span>
      </div>
      {typeof entry.output === "string" ? (
        <pre className="whitespace-pre-wrap break-words">{entry.output}</pre>
      ) : (
        <div className="mb-2">{entry.output}</div>
      )}
    </div>
  );
};

export default HistoryEntry;

