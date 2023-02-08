import styles from "./Dropdown.module.scss";
import { useState } from "react";

function Collapse({ displayContent, displayTitle }) {
  const [selected, setSelected] = useState(false);
  const content = <p className={styles.underSide}>{displayContent}</p>;
  function toggle() {
    if (selected === false) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }

  return (
    <div
      onClick={() => {
        toggle();
      }}
      className={styles.collapse}
    >
      <div className={styles.upperSide}>
        <p>{displayTitle}</p>
        <i
          className={`fa-solid fa-chevron-up ${
            selected ? "fa-rotate-180" : ""
          }`}
        ></i>
      </div>

      {selected ? content : null}
    </div>
  );
}

export default Collapse;

//TODO :  Apparemment ce n'est pas un dropdown mais un accordéon/Collapse
