import './assets/Selection.css';
import { useContext } from 'react';
import { SelectionContext } from './SelectionContext';
import PropTypes from 'prop-types';

export default function Selection({stateValue})
{ 
    const {select} = useContext(SelectionContext);
    const filmTarget = document.getElementsByTagName("select");
    console.log(filmTarget.value);
    return (
       <>
       <SelectionContext.Provider value={stateValue}>
        <p className="text">
            You have selected 
            <span id="count">{stateValue}&nbsp;</span>
            seats for a price of $
            <span id="total">{`${select * 4}:-`}</span>
        </p>
       </SelectionContext.Provider>
       </>
    )
}

Selection.propTypes = {
    stateValue: PropTypes.number
}