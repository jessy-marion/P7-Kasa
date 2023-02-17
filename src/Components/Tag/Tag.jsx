import styles from "./Tag.module.scss";
function Tag({ tag }) {
  return <div className={styles.tag}>{tag}</div>;
}

export default Tag;

//TODO : Ameliorer rendu tag
