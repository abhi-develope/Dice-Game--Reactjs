import styled from "styled-components"

const StartPage = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="./images/dices.png" alt="" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartPage

const Container = styled.div`
   max-width: 1180px;
   display: flex;
   margin: 0 auto;
   height: 100vh;
   align-items: center;
  justify-content: space-between;

   .content{
    h1 {
      font-size: 96px;
    }
   }

`
const Button = styled.button`
 padding: 10px 18px;
 background: #000000;
 color: white;
 border-radius: 5px;
 min-width: 220px;
 border: none;
 font-size: 16px;
 border: 1px solid transparent;
 cursor: pointer;
 transition: 0.4s background ease-in;



 &:hover {
  background-color: white;
  border: 1px solid black;
  color: black;
  transition: 0.3s background ease-in;
 }

`
