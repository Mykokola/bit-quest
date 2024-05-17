import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ additionalClass, buttonText, type, onClick }) => {
  const additionalClassName = additionalClass ? ` ${additionalClass}` : "";

  const buttonType = type ? ` ${type}` : "button";

  return (
    <button
      className={`${styles.button} ${additionalClassName}`}
      type={buttonType}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  additionalClass: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
