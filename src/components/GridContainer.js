import { useGrid } from "../hooks/useGrid.hook"
import Grid from "./Grid";
import Controls from "./Controls";
import React from "react"

export default function GridContainer({}){


    const [grid,setGrid,generation,setGeneration,clickable,setClickable,gridSize,stepThroughAutomata] = useGrid()
    return (
        <div className="grid-container">
            <h1> Generation : {generation}</h1>
            <div className="grid-and-default-buttons">
                <Grid
                    grid={grid}
                    gridSize={gridSize}
                    setGrid={setGrid}
                    clickable={clickable}
                />
                 <Controls
                generation={generation}
                setGeneration={setGeneration}
                step={stepThroughAutomata}
            />
            </div>
        </div>
    )
}



/*    const [
        grid,
        setGrid,
        generation,
        setGeneration,
        clickable,
        setClickable,
        speedInput,
        setSpeedInput,
        stepThroughAutomata,
        toggleLife,
        gridSize,
        setGridSize
    ] = useGrid();

    useInterval(stepThroughAutomata,+speedInput || 500,grid,clickable)*/