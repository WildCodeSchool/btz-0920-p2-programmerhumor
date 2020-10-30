import './Button.css';
import propTypes from 'prop-types';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: propTypes.string.isRequired,
  type: propTypes.bool.isRequired,
  onClick: propTypes.bool.isRequired,
  buttonStyle: propTypes.string.isRequired,
  buttonSize: propTypes.string.isRequired,
};

export default Button;
