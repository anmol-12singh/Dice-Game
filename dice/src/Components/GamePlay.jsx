import NumberSelector from "./NumberSelector"
import RollDice from "./RollDice"
import TotalScore from "./TotalScore"
import styled from "styled-components"
import { useState } from "react"
import {Button, OutlinedButton} from "../styled/Buttons";
import Rules from "./Rules"


const GamePlay = () => {
    const[score,setScore]=useState(0);
    const[selectedNumber,setSelectedNumber]=useState();
    const[currentDice,setCurrentDice]=useState(1);
    const[error,setError]=useState("");
    const[showRules,setShowRules]=useState(false);

    const generateRandomNumber=(min,max)=>{
        return Math.floor(Math.random()*(max-min)+min);
    };
    const RollDice2=()=>{
        if(!selectedNumber){
            setError("You have not selected any number");
            return;
        }
        

        const randomNumber=generateRandomNumber(1,7);

        setCurrentDice((prev)=>randomNumber);
        

        if(selectedNumber===randomNumber){
            setScore((prev)=>prev+randomNumber);
        }else{
            setScore((prev)=>prev-2);
        }
        setSelectedNumber(undefined);
    };

    const resetScore=()=>{
        setScore(0);
    };

    return (
    <MainContainer>
        <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector error={error} 
                     setError={setError}
                     selectedNumber={selectedNumber} 
                     setSelectedNumber={setSelectedNumber}/>
        </div>
        
        <RollDice currentDice={currentDice} rollDice={RollDice2}/>

        <div className="btns">
            <OutlinedButton onClick={resetScore}>Reset</OutlinedButton>
            <Button onClick={()=>setShowRules((prev)=>!(prev))}>
                    {showRules?"Hide ":"Show "}
                    Rules 
            </Button>

            {showRules && <Rules/>}
        </div>
        
     

    </MainContainer>
    
  )
};

export default GamePlay;

const MainContainer=styled.main`
    .top_section{
        display: flex;
        justify-content:space-around;
        align-items: end;
    }
    .btns{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap:10px;
        margin-top: 40px;
    }

`