export const gridGenerator = (gridSize)=>{
    let arr=[];
    let id=1;
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            arr.push({
                row : i+1,
                column : j+1,
                alive : false,
                clickable : false,
                id : id
            })
            id++;
        }
    }
    return arr;
}

export const getNeighbors = (cell,rows,columns)=>{
    let arr = [];
    if(cell.column !== 1){
        arr.push(cell.id-1)
    }
    if(cell.column !== columns){
        arr.push(cell.id+1)
    }
    if(cell.row !== 1){
        arr.push(cell.id-columns)
    }
    if(cell.row !== rows){
        arr.push(cell.id+columns)
    }
    if(cell.column !== 1 && cell.row !== 1){
        arr.push(cell.id-columns-1)
    }
    if(cell.column !== 1 && cell.row != rows){
        arr.push(cell.id+columns - 1)
    }
    if(cell.column !== columns && cell.row !== 1){
        arr.push(cell.id-columns+1)
    }
    if(cell.column !== columns && cell.row != rows){
        arr.push(cell.id+columns+1)
    }
    return arr;
}

export const getElement = (arr ,key ,value ) => {
    if (!Array.isArray(arr)) throw new Error('Expected an array');
    let element;
    let index = 0;
    while(index < arr.length){
        element = arr[index];
        if(element[key]===value){
            return element
        }
        index++;
    }
    return null;
  }