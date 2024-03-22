import { useState, useCallback, useMemo } from "react";

type CommandFunction = () => string;

interface Commands {
	[key: string]: CommandFunction;
}

interface CommandHistoryEntry {
	prompt: string;
	input: string;
	output: string | React.ReactNode;
}

export const useCommandLogic = (initialPrompt: string) => {
	const [input, setInput] = useState<string>("");
	const [history, setHistory] = useState<CommandHistoryEntry[]>([]);
	const [prompt, setPrompt] = useState<string>(initialPrompt);
	const [showPlaceholder, setShowPlaceholder] = useState(true);

	const commands: Commands = useMemo(
		() => ({
			help: () => "Available commands: clear, help, bio, skills",
			clear: () => {
				setTimeout(() => setHistory([]), 0);
				return "";
			},
			bio: () => {
				setPrompt(`${initialPrompt}/bio`);
				return "Displaying Bio...";
			},
			skills: () => {
				setPrompt(`${initialPrompt}/skills`);
				return "Displaying Skills...";
			},
		}),
		[initialPrompt, setHistory, setPrompt]
	);

	const executeCommand = useCallback(
		(command: string): string => {
			if (commands[command]) {
				return commands[command]();
			}
			return "Command not found. Try 'help' for available commands.";
		},
		[commands]
	);

	const handleKeyPress = useCallback(
		(event: React.KeyboardEvent<HTMLInputElement>): void => {
			if (event.key === "Enter") {
				const output: string = executeCommand(input);
				setHistory([...history, { prompt, input, output }]);
				setInput("");
				if (!commands[input]) {
					setPrompt(initialPrompt);
				}
			}
		},
		[input, history, prompt, commands, initialPrompt, executeCommand]
	);

	return {
		input,
		setInput,
		history,
		setHistory,
		prompt,
		handleKeyPress,
		showPlaceholder,
		setShowPlaceholder,
	};
};
