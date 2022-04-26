import React, { useState, useEffect } from "react";
import Messages from "./Messages";
import ImagesCont from "./ImagesCont";
import ButtonsCont from "./ButtonsCont";

const GameArea = () => {
  const [message, setMessage] = useState("");
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
  const [startButtonText, setStartButtonText] = useState("Start");
  const [hideStartButton, setHideStartButton] = useState(false);
  useEffect(() => gameOutcome(), [playersScore, computersScore]);


// Type of game functions. --------------------------------------
  const gameStarterHelper = (bestOf) => {
    setMessage("Click the Start Button to begin. Good luck!");
    setPlayersScore("0");
    setComputersScore("0");
    setNumberOfGames(bestOf);
    setShowScores(true);
    setShowBestOfButtons(false);
    setShowStartResetButtons(true);
  };

  const typeOfGame = (e) => {
    let gameType = e.target.value;
    if (gameType === "3") {
      gameStarterHelper(gameType);
    } else if (gameType === "5") {
      gameStarterHelper(gameType);
    }
  };
// The game outcome logic. -------------------------------------
const gameOutcome = () => {
    if ((numberOfGames === "3") && (playersScore === "2")){
    playerWinsHelper()
  } else if  ((numberOfGames === "5") && (playersScore === "3")){
    playerWinsHelper()
  } else if ((numberOfGames === "3") && (computersScore === "2")){
    computerWinsHelper()
  } else if ((numberOfGames === "5") && (computersScore === "3")){
    computerWinsHelper()
  }
}
// Winning functions. ------------------------------------------
const playerWinsHelper = () => {
  setMessage("Player Wins the Game! Click the reset button to play again.");
  setHideStartButton(true);
}
const computerWinsHelper = () => {
  setMessage("Computer Wins the Game! Never mind, click the reset button to try again.");
  setHideStartButton(true);
}
// Score updating. --------------------------------------------
const addToPlayersScoreHelper = () => {
  let update = 1 + parseInt(playersScore);
  setPlayersScore(update.toString());
}
const addToComputersScoreHelper = () => {
  let update = 1 + parseInt(computersScore);
  setComputersScore(update.toString());
}

// Start the game. -----------------------------------------------
const startToPlay = () => {
  setPlayerImage("spinner");
  setComputerImage("spinner");
  setTimeout(gameLogic, 2000);
};

// Main game function. -------------------------------------------
const gameLogic = () => {

  setStartButtonText("Next");
  // Setting the random images. -------------------------------
  let playerArray = ["player_rock", "player_paper", "player_scissors"];
  let computerArray = ["computer_rock", "computer_paper", "computer_scissors"];

  let randomPlayerIndex = Math.floor((Math.random() * 3));
  let randomComputerIndex = Math.floor((Math.random() * 3));

  let playerRandomImg = playerArray[randomPlayerIndex];
  let computerRandomImg = computerArray[randomComputerIndex];
  // Sets the player's image. -------------------------------
  if (playerRandomImg === "player_rock"){
    setPlayerImage("imageContainer images player_rock")
  } else if (playerRandomImg === "player_paper"){
    setPlayerImage("imageContainer images player_paper")
  } else if (playerRandomImg === "player_scissors"){
    setPlayerImage("imageContainer images player_scissors")
  } else {
    setPlayerImage("imageContainer images player_thumbsUp")
  }
  // Sets the computers image. ------------------------------
  if (computerRandomImg === "computer_rock"){
    setComputerImage("imageContainer images computer_rock");
  } else if (computerRandomImg === "computer_paper"){
    setComputerImage("imageContainer images computer_paper");
  } else if (computerRandomImg === "computer_scissors"){
    setComputerImage("imageContainer images computer_scissors");
  } else {
    setComputerImage("imageContainer images computer_thumbsUp");
  }
  // Setting the round outcome message. ------------------------
  let playerWinsMessage = "Player wins the round! Click Next to go again!";
  let computerWinsMessage = "Computer wins the round! Click Next to go again!";
  let drawMessage = "Draw! Click Next to go again!";

  // The images comparison logic. -------------------------------
  if ((playerRandomImg === "player_rock") && (computerRandomImg === "computer_scissors")){
    addToPlayersScoreHelper();
    setMessage(playerWinsMessage);
  } else if ((playerRandomImg === "player_rock") && (computerRandomImg === "computer_paper")){
    addToComputersScoreHelper();
    setMessage(computerWinsMessage);
  } else if ((playerRandomImg === "player_rock") && (computerRandomImg === "computer_rock")){
    setMessage(drawMessage);
  } else if ((playerRandomImg === "player_scissors") && (computerRandomImg === "computer_paper")){
    addToPlayersScoreHelper()
    setMessage(playerWinsMessage);
  } else if ((playerRandomImg === "player_scissors") && (computerRandomImg === "computer_rock")){
    addToComputersScoreHelper();
    setMessage(computerWinsMessage);
  } else if ((playerRandomImg === "player_scissors") && (computerRandomImg === "computer_scissors")){
    setMessage(drawMessage);
  } else if ((playerRandomImg === "player_paper") && (computerRandomImg === "computer_rock")){
    addToPlayersScoreHelper();
    setMessage(playerWinsMessage);
  } else if ((playerRandomImg === "player_paper") && (computerRandomImg === "computer_scissors")){
    addToComputersScoreHelper();
    setMessage(computerWinsMessage);
  } else if ((playerRandomImg === "player_paper") && (computerRandomImg === "computer_paper")){
    setMessage(drawMessage);
  }
}

  const reset = () => {
    setMessage("");
    setPlayersScore("");
    setComputersScore("");
    setNumberOfGames("");
    setShowScores(false);
    setShowBestOfButtons(true);
    setShowStartResetButtons(false);
    setStartButtonText("Start");
    setHideStartButton(false);
    setPlayerImage("imageContainer images player_thumbsUp");
    setComputerImage("imageContainer images computer_thumbsUp");
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
        startButtonText={startButtonText}
        hideStartButton={hideStartButton}
        reset={reset}
      />
    </>
  );
};
export default GameArea;
