import React from "react";
import BestOfButtons from "./BestOfButtons";
import StartResetButtons from "./StartResetButtons";

const ButtonsCont = () => {
  return (
    <div className="playerButtonsContainer">
      <BestOfButtons />
      <StartResetButtons />
    </div>
  );
};

export default ButtonsCont;
