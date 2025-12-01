let btn = document.querySelector("button");

btn.addEventListener("click", async() => {
    let result = await getJokes();
    let output = document.querySelector("p");
    output.innerText = result;
    console.log(result)
})

let url = "https://v2.jokeapi.dev/joke/Any?safe-mode"

async function getJokes() {
    try {
        let res = await axios.get(url);
        if(res.data.setup == undefined) {
            return res.data.joke;
        }
        else{
            return res.data.setup +"\n"+ res.data.delivery
        }
    }
    catch(error) {
        console.log("Some Error Occured: " + error)
    }
}