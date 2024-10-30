import './assets/Selection.css';
import FormButton from './FormButton';
import { SelectionContext } from './SelectionContext';
import PropTypes from 'prop-types';

/**
 * This is where I spent most of my time:
 * Figuring out that Line 20 had to be in a parenthesis to work
 * was pure torture.
 */

export default function Selection({stateValue})
{  
    let priceCalc = stateValue * (document.getElementById("movie") == null ? 404 : document.getElementById("movie").value);
    return (
       <>
       <SelectionContext.Provider value={stateValue}>
        <p className="text">
            You have selected 
            <span id="count">{stateValue}&nbsp;</span>
            seats for a price of $
            <span id="total">{`${priceCalc}:-`}</span>
        </p>
        <FormButton stateValue={stateValue} />
       </SelectionContext.Provider>
       </>
    )
}


Selection.propTypes = {
    stateValue: PropTypes.number
}