import React from "react";

interface CommandInputProps {
  prompt: string;
  input: string;
  showPlaceholder: boolean;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setShowPlaceholder: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommandInput: React.FC<CommandInputProps> = ({
  prompt,
  input,
  showPlaceholder,
  handleKeyPress,
  setInput,
  setShowPlaceholder,
}) => {
  return (
    <div className="flex p-2 sm:p-4 space-x-2 w-full">
      <span className="text-purple-400">{prompt}</span>
      <div className="flex flex-1 ml-2 relative">
        <input
          type="text"
          id="commandInput"
          className="absolute inset-0 bg-transparent w-full outline-none text-white text-xs sm:text-sm"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setShowPlaceholder(e.target.value === "");
          }}
          onKeyDown={handleKeyPress}
          autoFocus
          autoComplete="off"
        />
        {showPlaceholder && (
          <label
            htmlFor="commandInput"
            className="cursor-text text-gray-500 text-opacity-50 animate-pulse text-xs sm:text-sm"
          >
            try help, skills, whoami
          </label>
        )}
      </div>
    </div>
  );
};

export default CommandInput;
