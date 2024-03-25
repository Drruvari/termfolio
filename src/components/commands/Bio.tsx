import React from "react";
import Typewriter from "../Typewriter";

const Bio: React.FC = () => {
	return (
		<div className="text-white space-y-2">
			<Typewriter text="Hello! I am a front-end developer specializing in React.js, with 3 years of professional experience crafting responsive and user-friendly web applications. My journey in tech has been driven by my passion for creating intuitive digital experiences and my commitment to continuous learning. Beyond coding, I am an MMA enthusiast, embracing the discipline and resilience it teaches, which I also bring to my professional projects. Let's connect and create something amazing together!" />
		</div>
	);
};

export default Bio;
