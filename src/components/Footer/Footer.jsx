import { NavLink, Link } from "react-router-dom";
import icon from "../../images/svg/sprite.svg";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <Link to={"/"}>
          <svg className={styles.navLogo} width="48" height="50">
            <use href={icon + "#icon-logo"}></use>
          </svg>
        </Link>
        <div className={styles.contactDetails}>
          <ul className={styles.addressList}>
            <li className={styles.addressItem}>
              <h2>
                Ballet Studio T&Y <br></br> Tkachuk and Yapparova 
              </h2>
            </li>
            <li className={styles.addressItem}>
              <address>
                78 Clifton Rd, Toronto, ON M4T 2G2<br></br> Our Lady of
                Perpetual Help Basement
              </address>
            </li>
          </ul>
          <ul className={`${styles.navRouteList}`}>
            <li className={styles.navLinkItem}>
              <NavLink className={styles.navLink} to="/">
                About us
              </NavLink>
            </li>
            <li className={styles.navLinkItem}>
              <NavLink className={styles.navLink} to="/teachers">
                Teachers
              </NavLink>
            </li>
            <li className={styles.navLinkItem}>
              <NavLink className={styles.navLink} to="/training-program">
                Training program
              </NavLink>
            </li>
          </ul>
          <ul className={styles.navContactsList}>
            <li className={styles.navContactsLinkItem}>
              <Link
                to="mailto:balletstudioty@yahoo.com"
                className={styles.navContactsLink}
              >
                <svg width="31" height="22">
                  <use href={icon + "#icon-mail"}></use>
                </svg>
                <span className={styles.isHidden}>
                  Balletstudioty@yahoo.com
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
