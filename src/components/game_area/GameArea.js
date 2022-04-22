import React, { useState } from "react";
import Messages from "./Messages";
import ImagesCont from "./ImagesCont";

const GameArea = () => {
  const [message, setMessage] = useState("A message!");
  const [playerImage, setPlayerImage] = useState(
    "imageContainer images player_thumbsUp"
  );
  const [computerImage, setComputerImage] = useState(
    "imageContainer images computer_thumbsUp"
  );
  const [playersScore, setPlayersScore] = useState("2");
  const [computersScore, setComputersScore] = useState("2");
  const [numberOfGames, setNumberOfGames] = useState("5");
  return (
    <>
      <Messages message={message} />
      <ImagesCont
        playerImage={playerImage}
        computerImage={computerImage}
        playNumerator={playersScore}
        compNumerator={computersScore}
        dominator={`/${numberOfGames}`}
      />
    </>
  );
};
export default GameArea;
