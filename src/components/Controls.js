import React from 'react'
export default function Controls({step,clear}) {
    return(
        <form className="controls">
            <button 
                className = "step"
                onClick={e=>{
                    e.preventDefault();
                    step();
                }}>
            Step 1 generation
            </button>
            <button 
                className = "clear"
                onClick={e=>{
                    e.preventDefault();
                    clear();
                }}>
            Clear the grid
            </button>
        </form>
    )
}