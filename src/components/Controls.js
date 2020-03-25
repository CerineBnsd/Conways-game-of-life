import React from 'react'
export default function Controls({generation,setGeneration,step}) {
    return(
        <div className="controls">
            <button 
                className = "step"
                onClick={e=>{
                    e.preventDefault();
                    step();
                }}>
            Step 1 generation
            </button>
        </div>
    )
}