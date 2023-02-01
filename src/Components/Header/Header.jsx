import logo from "../../assets/img/LOGO_Header.png";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={`${styles.header}`}>
      <img src={logo} alt="logo Kasa" />
      <ul>
        <Link to={"/"} className="mr-60">
          Accueil
        </Link>
        <Link to={"/about"}>A Propos</Link>
      </ul>
    </div>
  );
}

export default Header;
