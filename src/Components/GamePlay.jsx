import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDIce from './RoleDIce'

const GamePlay = () => {
  return (
    <MainContainer>
      <div className="top_section">
      <TotalScore/>
      <NumberSelector/>
      </div>
      <RoleDIce/>
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
