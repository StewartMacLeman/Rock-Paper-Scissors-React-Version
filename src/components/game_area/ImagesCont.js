import React from "react";

const ImagesCont = (props) => {
  return (
    <div className="gameArea">
      <div className="sideContainer">
        <h2>
          Player's Score:
          <span>{` ${props.playNumerator}`}{props.dominator}</span>
        </h2>
        <div className={props.playerImage}></div>
      </div>

      <div className="divider"></div>

      <div className="sideContainer">
        <h2>
          Computer's Score:
          <span>{` ${props.compNumerator}`}{props.dominator}</span>
        </h2>
        <div className={props.computerImage}></div>
      </div>
    </div>
  );
};

export default ImagesCont;
