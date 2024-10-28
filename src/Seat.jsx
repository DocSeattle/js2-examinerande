import PropTypes from 'prop-types';
import "./assets/Seats.css";

export default function Seat({i, occupied = false})
{

    return (

        <div id={i} className={`seat ${occupied ? "occupied" : ""}`} onClick={() => {
            const target = document.getElementById(`${i}`);
            if (target.classList.contains == "occupied") {return}
            target.classList.toggle("selected");
        }}
        ></div>
    );
}
Seat.propTypes = {
    i: PropTypes.number,
    occupied: PropTypes.bool,
}