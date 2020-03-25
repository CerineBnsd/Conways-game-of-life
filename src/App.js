import Cell from './components/Cell'
import React from 'react';
import {defaultGrid} from './data/defaultGrid'
import GridContainer from './components/GridContainer';

let gridSize = 15;

function App() {
  return <GridContainer defaultGrid={defaultGrid} gridSize={gridSize} />
}

export default App;
