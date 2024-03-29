import React from "react";
import BestOfButtons from "./BestOfButtons";
import StartResetButtons from "./StartResetButtons";

const ButtonsCont = (props) => {
  return (
    <div className="playerButtonsContainer">
      <BestOfButtons
        typeOfGame={props.typeOfGame}
        showBests={props.showBests}
      />
      <StartResetButtons
        startButtonText={props.startButtonText}
        startToPlay={props.startToPlay}
        hideStartButton={props.hideStartButton}
        reset={props.reset}
        showStartReset={props.showStartReset}
      />
    </div>
  );
};

export default ButtonsCont;
