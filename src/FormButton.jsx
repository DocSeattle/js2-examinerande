import "./assets/FormButton.css";
import PropTypes from "prop-types";
import { SelectionContext } from "./SelectionContext";
export default function FormButton({ stateValue }) {
  let hideForm = true;

  return (
    <>
      <div hidden={hideForm} id="form-container">
        <form id="seatsForm">
          <input
            id="email"
            type="email"
            name="email"
            aria-label="email input"
            placeholder="Your E-Mail:"
          ></input>
          <SelectionContext.Provider value={stateValue}>
            <div>
              <input
                aria-label="Number of seats"
                type="text"
                name="seats"
                id="form-seats"
                value={`${stateValue} seats`}
                readOnly={true}
              ></input>
              <input
                name="finalPrice"
                type="text"
                aria-label="final price"
                value={`${
                  stateValue *
                  (document.getElementById("movie") == null
                    ? 404
                    : document.getElementById("movie").value)
                }:-`}
                readOnly={true}
              ></input>
            </div>
          </SelectionContext.Provider>
          <input
            type="button"
            value="Confirm"
            aria-label="Confirm seats"
            id="confirm"
          ></input>
        </form>
      </div>
      <input
        id="toggleForm"
        aria-label="Confirm Seats"
        type="button"
        onClick={() => {
      const target = (document.getElementById("form-container"));
      switch (hideForm && stateValue >= 0) {
        case true:
          target.removeAttribute("hidden");
          hideForm = !hideForm;
          return;
        case false:
          target.setAttribute("hidden", true);
          hideForm = !hideForm;
          return;
      }
    }
        }
      value="Book Seats"></input>
    </>
  );
}

FormButton.propTypes = {
  stateValue: PropTypes.number,
  priceCalc: PropTypes.number,
};
