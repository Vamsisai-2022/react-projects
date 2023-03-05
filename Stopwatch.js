import React, { useState } from 'react'
import Btn from "./Btn"
import Timer from './Timer'
import "./stopwatch.css"

const App = () => {
const [timer,setTimer]=useState({h:0,m:0,s:0,ms:0});
const [interv,setInterv]=useState();
const[status,setStatus]=useState(0);
const start=()=>{
  run();
  setStatus(1)
  setInterv(setInterval(run,9))
  
}
let updateMs=timer.ms, updateS=timer.s, updateM=timer.m, updateH=timer.h;
const run=()=>{
  if(updateM===60){
    updateH++;
    updateM=0;
  }
  if(updateS===60){
    updateM++;
    updateS=0;
  }
  if(updateMs===100){
    updateS++;
    updateMs=0;
  }
  updateMs++;
  return setTimer({ms:updateMs,s:updateS,m:updateM,h:updateH})
}
const stop=()=>{
clearInterval(interv)
setStatus(2); 
}
const reset=()=>{
  clearInterval(interv)
  setStatus(0); 
  setTimer({ms:0,s:0,m:0,h:0})
  }
const resume=()=>{
  start();
}
  return (
    <div className='parent'>
      <center className='timer'>
      <div className='one'>
      <Timer  timer={timer}/>
      <Btn start={start} stop={stop} reset={reset} resume={resume} status={status}/>
      </div>
      </center>
    </div>
  )
}

export default App