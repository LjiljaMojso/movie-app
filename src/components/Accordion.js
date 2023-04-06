import React, { useState } from "react";

const Accordion = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-8">
      <button
        className="p-2 hover:bg-[#181B37] rounded-xl"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        Show overview
      </button>
      {isExpanded && <p>{item.overview}</p>}
    </div>
  );
};

export default Accordion;
