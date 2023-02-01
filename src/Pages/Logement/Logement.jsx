import { Link } from "react-router-dom";

function Logement() {
  return (
    <div>
      <h1>Je suis le logement</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
        consequatur consequuntur deleniti dicta, distinctio dolorum ea earum
        error eum eveniet ex expedita hic in labore laborum magnam, magni minima
        modi molestiae natus quaerat quo ratione sapiente velit voluptates.
        Aperiam dolor doloremque, inventore iure modi nihil porro quasi rem
        tempore voluptates!
      </p>
      <Link to={"/"}>Accueil</Link>
    </div>
  );
}

export default Logement;
