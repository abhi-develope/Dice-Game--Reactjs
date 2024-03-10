import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDIce from './RoleDIce'

const GamePlay = () => {
  const [score,setscore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error,seterror] = useState();

  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };


  const roleDice = () => {
    if(!SelectedNumber){
      seterror("You have not selected any number");
      return;
    }

    seterror('')
    const randomNumber = generateRandomNumber(1,7);
    

    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber){
      setscore((prev)=> prev + randomNumber);

    }else{
      setscore((prev) => prev -2);
    }

    setSelectedNumber(undefined)
  };


  return (
    <MainContainer>
      <div className="top_section">
      <TotalScore score={score}/>
      <NumberSelector error = {error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
      </div>
      <RoleDIce currentDice={currentDice} roleDice={roleDice} />
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.div`

   padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

`
