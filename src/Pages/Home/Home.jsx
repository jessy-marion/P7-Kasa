import { Link } from "react-router-dom";
import Tag from "../../Components/Tag/Tag";
import Thumb from "../../Components/Thumb/Thumb";

function Home() {
  return (
    <div>
      <Tag></Tag>
      <Thumb></Thumb>
      <h1>Je suis la page d'accueil</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est magni,
        tempore? Ad autem laboriosam quisquam unde voluptates. Ab aut corporis
        culpa debitis, est magni rem reprehenderit? Hic nobis perferendis rerum
        vero. Adipisci commodi dolore doloremque, dolores error exercitationem,
        expedita explicabo facere facilis inventore ipsum laborum maiores maxime
        nesciunt officia pariatur quaerat quam quibusdam rem repudiandae saepe
        sunt ut. Ab accusamus cumque deserunt dolor doloremque doloribus dolorum
        ea eum impedit inventore ipsa laboriosam nam obcaecati pariatur porro
        quae, quam quas ratione repudiandae similique tempore temporibus
        voluptate. A alias amet doloremque ducimus ea earum eius esse excepturi
        harum illo illum in inventore ipsa iste, itaque labore libero magnam
        molestias necessitatibus nihil officia optio pariatur perspiciatis
        placeat porro quae qui quia ratione reprehenderit sapiente sed sequi
        sint sunt tenetur vero vitae voluptas. Aliquid autem corporis dolorem ea
        eaque eius eligendi, eveniet expedita facere fuga, laborum magni
        molestias nam natus placeat rem repellat sequi sit tenetur voluptas!
        Accusamus blanditiis delectus deleniti impedit iste laborum libero rem
        voluptatem. A accusamus adipisci amet animi beatae blanditiis cum ea et
        ex illum in inventore ipsum iure iusto minima molestias mollitia
        necessitatibus omnis praesentium quaerat quibusdam, recusandae
        reiciendis rem sapiente sint totam ullam ut voluptas voluptates
        voluptatibus? Ad alias aliquam animi aspernatur assumenda atque, beatae
        blanditiis consequuntur corporis cumque delectus doloribus ducimus eius
        error esse est et fuga fugit itaque magni maiores molestias non nostrum,
        officia porro provident quasi quia rem repudiandae similique soluta ut
        vel voluptatum! Adipisci asperiores aspernatur cumque, dolore dolorem
        enim facilis fugiat, id maiores officiis optio pariatur repellat soluta
        tempora vero! At, atque corporis dolor dolores, illum impedit ipsa, iure
        minus odit quibusdam quidem ratione reprehenderit rerum sit veniam?
        Adipisci atque dolor dolorem doloribus earum est exercitationem facere
        harum labore laboriosam libero minus natus obcaecati omnis reprehenderit
        rerum sequi, soluta suscipit, ullam ut voluptatum!
      </p>
      <Link to={"/logement/"}>Logement</Link>
    </div>
  );
}

export default Home;
