import styles from "./Collapse.module.scss";
import { useState } from "react";

function Collapse({ displayContent, displayTitle, notAList }) {
  const [selected, setSelected] = useState(false);
  const content = notAList ? (
    <p className={styles.underSide}>{displayContent}</p>
  ) : (
    <ul className={styles.underSide}>{displayContent}</ul>
  );

  function handleClick() {
    if (selected === false) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }

  return (
    <div onClick={handleClick} className={styles.collapse}>
      <div className={styles.upperSide}>
        <p>{displayTitle}</p>
        <i
          className={`fa-solid fa-chevron-down ${selected && "fa-rotate-180"}`}
        ></i>
      </div>
      {selected && content}
    </div>
  );
}

export default Collapse;
