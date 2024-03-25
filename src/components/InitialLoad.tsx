import { useEffect, useState } from "react";
import Welcome from "./commands/Welcome";

const useInitialLoad = (setHistory: Function, initialPrompt: string) => {
	const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);

	useEffect(() => {
		if (isFirstLoad) {
			setHistory([
				{
					prompt: initialPrompt,
					input: "",
					output: <Welcome />,
				},
			]);
			setIsFirstLoad(false);
		}
	}, [isFirstLoad, setHistory, initialPrompt]);

	return { isFirstLoad };
};

export default useInitialLoad;
