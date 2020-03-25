
import { gridDisplay } from "../helperFunctions/displayFunctions";
import React, { useState } from 'react'
import Cell from "./Cell";
export default function Grid({grid,setGrid,gridSize,clickable}) {

    return (
        <div className='grid' style={gridDisplay(gridSize)}>
            {grid.map((cell,i)=>{
                return <Cell clickable= {clickable} grid={grid} setGrid={setGrid} celle={cell} gridSize={gridSize}/>
            })}
        </div>
    )
}