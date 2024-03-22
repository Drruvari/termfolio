import React from "react";
import TerminalWindow from "./components/TerminalWindow";

const App: React.FC = () => {
	const initialPrompt: string = "~/drruvari/portfolio";

	return <TerminalWindow initialPrompt={initialPrompt} />;
};

export default App;
