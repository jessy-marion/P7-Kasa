import styles from "./Banner.module.scss";

function Banner({ imgUrl, children }) {
  return (
    <div className={styles.bannerContainer}>
      <img src={imgUrl} alt={"Bannière"} />
      {children}
    </div>
  );
}

export default Banner;
