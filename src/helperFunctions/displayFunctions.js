

export const gridDisplay = (gridSize)=>{
    if(gridSize === 15){
        return {
            display : 'grid',
            gridTemplateColumns : `repeat(${gridSize},20px)`,
            gridTemplateRows : `repeat(${gridSize},20px)`
        }
    }
    if(gridSize === 30){
        return {
            display : 'grid',
            gridTemplateColumns : `repeat(${gridSize},10px)`,
            gridTemplateRows : `repeat(${gridSize},10px)`
        }
    }
    if(gridSize === 50){
        return {
            display : 'grid',
            gridTemplateColumns : `repeat(${gridSize},6px)`,
            gridTemplateRows : `repeat(${gridSize},6px)`
        }
    }
}

const cellSize = (gridSize)=>{
    if(gridSize===15){
        return '20px';
    }
    if(gridSize===30){
        return '10px';
    }
    if(gridSize===50){
        return '6px';
    }
}

export const cellDisplay = (alive , gridSize)=>{
    const ranColor1 = Math.floor(Math.random() * Math.floor(255));
    const ranColor2 = Math.floor(Math.random() * Math.floor(255));
    const ranColor3 = Math.floor(Math.random() * Math.floor(255));
    if(alive){
        return {
            width : `${cellSize(gridSize)}`,
            height: `${cellSize(gridSize)}`,
            background : `rgb(${ranColor1},${ranColor2},${ranColor3})`
        }
    }else{
        return {
            width : `${cellSize(gridSize)}`,
            height: `${cellSize(gridSize)}`,
            background : ' rgb(59, 59, 59)'
        }
    }
}
