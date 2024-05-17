import PropTypes from "prop-types";
import styles from "./ButtonBlack.module.css";

const ButtonBlack = ({ additionalClass, buttonText, type, onClick }) => {
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

ButtonBlack.propTypes = {
  buttonText: PropTypes.string.isRequired,
  additionalClass: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonBlack;
