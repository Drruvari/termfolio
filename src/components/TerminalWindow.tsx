import React from "react";
import CommandInput from "./CommandInput";
import HistoryEntry from "./HistoryEntry";
import WindowControls from "./WindowControls";
import CurrentTime from "./CurrentTime";
import CommandLogic from "./CommandLogic";
import backgroundImage from "../assets/background.png";
import InitialLoad from "./InitialLoad";
import { useCurrentTime } from "../hooks/useCurrentTime";

interface TerminalWindowProps {
	initialPrompt: string;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({ initialPrompt }) => {
	const currentTime = useCurrentTime();
	const {
		input,
		setInput,
		history,
		setHistory,
		prompt,
		handleKeyPress,
		showPlaceholder,
		setShowPlaceholder,
	} = CommandLogic(initialPrompt);
	InitialLoad(setHistory, initialPrompt);

	return (
		<div
			className="flex flex-col items-center justify-center min-h-screen px-4 py-2 sm:p-2 overflow-x-hidden"
			style={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="backdrop-filter backdrop-blur-sm w-full h-full absolute" />

			<div className="w-full max-w-4xl bg-gray-800 bg-opacity-80 text-gray-200 font-mono text-sm rounded-lg border border-gray-700 sm:max-w-xl md:max-w-4xl lg:max-w-7xl relative">
				<WindowControls />
				<CurrentTime currentTime={currentTime} />
				<div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent max-h-[calc(100vh-8rem)]">
					{history.map((entry, index) => (
						<HistoryEntry key={index} entry={entry} />
					))}
					<CommandInput
						prompt={prompt}
						input={input}
						setInput={setInput}
						handleKeyPress={handleKeyPress}
						showPlaceholder={showPlaceholder}
						setShowPlaceholder={setShowPlaceholder}
					/>
				</div>
			</div>
		</div>
	);
};

export default TerminalWindow;
