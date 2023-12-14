const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", function () {
  const inputKeyword = document.querySelector(".input-keyword");
  fetch("http://www.omdbapi.com/?apikey=4e9a0e25&s=" + inputKeyword.value)
    .then((response) => response.json())
    .then((response) => {
      const movies = response.Search;
      let cards = "";
      movies.forEach((m) => (cards += showCards(m)));
      const movieContainer = document.querySelector(".movie-container");
      movieContainer.innerHTML = cards;

      //ketika button details di click
      const modalDetailButton = document.querySelectorAll(
        ".modal-detail-button"
      );
      modalDetailButton.forEach((btn) => {
        btn.addEventListener("click", function () {
          const imdbid = this.dataset.imdbid;
          fetch("http://www.omdbapi.com/?apikey=4e9a0e25&i=" + imdbid)
            .then((response) => response.json())
            .then((m) => {
              const movieDetail = showMovieDetail(m);
              const modalBody = document.querySelector(".modal-body");
              modalBody.innerHTML = movieDetail;
            });
        });
      });
    });
});

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

// $(".button-close").on("click", function () {
//   $(".modal-body").html("");
// });
