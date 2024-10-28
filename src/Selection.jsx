import './assets/Selection.css';
import Button from './Button';
export default function Selection()
{
    let foo = 0;
    return (
       <>
        <p className="text">
            You have selected 
            <span id="count">{foo}&nbsp;</span>
            seats for a price of $
            <span id="total">{`${foo * 100}`}</span>
        </p>
        <Button />
       </>
    )
}

