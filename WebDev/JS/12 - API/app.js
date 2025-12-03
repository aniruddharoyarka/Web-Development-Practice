let btn = document.querySelector("button");
let searchbox = document.querySelector("input");
btn.addEventListener("click", getMovie);

async function getMovie() {
    try {
        let query = searchbox.value;
        let url = `http://www.omdbapi.com/?apikey=f9d6d964&s=${query}`;

        let result = await axios.get(url);

        let container = document.querySelector(".container");
        container.innerHTML = "";

        let movies = result.data.Search;

        for (let i = 0; i < movies.length; i++) {
            let movie = movies[i];
            console.log(movie)

            let card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img id="poster" src="${movie.Poster}" alt="">
                <div class="information">
                    <h3 id="title">${movie.Title}</h3>
                    <p id="type">${movie.Type}</p>
                    <p id="year">${movie.Year}</p>
                    <button><a href="https://www.imdb.com/title/${movie.imdbID}">Visit IMDB Page</a></button>
                    
                </div>
            `;

            container.appendChild(card);
        }
    }
    catch (err) {
        console.log(err);
    }
}
