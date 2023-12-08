// cara membuat object pada javascript
// 1. Object Literal
// PROBLEM tidak efektif ketika object banyak

let mahasiswaLiteral = {
  nama: "bayu alif farisqi",
  energi: 10,
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`hallo ${this.nama}, selamat makan`);
  },
};
let mahasiswaLiteral2 = {
  nama: "dodi",
  energi: 10,
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`hallo ${this.nama}, selamat makan`);
  },
};

// 2. Function Declaration
// PROBLEM : Memakan banyak resource karena menduplikat isi function
// ini mengetasinya
const methodMahasiswa = {
  makan: function (porsi) {
    this.energy += porsi;
    console.log(`hallo ${this.nama}, selamat makan`);
  },
  main: function (jam) {
    this.energy -= jam;
    console.log(`hallo ${this.nama}, selamat bermain`);
  },
  tidur: function (jam) {
    this.energy += jam * 2;
    console.log(`hallo ${this.name} selamat tidur`);
  },
};
function MahasiswaDeclaration(nama, energy) {
  let mahasiswa = Object.create(methodMahasiswa); //dalam oop sama dengan pewarisan
  mahasiswa.nama = nama;
  mahasiswa.energy = energy;

  // mahasiswa.makan = methodMahasiswa.makan;
  // mahasiswa.main = methodMahasiswa.main;
  // mahasiswa.tidur = methodMahasiswa.tidur;
  // cara lebih efektif mengganti {} dengan Object.created()

  return mahasiswa;
}

let sandikaDec = MahasiswaDeclaration("Sandika", 10);
let doddyDec = MahasiswaDeclaration("doddy", 20);

// 3. Constructor function
function MahasiswaConstructor(nama, energy) {
  this.nama = nama;
  this.energy = energy;

  this.makan = function (porsi) {
    this.energy += porsi;
    console.log(`hallo ${this.nama}, selamat makan`);
  };
  this.main = function (jam) {
    this.energy -= jam;
    console.log(`hallo ${this.nama}, selamat bermain`);
  };
}

let sandikaCon = new MahasiswaConstructor("sandika", 10);

//CONSTRUCTOR FUNCTION PALING DI SARANKAN
function MahasiswaCons(nama, energy) {
  // di belakang layar => let this = Object.create(Mahasiswa.prototype)
  this.nama = nama;
  this.energy = energy;
}
MahasiswaCons.prototype.makan = function (porsi) {
  this.energy += porsi;
  return `halo ${this.nama}, selamat makan`;
};
MahasiswaCons.prototype.main = function (jam) {
  this.energy -= porsi;
  return `halo ${this.nama}, selamat main`;
};
MahasiswaCons.prototype.tidur = function (jam) {
  this.energy += porsi * 2;
  return `halo ${this.nama}, selamat tidur`;
};
let sandikaCons = new MahasiswaConstructor("sandika", 10);

class MahasiswaClass {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }
  makan(porsi) {
    this.energi += porsi;
    return `selamat makan ${this.nama}, jangan lupa berdoa`;
  }
  main(jam) {
    this.energi -= jam;
    return `selamat main ${this.nama}, jangan lupa berdoa`;
  }
  tidur(jam) {
    this.energi += jam + 2;
    return `selamat tidur ${this.nama}, jangan lupa berdoa`;
  }
}

let bayu = new MahasiswaClass("bayu", 20);
