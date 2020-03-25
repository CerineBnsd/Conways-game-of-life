import { useGrid } from "../hooks/useGrid.hook"
import { useInterval } from "../hooks/useInterval.hook"

import Grid from "./Grid.component";
import Controls from "./Controls.component";
import React from "react"

export default function GridContainer(){

    const [
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

    useInterval(stepThroughAutomata,+speedInput || 500,grid,clickable)
    
    return (
        <div className="grid-container">
            <h1>Generation : {generation}</h1>
            <div className="grid-and-default-buttons">
                <Grid
                    grid={grid}
                    setGrid={setGrid}
                    toggleLife={toggleLife}
                    clickable={clickable}
                    stepThroughAutomata={stepThroughAutomata}
                    gridSize={gridSize}

                />
            </div>
            <Controls
                stepThroughAutomata={stepThroughAutomata}
                setClickable={setClickable}
                clickable={clickable}
                speedInput={speedInput}
                setSpeedInput={setSpeedInput}
            />
        </div>
    )
}
