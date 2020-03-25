import { useState } from "react"
import { useEffect } from "react";
import { cellDisplay } from "../helperFunctions/displayFunctions";
import React from 'react'

export default function({celle,gridSize,setGrid,grid,clickable}){

    const [cell,setCell] = useState(celle)
    let gridChanged = grid;

    const toggleLife=(e)=>{
        if(clickable){
            let life = cell;
            life.alive = !cell.alive;
            setCell({...cell,alive : life.alive})            
            gridChanged[parseInt(e.target.getAttribute('data-id')-1)]=cell;
            setGrid(gridChanged);
        }
    }
    return(
        <div
            key={cell.id}
            className={grid[cell.id-1].alive ? "alive" : "dead"}
            onClick = {toggleLife}
            data-id = {cell.id}
            style={cellDisplay(grid[cell.id-1].alive,gridSize)}
        />
    )
}

