// lexical scope

function init1() {
  let nama = "sandika";
  let umur = 23;
  //closure
  function tampilNama() {
    console.log(nama);
    console.log(umur);
  }
  //end closur
  // tampilNama();
  console.dir(tampilNama);
}

// init1();
//function vectories
function init2() {
  // let nama = "sandika";
  //closure
  return function (nama) {
    console.log(nama);
  };
  // return tampilNama;
}

let panggilNama = init2();
panggilNama("bayu");

//alasan menggunakan closur
//1. untuk membuat function vektories
//2. private method

//other example vectories function
function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`hallo ${nama}, selamat ${waktu} semoga harimu menyenangkan`);
  };
}

let selamatPagi = ucapkanSalam("pagi");
let selamatSiang = ucapkanSalam("siang");
let selamatMalam = ucapkanSalam("malam");

selamatPagi("sandika");
selamatMalam("alif");

console.dir(selamatMalam);

//cont0h classic
// let add = function () {
//   let counter = 0;
//   return function () {
//     return ++counter;
//   };
// };
// let a = add();
// console.log(a());
// console.log(a());

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();
console.log(add());
console.log(add());
