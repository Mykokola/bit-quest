import { useState } from "react";
import styles from "./FeedbackForm.module.css";
import Button from "../Button/Button.jsx";
import icon from "../../images/svg/sprite.svg";

const FeedbackForm = () => {
  const [inputData, setInputData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const [showBackdrop, setShowBackdrop] = useState(false);

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowBackdrop(true);
    console.log(inputData);
  };

  const additionalClass = styles.button;

  return (
    <section className={styles.sign_up} id="feedback">
      <h2 className={styles.sign_up_title}>
        Do you want to join us? Fill out the form below and we will contact you!
      </h2>

      {showBackdrop ? (
        <div className={styles.sign_up_backdrop}>
          <svg className={styles.navLogo} width="57" height="50">
            <use href={icon + "#icon-logo"}></use>
          </svg>
          <h2 className={styles.sign_up_cover_title}>
            Thank you for your application, we will contact you soon! :)
          </h2>
        </div>
      ) : (
        <form
          autoComplete="off"
          className={
            showBackdrop
              ? `${styles.hidden} ${styles.sign_up_form} `
              : styles.sign_up_form
          }
          onSubmit={handleSubmit}
        >
          <p className={styles.sign_up_form_title}>Feedback Form</p>
          <label className={styles.label_name}>
            <input
              className={styles.input_name}
              name="name"
              type="text"
              value={inputData.name}
              placeholder="Name"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <input
              className={styles.input_phone_number}
              name="phoneNumber"
              type="tel"
              value={inputData.phoneNumber}
              placeholder="Phone number"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <input
              className={styles.input_email}
              name="email"
              type="email"
              value={inputData.email}
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <textarea
              className={styles.input_message}
              name="message"
              value={inputData.message}
              placeholder="Message"
              onChange={handleChange}
            />
          </label>
          <Button
            additionalClass={additionalClass}
            buttonText="Send"
            type="submit"
          />
        </form>
      )}
    </section>
  );
};

export default FeedbackForm;
