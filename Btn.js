import React from 'react'
const Btn = (props) => {
  return (
    <div>
       {
        (props.status===0)?
        <button onClick={props.start}><i class="fa-solid fa-play"></i>Start</button>: ''
       }
       {
        (props.status===1)?
        <div>
          <button onClick={props.stop}><i class="fa-solid fa-pause"></i>stop</button>
          <button onClick={props.reset}><i class="fa-solid fa-rotate-right"></i>reset</button>
        </div> : ''
       }
       {
        (props.status===2)?
        <div>
          <button onClick={props.resume}><i class="fa-solid fa-play"></i>resume</button>
          <button onClick={props.reset}><i class="fa-solid fa-rotate-right"></i>reset</button>
        </div> : ''
       }
    </div>
  )
}

export default Btn