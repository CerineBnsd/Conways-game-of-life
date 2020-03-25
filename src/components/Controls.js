import React from 'react'
export default function Controls({generation,setGeneration,step}) {
    return(
        <div className="controls">
            <button
                onClick={e=>{
                    e.preventDefault();
                    step();
                }}>
            Step 1 generation
            </button>
        </div>
    )
}