import React from "react";

const BestOfButtons = () => {
  return (
    <div className="bestOutOfContainer">
      <h2>Select a Best-Out-Of 3 or 5 Game.</h2>
      <div className="bestOutOfButtons">
        <button type="button" value="3">
          Best of 3
        </button>
        <button type="button" value="5">
          Best of 5
        </button>
      </div>
    </div>
  );
};

export default BestOfButtons;
