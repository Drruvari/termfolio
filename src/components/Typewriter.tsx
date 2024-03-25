import React from "react";
import { motion } from "framer-motion";

const Typewriter = ({ text, typingDelay = 0.009 }) => {
	const characters = text.split("");

	const variants = {
		hidden: { opacity: 0, y: -20 },
		visible: (i) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * typingDelay,
				duration: 0.1,
				ease: "easeInOut",
			},
		}),
	};

	return (
		<div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
			{characters.map((char, index) => (
				<motion.span
					key={index}
					custom={index}
					variants={variants}
					initial="hidden"
					animate="visible"
					style={{ whiteSpace: "pre-wrap" }}
				>
					{char}
				</motion.span>
			))}
		</div>
	);
};

export default Typewriter;
