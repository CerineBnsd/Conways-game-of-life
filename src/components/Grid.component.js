import { gridDisplay ,cellDisplay} from "../helperFunctions/displayFunctions";
import React from 'react'
export default function Grid({grid,toggleLife,clickable,gridSize}) {

    return (
        <div className='grid' style={gridDisplay(gridSize)}>
            {grid.map((cell,i)=>{
                return (
                    <div
                        key={cell.id}
                        className={cell.alive ? "alive" : "dead"}
                        onClick = {clickable ? toggleLife : null }
                        data-id = {cell.id}
                        style={cellDisplay(cell.alive,gridSize)}
                    />)
            })}
        </div>
    )
}