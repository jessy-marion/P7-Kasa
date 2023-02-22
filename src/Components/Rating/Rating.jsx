import styles from "./Rating.module.scss";

function Rating({ rating }) {
  const positive = (
    <i className={`fa-solid fa-star ${styles.review} ${styles.positive}`}></i>
  );

  const negative = (
    <i className={`fa-solid fa-star ${styles.review} ${styles.negative}`}></i>
  );

  function displayRating(nb) {
    switch (nb) {
      case 1:
        return (
          <>
            {positive}
            {negative}
            {negative}
            {negative}
            {negative}
          </>
        );
      case 2:
        return (
          <>
            {positive}
            {positive}
            {negative}
            {negative}
            {negative}
          </>
        );
      case 3:
        return (
          <>
            {positive}
            {positive}
            {positive}
            {negative}
            {negative}
          </>
        );
      case 4:
        return (
          <>
            {positive}
            {positive}
            {positive}
            {positive}
            {negative}
          </>
        );
      case 5:
        return (
          <>
            {positive}
            {positive}
            {positive}
            {positive}
            {positive}
          </>
        );
      default:
        return "foo";
    }
  }

  return <div>{displayRating(rating)}</div>;
}

export default Rating;
