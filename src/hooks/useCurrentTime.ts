import { useState, useEffect } from "react";

export const useCurrentTime = (): string => {
	const formatDate = (date: Date): string => {
		const dateOptions: Intl.DateTimeFormatOptions = {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		};
		const timeOptions: Intl.DateTimeFormatOptions = {
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			hour12: true,
		};
		const dateString = date.toLocaleDateString("en-US", dateOptions);
		const timeString = date.toLocaleTimeString("en-US", timeOptions);
		return `${dateString}, ${timeString}`;
	};

	const [currentTime, setCurrentTime] = useState<string>(
		formatDate(new Date())
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTime(formatDate(new Date()));
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return currentTime;
};
