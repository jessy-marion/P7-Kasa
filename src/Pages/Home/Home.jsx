import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/Card/Card";
import styles from "./Home.module.scss";
import { useState, useEffect } from "react";
import img from "../../assets/img/BG_Home.png";
import { Link } from "react-router-dom";

function Home() {
  const [logements, setLogements] = useState([]);
  useEffect(() => {
    fetch("/data/logements.json")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setLogements(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className={styles.home}>
      <Banner imgUrl={img}>
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>
      <div className={styles.cardsContainer}>
        {logements.map((logement) => (
          <Link
            key={`${logement.title}-${logement.id}`}
            to={`/logement/${logement.id}`}
          >
            <Card
              key={logement.id}
              logementName={logement.title}
              logementPicture={logement.pictures[0]}
              logement
            />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Home;
