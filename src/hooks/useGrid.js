import { useState } from "react"
import {getNeighbors} from '../helperFunctions/utils'
import {gridGenerator} from '../helperFunctions/utils'
export const useGrid = () =>{
    
    const [grid,setGrid] = useState(gridGenerator(15));
    const [generation, setGeneration] = useState(0);
    const [clickable, setClickable] = useState(true);
    const [gridSize, setGridSize] = useState(15);
    
    const stepThroughAutomata = ()=>{
        let validGrid=false;
        const nextGeneration = grid.map((cell,i)=>{
            let neighbors = getNeighbors(cell,gridSize,gridSize);
            let livingNeighbors = 0;
            neighbors.forEach(element => {
                if(grid[element-1].alive){
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
            setGeneration(generation+1)
        }else{
            setClickable(true);
            return alert('this grid is not valid ,toggle some live cells')
        }
        setGrid(nextGeneration);
    }
    const clearGrid=()=>{
        setGrid(gridGenerator(15));
        setGeneration(0)
    } 
    return [grid,setGrid,generation,clickable,setClickable,gridSize,stepThroughAutomata,clearGrid]
}

