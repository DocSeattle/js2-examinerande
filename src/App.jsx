import './App.css';
import Films from './Films.jsx';
import Legend from './Legend.jsx';
import Seats from './Seats.jsx';
import Selection from './Selection.jsx';
import { useState } from 'react';
import { SelectionContext } from './SelectionContext.jsx';

// import { } from '';

// create useState() to transfer amount data.
// create global pagecontext.


/**
 * 1. UseState()
 * 2. Global pagecontext()
 * 3. PageContext().Button().selectedSeats()
 * TODO: 29 OCT - Look into useState, PageContext. 
 */


function App() {
  const [select, setSelect] = useState(0);
  const value = {select, setSelect} 
  return (
    <>
      <SelectionContext.Provider value={value}>
        <Films /> 
        <Legend />
        <Seats />
        <Selection stateValue={value.select} />
      </SelectionContext.Provider> 
    </>
  )
}

export default App