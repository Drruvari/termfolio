import React from "react";
import Help from "./Help";
import { motion } from "framer-motion";

const Welcome: React.FC = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			className="text-xl uppercase"
		>
			Welcome to drruvari's termfolio. Type
			<span className="text-lime-500"> 'help' </span>
			for available commands.
			<div className="mt-4 text-sm normal-case">
				<Help />
			</div>
			<div className="text-lime-600 mt-4">
				<p>
					<pre>
						███████╗██╗&nbsp;&nbsp;██╗███████╗██╗&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██╗
					</pre>
				</p>
				<p>
					<pre>
						██╔════╝██║&nbsp;&nbsp;██║██╔════╝██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██║
					</pre>
				</p>
				<p>
					<pre>
						███████╗███████║█████╗&nbsp;&nbsp;██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██║
					</pre>
				</p>
				<p>
					<pre>
						╚════██║██╔══██║██╔══╝&nbsp;&nbsp;██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██║
					</pre>
				</p>
				<p>
					<pre>███████║██║&nbsp;&nbsp;██║███████╗███████╗███████╗</pre>
				</p>
				<p>
					<pre>╚══════╝╚═╝&nbsp;&nbsp;╚═╝╚══════╝╚══════╝╚══════╝</pre>
				</p>
			</div>
		</motion.div>
	);
};

export default Welcome;
