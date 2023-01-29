
function Test() {
    fetch("./data/logements.json")
        .then((res) => {
        console.log(res)
            if(res.ok) {
                return res.json();
            }
    })
        .then((logements) => {
            console.log(logements)
    })
        .catch((err) => console.log(err))

}

export default Test