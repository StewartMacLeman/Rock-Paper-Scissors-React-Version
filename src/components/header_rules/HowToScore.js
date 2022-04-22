import React from "react";

const HowToScore = () => {
  return (
    <>
      <h2>How to Score!</h2>
      <div className="scoresContainer">
        <div className="scoresPair">
          <div className="scoresItem">
            <p>Rock</p>
            <div className="scoresImageDiv images player_rock"></div>
          </div>
          <p>Beats</p>
          <div className="scoresItem">
            <p>Scissors</p>
            <div className="scoresImageDiv images computer_scissors"></div>
          </div>
        </div>

        <div className="scoresPair">
          <div className="scoresItem">
            <p>Scissors</p>
            <div className="scoresImageDiv images player_scissors"></div>
          </div>
          <p>Beats</p>
          <div className="scoresItem">
            <p>Paper</p>
            <div className="scoresImageDiv images computer_paper"></div>
          </div>
        </div>

        <div className="scoresPair">
          <div className="scoresItem">
            <p>Paper</p>
            <div className="scoresImageDiv images player_paper"></div>
          </div>
          <p>Beats</p>
          <div className="scoresItem">
            <p>Rock</p>
            <div className="scoresImageDiv images computer_rock"></div>
          </div>
        </div>

        <div className="scoresPair">
          <div className="scoresItem">
            <div className="scoresImageDiv images player_rock"></div>
            <div className="scoresImageDiv images player_scissors"></div>
            <div className="scoresImageDiv images player_paper"></div>
          </div>
          <p>Draw!</p>
          <div className="scoresItem">
            <div className="scoresImageDiv images computer_rock"></div>
            <div className="scoresImageDiv images computer_scissors"></div>
            <div className="scoresImageDiv images computer_paper"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToScore;
