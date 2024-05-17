import styles from "./AboutTraining.module.css"
const AboutTraining = () => {
    return (
        <div className={`container ${styles.aboutTraning}`}>
        <h3 className={styles.aboutTraningTitle}>From 0 to the stage. For the soul and professionally.</h3>
        <h4 className={styles.aboutTrainingListTitle}>With us you will learn and master:</h4>

        <ul className={styles.aboutTrainingList}>
            <li className={styles.aboutTrainingItem}><p>Ballet technique: you will learn basic body positions, movements and support.</p></li>
            <li className={styles.aboutTrainingItem}><p>Coordination and balance: You will learn to control your body, establish balance and coordinate movements in space.</p></li>
            <li className={styles.aboutTrainingItem}><p>Learn to stand on pointe.</p></li>
            <li className={styles.aboutTrainingItem}><p>You will dance in a duet, which will help you interact better with your partner.</p></li>
            <li className={styles.aboutTrainingItem}><p>Knowledge of the history and culture of ballet: You will learn more about the history of ballet, outstanding ballet choreographers and performers.</p></li>
            <li className={styles.aboutTrainingItem}><p>We also offer a private session where you can improve your ballet technique by training one on one.</p></li>
        </ul>
        </div>
    )
}
export default AboutTraining