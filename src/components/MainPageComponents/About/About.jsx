import styles from "./About.module.css";
import { Link } from "react-router-dom";
import icon from "../../../images/svg/sprite.svg";
const About = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <h2 className={styles.about_title}>
          Ballet Studio T&Y <span>Tkachuk and Yapparova</span>
        </h2>
        <p className={styles.about_info}>
          Hello everyone! My name is Sabina, and together with my husband, a
          professional dancer who continues his work at the National Ballet of
          Canada, I am delighted to welcome you today to our presentation about
          the ballet studio in Toronto. We both have gone from novice dancers to
          leading artists at the Mikhailovsky Theatre, where our talent and
          dedication to ballet have been recognized by many audiences and
          critics. Our twenty years of experience in this beautiful art form
          have allowed us to deeply understand and fall in love with the ballet
          world, from corps de ballet to leading roles. With our knowledge and
          experience, we have created this studio to share our expertise and
          passion with other ballet enthusiasts. Our goal is to inspire and help
          our students unleash their potential and reach new heights in this
          beautiful art. Our studio offers not only professional training but
          also a unique atmosphere of community and understanding, where every
          dancer can feel like part of our ballet family. Join us, and
          let&apos;s dive together into the fascinating world of ballet! Thank
          you for your attention.
        </p>
        <Link className={styles.about_button} to={"/teachers"}>
          <span>More about us</span>
          <svg className={styles.navLogoMobile} width="12" height="8">
            <use href={icon + "#icon-arrow-right"}></use>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default About;
