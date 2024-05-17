import { Link } from "react-router-dom";

import styles from "./TrainingProgram.module.css";
import trainingImg360_1x from "../../../images/about_us/training/training_360_1x.jpg";
import trainingImg360_2x from "../../../images/about_us/training/training_360_2x.jpg";
import trainingImg1280_1x from "../../../images/about_us/training/training_1280_1x.jpg";
import trainingImg1280_2x from "../../../images//about_us/training/training_1280_2x.jpg";
import ButtonBlack from "../../ButtonBlack/ButtonBlack";

const TrainingProgram = () => {
  const additionalClass = styles.button_black;

  return (
    <section className={styles.training_program}>
      <h2 className={styles.title}>Training program</h2>
      <div className={styles.contentContainer}>
        <div className={styles.leftColumn}>
          <picture>
            <source
              srcSet={`${trainingImg360_1x} 1x, ${trainingImg360_2x} 2x`}
              media="(min-width: 250px)"
              type="image/jpeg"
            />
            <source
              srcSet={`${trainingImg1280_1x} 1x, ${trainingImg1280_2x} 2x`}
              media="(min-width: 768px)"
              type="image/jpeg"
            />
            <img
              className={styles.img}
              src={trainingImg360_2x}
              srcSet={`${trainingImg360_1x} 1x, ${trainingImg360_2x} 2x`}
              alt="Opera dancer"
              width="360"
            />
          </picture>
        </div>
        <div className={styles.rightColumn}>
          <p className={styles.details}>
            From 0 to the stage. For the soul and professionally.
          </p>
          <p className={styles.listTitle}>With us you will learn and master:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Ballet technique: you will learn basic body positions, movements
              and support.
            </li>
            <li className={styles.listItem}>
              Coordination and balance: You will learn to control your body,
              establish balance and coordinate movements in space.
            </li>
            <li className={styles.listItem}>Learn to stand on pointe.</li>
            <li className={styles.listItem}>
              You will dance in a duet, which will help you interact better with
              your partner.
            </li>
            <li className={styles.listItem}>
              Knowledge of the history and culture of ballet: You will learn
              more about the history of ballet, outstanding ballet
              choreographers and performers.
            </li>
            <li className={styles.listItem}>
              We also offer a private session where you can improve your ballet
              technique by training one on one.
            </li>
          </ul>

          <Link to="/training-program">
            <ButtonBlack
              additionalClass={additionalClass}
              buttonText="More details"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrainingProgram;
