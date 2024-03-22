import { useEffect, useState } from "react";

export const useInitialLoad = (setHistory: Function, initialPrompt: string) => {
	const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);

	useEffect(() => {
		if (isFirstLoad) {
			setHistory([
				{
					prompt: initialPrompt,
					input: "",
					output:
						"Welcome to drruvari's termfolio. Type 'help' for available commands.",
					className: "font-fascinate text-xl font-bold uppercase",
				},
			]);
			setIsFirstLoad(false);
		}
	}, [isFirstLoad, setHistory, initialPrompt]);

	return { isFirstLoad };
};
