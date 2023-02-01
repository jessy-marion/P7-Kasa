import { useEffect } from "react";

function Test() {
  useEffect(() => {
    fetch("./data/logements.json")
      .then((res) => {
        console.log(res);
        if (res.ok) {
          return res.json();
        }
      })
      .then((logements) => {
        console.log(logements);
      })
      .catch((err) => console.log(err));
  });

  /* fetch("./data/logements.json")
        .then((res) => {
        console.log(res)
            if(res.ok) {
                return res.json();
            }
    })
        .then((logements) => {
            console.log(logements)
    })
        .catch((err) => console.log(err))*/
  return <h1>Je suis un test</h1>;
}

export default Test;
