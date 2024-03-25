import React from "react";
import { motion } from "framer-motion";

const Error: React.FC = () => {
	return (
		<motion.div
			initial={{ x: -10 }}
			animate={{ x: 0 }}
			transition={{ type: "spring", stiffness: 300, damping: 30 }}
		>
			Command not found. Try
			<span className="text-yellow-500"> 'help' </span>
			for available commands.
		</motion.div>
	);
};

export default Error;
