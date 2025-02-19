import styled from "styled-components";
import {Button} from "../styled/Buttons";

const Startgame = ({toggle}) => {
  return (
    <Container>
       <div><img src="/images/dices.jpeg" alt="dices"/></div> 
        <div className="content">
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default Startgame;

const Container=styled.div`
    max-width:1180px;
    display:flex;
    margin:0 auto;
    height:100vh;
    align-items: center;
    justify-content: center;

    .content{
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
    }

`;
