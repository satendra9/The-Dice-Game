import React, { useState } from "react"
import StartGame from "./components/StartGame"
import './App.css'
import GamePlay from "./components/GamePlay";

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const togglePlayNow = ()=> {
    setIsGameStarted((prev) => !prev);
  }

  return (

    <>
    {
      isGameStarted ? <GamePlay/> : <StartGame toggle={togglePlayNow} />
    }
    </>
  )
}

export default App
