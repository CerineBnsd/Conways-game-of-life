import Grid from './components/Grid.component'
import React from 'react';

import {defaultGrid} from './data/defaultGrid'

let gridSize = 15;
let toggleLife=(e)=>{
  alert("you clicked")
  let index = parseInt(e.target.getAttribute('data-id'))-1
  defaultGrid[index].alive = !defaultGrid[index].alive;
}

function App() {
  return <Grid grid={defaultGrid} gridSize={gridSize} clickable={true} toggleLife={toggleLife}/>
}

export default App;
