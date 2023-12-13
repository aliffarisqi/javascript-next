$(".search-button").on("click", function () {
  $.ajax({
    url:
      "http://www.omdbapi.com/?apikey=4e9a0e25&s=" + $(".input-keyword").val(),
    success: (results) => {
      const movies = results.Search;
      let cards = "";
      movies.forEach((m) => {
        cards += showCards(m);
      });
      $(".movie-container").html(cards);

      //ketika tombol button di click
      $(".modal-detail-button").on("click", function () {
        console.log($(this).data("imdbid"));
        $.ajax({
          url:
            "http://www.omdbapi.com/?apikey=4e9a0e25&i=" +
            $(this).data("imdbid"),
          success: (m) => {
            const movieDetail = showMovieDetail(m);
            $(".modal-body").html(movieDetail);
          },
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
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
