import React, { useState } from "react";
import Messages from "./Messages";
import ImagesCont from "./ImagesCont";
import ButtonsCont from "./ButtonsCont";

const GameArea = () => {
  const [message, setMessage] = useState("A message!");
  const [playerImage, setPlayerImage] = useState(
    "imageContainer images player_thumbsUp"
  );
  const [computerImage, setComputerImage] = useState(
    "imageContainer images computer_thumbsUp"
  );
  const [playersScore, setPlayersScore] = useState("");
  const [computersScore, setComputersScore] = useState("");
  const [numberOfGames, setNumberOfGames] = useState("");
  const [showScores, setShowScores] = useState(false);
  const [showBestOfButtons, setShowBestOfButtons] = useState(true);
  const [showStartResetButtons, setShowStartResetButtons] = useState(false);

  const typeOfGame = (e) => {
    let gameType = e.target.value;
    if (gameType === "3") {
      setPlayersScore("0");
      setComputersScore("0");
      setNumberOfGames("3");
      setShowScores(true);
      setShowBestOfButtons(false);
      setShowStartResetButtons(true);
    } else if (gameType === "5") {
      setPlayersScore("0");
      setComputersScore("0");
      setNumberOfGames("5");
      setShowScores(true);
      setShowBestOfButtons(false);
      setShowStartResetButtons(true);
    }
  };

  const startToPlay = () => {
    console.log("Start button has been clicked!")
  }

  const reset = () => {
    setPlayersScore("");
    setComputersScore("");
    setNumberOfGames("");
    setShowScores(false);
    setShowBestOfButtons(true);
    setShowStartResetButtons(false);

    // To be removed!
    console.clear();
  };

  return (
    <>
      <Messages message={message} />
      <ImagesCont
        playerImage={playerImage}
        computerImage={computerImage}
        playNumerator={playersScore}
        compNumerator={computersScore}
        dominator={`/${numberOfGames}`}
        showScores={showScores}
      />
      <ButtonsCont
        typeOfGame={typeOfGame}
        showBests={showBestOfButtons}
        showStartReset={showStartResetButtons}
        startToPlay={startToPlay}
        reset={reset}
      />
    </>
  );
};
export default GameArea;
