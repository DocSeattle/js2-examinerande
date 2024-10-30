import './assets/App.css';
import Films from './Films.jsx';
import Legend from './Legend.jsx';
import Seats from './Seats.jsx';
import Selection from './Selection.jsx';
import { useState } from 'react';
import { SelectionContext } from './SelectionContext.jsx';

/**
 * Why ReactJS?
 * Simple, really. It's what I have the most experience
 * with. Though I made the mistake of thinking this 
 * would overall be a simple task (and it was):
 * but there's always something that stumps me
 * when I try and make a project. 
 * 
 * In this case it was figuring out that
 * to make sure that I can retrieve a value 
 * from the DOM (which is bad practice, but works
 * for this purpose.) I had to put that call
 * in a parenthetical, else it would return null.
 */


function App() {
  const [select, setSelect] = useState(0);
  const value = {select, setSelect} 
  return (
    <>
      <SelectionContext.Provider value={value}>
        <div className="width">
        <Films /> 
        <Legend />
        <Seats />
        <Selection stateValue={value.select} />
        </div>
      </SelectionContext.Provider> 
    </>
  )
}

export default App