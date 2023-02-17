import logo from "../../assets/img/LOGO_Header.png";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={`${styles.header}`}>
      <img src={logo} alt="logo Kasa" />
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Accueil</Link>
          </li>
          <li>
            <Link to={"/about"}>A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
