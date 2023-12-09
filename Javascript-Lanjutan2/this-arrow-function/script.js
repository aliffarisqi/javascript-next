console.log("ok");

// konsept this in arrow function

// constractor function
const Mahasiswa = function () {
  this.nama = "sandika";
  this.umur = 33;
  this.sayHello = function () {
    console.log(
      `hallo nama saya ${this.nama} dan umur saya ${this.umur} tahun`
    );
  };
};

let sandika = new Mahasiswa();

// dengan menggunakan arrow function
// dengan menggunakan arrow function
const MahasiswaArrow = function () {
  this.nama = "sandika";
  this.umur = 33;
  this.sayHello = () => {
    //arrow function tidak memiliki konsep this, walaupun ini berjalan tapi tidak direkomendasikan
    console.log(
      `hallo nama saya ${this.nama} dan umur saya ${this.umur} tahun`
    );
  };
};

const MahasiswaArrow3 = function () {
  this.nama = "sandika";
  this.umur = 33;
  this.sayHello = function () {
    console.log(
      `hallo nama saya ${this.nama} dan umur saya ${this.umur} tahun`
    );
  };
  setInterval(() => {
    // karena arrow function tidak memiliki konsep this maka dia mencari ke lexical scope dan itu mahasiswa
    // berbeda ketika menggunakan function declaration dia akan mencari di global scope
    // console.log(this.umur++);
  }, 500);
};

let sandika2 = new MahasiswaArrow3();

// CONTOH REAL ARROW FUNCTION
const box = document.querySelector(".box");
//jika menggunakan arrow function maka akan ke window karena this akan mencari keluar, maka menggunakan function biasa
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);

  //jika menggunakan function biasa maka this ini isinya window karena terkena hoisting
  // setTimeout(function () {
  //   this.classList.toggle("caption");
  // }, 600);

  //maka menggunakan arrow function
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
  setTimeout(() => {
    this.classList.toggle(satu);
  }, 600);
});
