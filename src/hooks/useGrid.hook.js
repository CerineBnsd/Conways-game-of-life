import { useState } from "react"
import { defaultGrid } from "../data/defaultGrid"
import {getNeighbors} from '../helperFunctions/gridGenerator'

export const useGrid = () =>{
    const [grid,setGrid] = useState(defaultGrid);
    const [generation, setGeneration] = useState(0);
    const [clickable, setClickable] = useState(true);
    const [speedInput, setSpeedInput] = useState("");
    const [gridSize, setGridSize] = useState(15);
    const stepThroughAutomata = ()=>{
        let validGrid=false;
        const nextGeneration = grid.map((cell,i)=>{
            let neighbors = getNeighbors(i,gridSize,gridSize);
            let livingNeighbors = 0;
            neighbors.forEach(element => {
                if(grid[element].alive){
                    livingNeighbors++;
                }
            });
            if(cell.alive && (livingNeighbors === 2 || livingNeighbors === 3)){
                return cell;
            }
            if(cell.alive && (livingNeighbors <2 || livingNeighbors >=4)){
                validGrid = true ;
                return { ...cell,alive: !cell.alive}
            }
            if(!cell.alive && livingNeighbors===3){
                validGrid = true ;
                return { ...cell,alive: !cell.alive}
            }
            return cell;
        })
        if(validGrid){
            setGeneration(prevState => (prevState+1))
        }else{
            setClickable(true);
            return alert('this grid is not valid ,toggle some live cells or select a default grid')
        }
        setGrid(nextGeneration);
    }
    
}

