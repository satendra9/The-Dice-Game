import React from 'react'
import TotalScore from './TotalScore'
import NumberSelectorr from './NumberSelectorr'
import RoleDice from './RoleDice'
import { useState } from 'react'

const GamePlay = () => {
    const [score, setScore] = useState(0)
    const [selectedNumber, setSelectedNumber] = useState()
    const [currentDice, setCurrentDice] = useState(1)
    const [error, setError] = useState("")

    const generateRandomNumber = (max, min) => {
        return Math.floor(Math.random() * (max-min) + min)
    }

    const roleDice =  () => {

        if(!selectedNumber){
            setError("You have not selected any number")
            return
        }
        setError("")
        const randomNumber = generateRandomNumber(1,7)

        setCurrentDice((prev) => randomNumber)

        

        if(selectedNumber === randomNumber){
            setScore((prev) => prev + randomNumber)
        }else{
            setScore((prev) => prev-2)
        }
        setSelectedNumber(undefined)
    }

    

  return (
    <main>
        <div className="top_section">
            <TotalScore score={score}/>
            <NumberSelectorr error={error} selectedNumber = {selectedNumber} setSelectedNumber = {setSelectedNumber}/>
            
        </div>
        <RoleDice currentDice={currentDice} roleDice={roleDice}/>
    </main>
    
  )
}

export default GamePlay

