import { useState, useCallback, useMemo } from "react";
import Skills from "../components/commands/Skills";
import Bio from "../components/commands/Bio";
import Help from "../components/commands/Help";
import Error from "../components/commands/Error";
import Welcome from "../components/commands/Welcome";

type CommandFunction = () => string | React.ReactNode;

interface Commands {
	[key: string]: CommandFunction;
}

interface CommandHistoryEntry {
	prompt: string;
	input: string;
	output: string | React.ReactNode;
}

const useCommandLogic = (initialPrompt: string) => {
	const [input, setInput] = useState<string>("");
	const [history, setHistory] = useState<CommandHistoryEntry[]>([]);
	const [prompt, setPrompt] = useState<string>(initialPrompt);
	const [showPlaceholder, setShowPlaceholder] = useState(true);

	const commands: Commands = useMemo(
		() => ({
			help: () => <Help />,
			whoami: () => {
				setPrompt(`${initialPrompt}/whoami`);
				return <Bio />;
			},
			skills: () => {
				setPrompt(`${initialPrompt}/skills`);
				return <Skills />;
			},
			clear: () => {
				setTimeout(() => setHistory([]), 0);
				return "";
			},
			banner: () => {
				return <Welcome />;
			},
		}),
		[initialPrompt, setHistory, setPrompt]
	);

	const executeCommand: (command: string) => React.ReactNode = useCallback(
		(command: string) => {
			if (commands[command]) {
				return commands[command]();
			}
			return <Error />;
		},
		[commands]
	);

	const handleKeyPress = useCallback(
		(event: React.KeyboardEvent<HTMLInputElement>): void => {
			if (event.key === "Enter") {
				const output: React.ReactNode = executeCommand(input);
				setHistory([...history, { prompt, input, output }]);
				setInput("");
				if (!commands[input]) {
					setPrompt(initialPrompt);
				}
			}
			if (event.key === "Escape") {
				setInput("");
				setShowPlaceholder(true);
				setPrompt(initialPrompt);
			}
			if (event.key === "Tab") {
				event.preventDefault();
				const suggestions = Object.keys(commands).filter((command) =>
					command.startsWith(input)
				);
				if (suggestions.length > 0) {
					setInput(suggestions[0]);
					setShowPlaceholder(false);
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

export default useCommandLogic;
