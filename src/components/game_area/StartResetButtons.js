import React from "react";

const StartResetButtons = (props) => {
  return (
    <div className={!props.showStartReset ? "hide" : "startAndResetContainer"}>
      <div className="startAndResetButtons">
        <button type="button" onClick={props.startToPlay}>Start</button>
        <button type="button" onClick={props.reset}>Reset</button>
      </div>
    </div>
  );
};

export default StartResetButtons;
