import './assets/Selection.css';
import { SelectionContext } from './SelectionContext';
import PropTypes from 'prop-types';

export default function Selection({stateValue})
{  
    return (
       <>
       <SelectionContext.Provider value={stateValue}>
        <p className="text">
            You have selected 
            <span id="count">{stateValue}&nbsp;</span>
            seats for a price of $
            <span id="total">{`${stateValue * (document.getElementById("movie") == null ? 404 : document.getElementById("movie").value)  }:-`}</span>
        </p>
       </SelectionContext.Provider>
       </>
    )
}


Selection.propTypes = {
    stateValue: PropTypes.number
}