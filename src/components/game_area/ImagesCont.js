import React from "react";

const ImagesCont = (props) => {
  return (
    <div className="gameArea">
      <div className="sideContainer">
        <h3 className={!props.showScores ? "hide" : ""}>
          Player's Score:
          <span>{` ${props.playNumerator}`}{props.dominator}</span>
        </h3>
        <div className={props.playerImage}></div>
      </div>

      <div className="divider"></div>

      <div className="sideContainer">
        <h3 className={!props.showScores ? "hide" : ""}>
          Computer's Score:
          <span>{` ${props.compNumerator}`}{props.dominator}</span>
        </h3>
        <div className={props.computerImage}></div>
      </div>
    </div>
  );
};

export default ImagesCont;
