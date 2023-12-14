const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", async function () {
  try {
    const inputKeyword = document.querySelector(".input-keyword");
    const movie = await getMovies(inputKeyword.value);
    updateUI(movie);
  } catch (err) {
    // console.log(err);
    alert(err);
  }
});
function getMovies(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=4e9a0e25&s=" + keyword)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((response) => {
      //Response R besar dari omdb
      if (response.Response === "False") {
        throw new Error(response.Error);
      }
      console.log(response);
      return response.Search;
    });
}

function updateUI(movies) {
  let cards = "";
  movies.forEach((m) => (cards += showCards(m)));
  const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = cards;
}

//event Binding
document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("modal-detail-button")) {
    const imdbid = e.target.dataset.imdbid;
    const moviewDetail = await getMovieDetail(imdbid);
    updateUIDetail(moviewDetail);
  }
});
function getMovieDetail(imdbid) {
  return fetch("http://www.omdbapi.com/?apikey=4e9a0e25&i=" + imdbid)
    .then((response) => response.json())
    .then((m) => m);
}
function updateUIDetail(m) {
  const movieDetail = showMovieDetail(m);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = movieDetail;
}

function showCards(m) {
  return `<div class="col-md-3 my-3">
            <div class="card">
              <img src="${m.Poster}" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal"
                data-target="#moviewDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
              </div>
            </div>
          </div>`;
}

function showMovieDetail(m) {
  return `<div class="container-fluid">
            <div class="row">
              <div class="col-md-3">
                <img src="${m.Poster}" class="img-fluid" alt="" />
              </div>
              <div class="col-md">
                <ul class="list-group">
                  <li class="list-group-item"><h4>${m.Title} (${m.year})</h4></li>
                  <li class="list-group-item">
                    Director : <strong>${m.Director}</strong>
                  </li>
                  <li class="list-group-item">
                    Actors : <strong>${m.Actors}</strong>
                  </li>
                  <li class="list-group-item">
                    Writer : <strong>${m.Writer}</strong>
                  </li>
                  <li class="list-group-item">
                    Plot : ${m.Plot}
                  </li>
                </ul>
              </div>
            </div>
          </div>`;
}
