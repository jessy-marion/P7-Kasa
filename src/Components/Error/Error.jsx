import error404 from "../../assets/img/404.png";

function Error() {
  return (
    <div>
      <img src={error404} alt="error 404" />
      <p>Oups! La page que vous demandez n'existe pas.</p>
    </div>
  );
}

export default Error;
