import styles from "./Host.module.scss";

function Host({ hostName, hostImg }) {
  return (
    <div className={styles.hostContainer}>
      <p>{hostName}</p>
      <img src={hostImg} alt={hostName} />
    </div>
  );
}

export default Host;
