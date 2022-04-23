import React from "react";

const BestOfButtons = (props) => {
  return (
    <div className={props.showBests ? "bestOutOfContainer" : "hide"}>
      <h2>Select a best-out-of 3 or 5 Game.</h2>
      <div className="bestOutOfButtons">
        <button type="button" value="3" onClick={props.typeOfGame}>
          Best of 3
        </button>
        <button type="button" value="5" onClick={props.typeOfGame}>
          Best of 5
        </button>
      </div>
    </div>
  );
};

export default BestOfButtons;
