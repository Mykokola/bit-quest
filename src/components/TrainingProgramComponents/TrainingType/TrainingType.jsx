import styles from "./TrainingType.module.css";
import TrainingPrograms from "../../../utils/TrainingPrograms";
const TrainingType = () => {
  return (
    <div className={`container ${styles.trainingContainer}`}>
      <ul className={styles.trainingList}>
        {TrainingPrograms.map(({ id, title, images, paragraf, alt }) => {
          return (
            <li key={id} className={styles.trainingItem}>
              <h3 className={styles.trainingItemTitle}>{title}</h3>
              <img src={images} alt={alt} />
              <p className={styles.trainingItemParagraf}>{paragraf}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TrainingType;
