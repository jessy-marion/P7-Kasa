import logo from "../../assets/img/LOGO_Footer.png";
import styles from "./Footer.module.scss";
function Footer() {
  return (
    <div className={`${styles.footer}`}>
      <img src={logo} alt="logo Kasa" />
      <p>© 2023 Kasa. All rights reserved</p>
    </div>
  );
}
export default Footer;
