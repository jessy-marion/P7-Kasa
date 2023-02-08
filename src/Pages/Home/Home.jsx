//import { Link } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/Card/Card";
import styles from "./Home.module.scss";
import { useState, useEffect } from "react";

function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("./data/logements.json")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setLogements(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.home}>
      <Banner />
      <div className={styles.cardsContainer}>
        {logements.map((logement) => (
          <Card
            key={logement.id}
            logementName={logement.title}
            logementPicture={logement.pictures[0]}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
