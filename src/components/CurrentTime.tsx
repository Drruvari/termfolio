import React from "react";

const CurrentTime: React.FC<{ currentTime: string }> = ({ currentTime }) => {
  const lastCommaIndex = currentTime.lastIndexOf(",");
  const datePartCorrected = currentTime.substring(0, lastCommaIndex).trim();
  const timePartCorrected = currentTime.substring(lastCommaIndex + 1).trim();

  return (
    <div className="p-4 flex justify-between items-center">
      <div className="text-xs text-gray-400 font-semibold">
        Today is {datePartCorrected}
      </div>
      <div className="text-xs text-gray-400 font-semibold">
        {timePartCorrected}
      </div>
    </div>
  );
};

export default CurrentTime;
