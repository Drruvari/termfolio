import React from "react";

const WindowControls: React.FC = () => {
	return (
		<div className="p-4 border-b border-gray-700 bg-gray-700 rounded-t">
			<div className="top flex space-x-2">
				<div className="h-3 w-3 bg-red-500 rounded-full"></div>
				<div className="h-3 w-3 bg-yellow-400 rounded-full"></div>
				<div className="h-3 w-3 bg-green-500 rounded-full"></div>
			</div>
		</div>
	);
};

export default WindowControls;
