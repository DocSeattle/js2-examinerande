import PropTypes from "prop-types";
import "./assets/Seats.css";
import { useContext } from "react";
import { SelectionContext } from "./SelectionContext";
export default function Seat({ i, occupied = false }) {
  // const [select, setSelect] = useState(0);
  // const value = { select, setSelect };
  const { select, setSelect } = useContext(SelectionContext);
  return (
    <div
      id={i}
      className={`seat ${occupied ? "occupied" : ""}`}
      onClick={() => {
        const target = document.getElementById(`${i}`);
        if (target.classList.contains == "occupied") {
          return console.log("This seat is occupied");
        }

        target.classList.toggle("selected");
        let selected = target.classList.contains("selected");
        if (!target.classList.contains("occupied")) {
          selected ? setSelect(select + 1) : setSelect(select - 1);
          console.log(select);
        }

        /**target.classList.contains("selected") ? 
            !selected ? // if not selected
            selected && setSelect(select+1) : !selected && setSelect(select+0)
            : 
            selected ? // if Selected 
            !selected && setSelect(select-1) : selected+0 && setSelect(select+0); 
            */
        console.log(
          `seat #${i} has selected value: ${
            target.classList.contains("selected")
              ? selected == 0
                ? selected + 1
                : selected + 0
              : selected == 1
              ? selected - 1
              : selected + 0
          }`
        );
        console.log(select);
      }}
    ></div>
  );
}
Seat.propTypes = {
  i: PropTypes.number,
  occupied: PropTypes.bool,
};
