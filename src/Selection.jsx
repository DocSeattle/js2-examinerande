import './assets/Selection.css';


export default function Selection()

{
    return (
        <p className="text">
            You have selected 
            <span id="count">{`
            ${document.getElementsByClassName('selected').length}`}&nbsp;</span>
            seats for a price of $
            <span id="total">{`${document.getElementsByClassName('selected').length * 100}`}</span>
        </p>
    )
}

