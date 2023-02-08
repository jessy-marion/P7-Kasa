import styles from "./Card.module.scss";
function Card({ logementName, logementPicture }) {
  return (
    <div className={styles.card}>
      <img src={logementPicture} alt={`Logement ${logementName}`} />
      <p>{logementName}</p>
    </div>
  );
}

export default Card;
