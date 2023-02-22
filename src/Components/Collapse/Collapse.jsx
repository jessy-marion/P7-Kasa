import styles from "./Collapse.module.scss";
import { useState } from "react";

function Collapse({ displayTitle, children }) {
  const [selected, setSelected] = useState(false);

  const content = <div className={styles.underSide}>{children}</div>;

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
