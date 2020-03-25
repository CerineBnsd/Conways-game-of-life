import React from 'react'
export default function Controls({
    stepThroughAutomata,
    setClickable,
    clickable,
    speedInput,
    setSpeedInput
}) {
    return(
        <div className="controls">
            <h1>Controls:</h1>
            <button
                onClick={e=>{
                    e.preventDefault();
                    stepThroughAutomata();
                }}
            >
                Step 1 generation
            </button>
            <input
                placeholder="Enter speed in milliseconds"
                value={speedInput}
                onChange={e=>setSpeedInput(e.target.value)}
            />
            <button
                onClick = {()=>{setClickable(prevState => !prevState)}}
            >
                {clickable ? "Start" : "stop"}
            </button>
            
        </div>
    )
}