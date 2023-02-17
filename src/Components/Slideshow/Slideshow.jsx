import styles from "./Slideshow.module.scss";
import { useState } from "react";

function Slideshow({ images, name }) {
  const [index, setCurrentIndex] = useState(0);

  function goPrev() {
    if (index === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(index - 1);
    }
  }
  function goNext() {
    if (index === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index + 1);
    }
  }

  return (
    <div className={styles.carouselContainer}>
      <i className="fa-solid fa-chevron-left" onClick={goPrev}></i>
      <img src={images[index]} alt={name} />
      <p className={styles.counter}>{`${index + 1}/${images.length}`}</p>
      <i className="fa-solid fa-chevron-right" onClick={goNext}></i>
    </div>
  );
}

export default Slideshow;

// TODO : Bulletpoints et le numéro de l'image à ajouter
