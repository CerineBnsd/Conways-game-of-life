import { useGrid } from "../hooks/useGrid"
import Grid from "./Grid";
import Controls from "./Controls";
import React from "react"

export default function GridContainer(){

    const [ grid,
            setGrid,
            generation,
            clickable,
            setClickable,
            gridSize,
            stepThroughAutomata,
            clearGrid] = useGrid()
    return (
        <main> 
            <div className="container">
                <div className="card">
                <h2 className="title"> Conway's Game Of Life</h2>
                <h5 className="generation"> Generation : {generation}</h5>
                <div>
                    <Grid
                        grid={grid}
                        gridSize={gridSize}
                        setGrid={setGrid}
                        clickable={clickable}
                    />
                    <Controls
                    step={stepThroughAutomata}
                    clear={clearGrid}
/>
                </div>
                </div>
            </div>
        </main>
        )
}


