import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={styles.heroSection + ' container'}>
        <img  src='src/images/teachers/hero/hero_360_1x.jpg' alt="photo ballet dance" />
    </section>
  );
};
export default Hero;
