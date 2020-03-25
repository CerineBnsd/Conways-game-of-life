export const gridGenerator = (gridSize)=>{
    let arr=[];
    let id=1;
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            arr.push({
                column : i,
                row : j,
                alive : false,
                clickable : false,
                id : id
            })
            id++;
        }
    }
    return arr;
}

export const getNeighbors = (id,rows,columns)=>{
    return [1,2,3,4,5,6,7,8]
}

const getElement = (arr ,key ,value ) => {
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