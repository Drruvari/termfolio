import React from "react";
import { motion } from "framer-motion";

const commands = [
	{ command: "whoami", description: "about Kejdi" },
	{ command: "skills", description: "display my skills" },
	{ command: "clear", description: "clear command history" },
  { command: "banner", description: "display the terminal banner" },
  { command: "github", description: "visit my github profile" },
];

const Help: React.FC = () => {
	return (
		<motion.div
			initial={{ opacity: 0, x: -100 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.5 }}
		>
			{commands.map(({ command, description }, index) => (
				<div
					key={index}
					className="flex justify-start items-center bg-transparent"
				>
					<span className="text-green-500 font-semibold min-w-[6rem]">
						'{command}'
					</span>
					<span className="text-gray-400">- {description}</span>
				</div>
			))}
			<div className="mt-4 text-gray-400">
				<div>
					Press <span className="text-yellow-500">[Esc]</span> to clear the
					input field.
				</div>
				<div>
					Press <span className="text-yellow-500">[Tab]</span> for auto
					completion.
				</div>
			</div>
		</motion.div>
	);
};

export default Help;
