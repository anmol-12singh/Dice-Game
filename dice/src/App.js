
import Startgame from './Components/Startgame';
import { useState } from "react";
import GamePlay from "./Components/GamePlay";


function App() {
  const[isGameStarted,setIsGameStarted]=useState(false);

  const toggleGamePlay=()=>{
    setIsGameStarted((prev)=>!prev);
  }
  return (
   <>
   {isGameStarted?<GamePlay/>:<Startgame toggle={toggleGamePlay}/>}
  

   </>
  );
}

export default App;


