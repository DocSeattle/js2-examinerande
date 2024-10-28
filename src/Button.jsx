import PropTypes from 'prop-types';
function selectedSeats(){
  let bar = document.getElementsByClassName('selected').length -1;
  console.log(bar);
  Selection.foo = bar;
  return bar;
}
export default function Button({func = selectedSeats}){
    return (
        <>
            <input type="button" onClick={func} aria-label="button"></input>
        </>
    )
}

Button.propTypes = {
    func: PropTypes.func,
}