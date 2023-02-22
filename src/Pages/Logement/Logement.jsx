//import Error from "../Error/Error";
import Slideshow from "../../Components/Slideshow/Slideshow";
import Tag from "../../Components/Tag/Tag";
import Rating from "../../Components/Rating/Rating";
import Host from "../../Components/Host/Host";
import Collapse from "../../Components/Collapse/Collapse";
import styles from "./Logement.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function Logement() {
  const params = useParams();
  const navigate = useNavigate();

  const [logement, setLogement] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/logements.json")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((datas) => {
        if (
          datas.some((data) => {
            return data.id === params.id;
          })
        ) {
          setLogement(datas.find((selected) => selected.id === params.id)); //
          setLoading(false);
        } else {
          return navigate("/404");
        }
      })
      .catch((err) => console.log(err));
  }, [params.id, navigate]);

  if (loading)
    return (
      <div className={styles.loader}>
        <i className={`fas fa-spinner fa-pulse ${styles.spinner}`}></i>
      </div>
    );

  const equipmentsList = logement.equipments.map((element, index) => {
    return <li key={`${logement.title}-${index}`}>{element}</li>;
  });

  return (
    <main>
      <Slideshow images={logement.pictures} name={logement.title}></Slideshow>
      <div className={styles.layout}>
        <div className={styles.titlesContainer}>
          <h1>{logement.title}</h1>
          <h2>{logement.location}</h2>
          <div className={styles.tagContainer}>
            {logement.tags.map((tag, i) => {
              return <Tag key={`${tag}-${i}`} tag={tag} />;
            })}
          </div>
        </div>
        <div className={styles.profileContainer}>
          <Rating rating={parseInt(logement.rating)} />
          <Host hostName={logement.host.name} hostImg={logement.host.picture} />
        </div>
      </div>
      <div className={styles.collapseContainer}>
        <Collapse displayTitle={"Description"}>
          <p>{logement.description}</p>
        </Collapse>
        <Collapse displayTitle={"Equipement"}>
          <ul>{equipmentsList}</ul>
        </Collapse>
      </div>
    </main>
  );
}

export default Logement;
