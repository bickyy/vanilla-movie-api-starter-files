const DOMSelectors = {
  grid: document.querySelector(".movie-grid"),
};
const key = "1fd276ec57b4baedacae00246e5cf4b7";
const call = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=average_vote.asc&vote_count.gte=10000&vote_average.gte=8.1&include_adult=false&include_video=false&page=1`;

const query = async function () {
  try {
    const response = await fetch(call);
    const data = await response.json();
    data.results.forEach((movie) => {
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `<div class="movie-card">
      <div class="movie-card-front">
        <img
          src="https://image.tmdb.org/t/p/w300/${movie.poster_path}"
          alt=""
          class="poster"
        />
      </div>
      <div class="movie-card-back">
        <h3 class="movie-card-header">${movie.original_title}</h3>
        <div class="score-box">
          <p class="user-score">Community Score</p>
          <p class="user-score">${movie.vote_average}</p>
        </div>

        <div class="release-box">
          <p class="release-date">Released</p>
          <p class="release-date">${movie.release_date}</p>
        </div>

        <div class="movie-genres">
        <div>${movie.genre_ids}</div>
        </div>
      </div>
    </div>`
      );
    });
  } catch (error) {
    console.log(error);
  }
};
query();
