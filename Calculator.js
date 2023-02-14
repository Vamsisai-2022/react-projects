import React from 'react'
import { useState } from 'react';
import "../Components/calculator.css"

function Calculator() {
const[result , Setresult]=useState("");

const handleClick =(e)=>{
    Setresult(result.concat(e.target.id));
};
const clear =()=>{
    Setresult("");
};
const deleteElement =()=>{
    Setresult(result.slice(0,-1));
};
const calculate =()=>{
    try{
        Setresult(eval(result).toString());
    }catch (error){
        Setresult("invalid");
    }
};


  return (
    <div className='calculator'>
        <input type="text" value={result} disabled/>

        <div className='buttons'>
            <button className='operator'onClick={clear}>AC</button>
            <button className='operator'onClick={deleteElement}>DE</button>
            <button id='.'className='operator'onClick={handleClick}>.</button>
            <button id='/'className='operator'onClick={handleClick}>/</button>
            &nbsp;
            <tr>
             <button id='7'className='number'onClick={handleClick}>7</button>
             <button id='8'className='number'onClick={handleClick}>8</button>
             <button id='9'className='number'onClick={handleClick}>9</button>
             <button id='*'className='operator'onClick={handleClick}>*</button>
               </tr>   
               <tr>
             <button id='4'className='number'onClick={handleClick}>4</button>
             <button id='5'className='number'onClick={handleClick}>5</button>
             <button id='6'className='number'onClick={handleClick}>6</button>
             <button id='-'className='operator'onClick={handleClick}>-</button>
               </tr>   

               <tr>
             <button id='1'className='number'onClick={handleClick}>1</button>
             <button id='2'className='number'onClick={handleClick}>2</button>
             <button id='3'className='number'onClick={handleClick}>3</button>
             <button id='+'className='operator'onClick={handleClick}>+</button>
               </tr>  
               <tr>
             <button id='00'className='number'onClick={handleClick}>7</button>
             <button id='0'className='number'onClick={handleClick}>8</button>
             <button id='9'className='number'onClick={handleClick}>9</button>
             <button id='='className='operator'onClick={calculate}>=</button>
               </tr>    

        </div>
    </div>
  )
}

export default Calculator;