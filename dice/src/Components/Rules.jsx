import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play the Dice Game</h2>
        <div className='text'>
        <p>Select any number</p>
        <p>Click on the Dice</p>
        <p>If selected number is equal to dice number then you will get the score equal to selected number</p>
        <p>If the numbers are not equal then -2 will be deducted from the score each time</p>
        </div>
        
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer=styled.div`
   max-width:800px;
   margin:0 auto;
   background-color :#fbf1f1 ;
   padding:20px;
   margin-top:40px;
   border-radius: 10px;
   h2{
    font-size:24px;
   }
   .text{
    margin-top:24px;
   }

`