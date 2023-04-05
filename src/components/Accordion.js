import React, { useState } from "react";

const Accordion = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-8">
      <button className="p-2" onClick={() => setIsExpanded(!isExpanded)}>
        Show overview
      </button>
      {isExpanded && <p>{item.overview}</p>}
    </div>
  );
};

export default Accordion;
