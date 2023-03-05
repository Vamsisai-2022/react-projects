import React from 'react'

const Timer = ({timer}) => {
  return (
    <div className='container'>
        <span>{(timer.h>=10)?timer.h:"0"+timer.h}</span>&nbsp;:&nbsp; 
        <span>{(timer.m>=10)?timer.m:"0"+timer.m}</span>&nbsp;:&nbsp;
        <span>{(timer.s>=10)?timer.s:"0"+timer.s}</span>&nbsp;:&nbsp;
        <span>{(timer.ms>=10)?timer.ms:"0"+timer.ms}</span>&nbsp;
    </div>
  )
}

export default Timer