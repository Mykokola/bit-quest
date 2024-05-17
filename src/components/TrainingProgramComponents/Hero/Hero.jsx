import styles from "./Hero.module.css";
import Button from "../../Button/Button.jsx";

function Hero() {
  const additionalClass = styles.hero_title_button;

  const handleSignUp = () => {
    window.location.href = "#feedback";
  };

  return (
    <section className={styles.hero}>
      <div className="container">
        <h1 className={styles.hero_title}>
        Training program
        </h1>

        <Button
          onClick={handleSignUp}
          additionalClass={additionalClass}
          buttonText="Order for Feedback"
        />
      </div>
    </section>
  );
}

export default Hero;
