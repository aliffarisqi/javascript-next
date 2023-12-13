//MENGGUNAKAN LIBRARY JQUERY
// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=4e9a0e25&s=avengers",
//   success: (movie) => console.log(movie),
// });

//MENGGUNAKAN VANILA JAVASCRIPT(MURNI)
// const url = "http://www.omdbapi.com/?apikey=4e9a0e25&s=avengers";
// let xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//   if (xhr.status === 200) {
//     if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.response));
//     }
//   } else {
//     console.log(xhr.responseText);
//   }
// };

// xhr.open("get", url);
// xhr.send();

//MENGGUNAKAN FETCH menggunakan PRomise
//basic syntax
fetch("http://www.omdbapi.com/?apikey=4e9a0e25&s=avengers")
  .then((response) => response.json())
  .then((response) => console.log(response));

// promise adalah object yang merepresentasikan keberhasilan atau kegagalan sebuah event yang asyncronous di masa yang akan datang
// janji(terpenuhi/ingkar)
// dalam bahasa javascript
// janji = states(fullfilled/rejected/pending)
// callback (fullfilled = resolve / rejected = reject / pending = finally)
// action (fullfilled = then / rejected = catch)

// contoh promise sederhana 1
let ditepati = true;
//terdapat 2 parameter pada promise, resolve dan reject
const janji1 = new Promise((resolve, reject) => {
  if (ditepati) {
    resolve("Janji di Tepati");
  } else {
    reject("Ingkar Janji");
  }
});
// console.log(janji1);
janji1
  .then((response) => console.log("OK : " + response))
  .catch((response) => console.log("NOT OK : " + response));

// contoh promise sederhana 2
let ditepati2 = true;
const janji2 = new Promise((resolve, reject) => {
  if (ditepati) {
    setTimeout(() => {
      resolve("Janji di Tepati setelah beberapa waktu");
    }, 2000);
  } else {
    setTimeout(() => {
      reject("Janji di Tepati setelah beberapa waktu");
    }, 2000);
  }
});

console.log("mulai");
janji2
  .finally(() => console.log("selesai menunggu"))
  .then((response) => console.log("OK : " + response))
  .catch((response) => console.log("NOT OK : " + response));
console.log("selesai");

// dalam promise ada methode all

// Promise.all

const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Avengers",
        sutradara: "Bayu Alif Farisqi",
        pemeran: "Doddy, Eric",
      },
    ]);
  }, 1000);
});
const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Bandung",
        temp: 26,
      },
    ]);
  }, 500);
});

//kalau satus satu seperti ini
// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

// jika menggunakan all
Promise.all([film, cuaca]).then((response) => {
  const [film, cuaca] = response;
  console.log(film);
  console.log(cuaca);
});
