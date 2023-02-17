import error404 from "../../assets/img/404.png";
import styles from "./Error.module.scss";

import { Link } from "react-router-dom";

function Error() {
  return (
    <div className={styles.container}>
      <img src={error404} alt="error 404" />
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link className={styles.Link} to={"/"}>
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;

//TODO: Pas de redirection 404 quand l'id du logement est pas bon
