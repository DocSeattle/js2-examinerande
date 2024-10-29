import PropTypes from 'prop-types';
export default function Button({func = () => {}}){
    return (
        <>
            <input type="button" onClick={func} aria-label="button"></input>
        </>
    )
}

Button.propTypes = {
    func: PropTypes.func,
}