// function expresion
let tampilNama = function (nama) {
  return `halo ${nama}`;
};
console.log(tampilNama("bayu"));

//arrow function
let tampilNamaArrow = (nama) => {
  console.log(`halo ${nama}`);
};
tampilNamaArrow("bayu arrow");

const tampilNamaArrow2 = (nama, waktu) => {
  return `selamat ${waktu}, ${nama}`;
};
console.log(tampilNama("bayu", "malam"));

// kalau param 1 tidak perlu kurung
const tampilNamaArrow3 = (nama) => {
  return `hallo ${nama}`;
};
console.log(tampilNamaArrow3("alif"));

// dan kalau isinya hanya return, ngga perlu di kasih return dan {}
//dinamakan implisit return
const tampilNamaArrow5 = (nama) => `hallo, ${nama}`;
console.log(tampilNamaArrow5("faris"));

//kalau tidak memerlukan parameter wajib menyertakan ()
const tampilNamaArrow6 = () => `hello world`;
console.log(tampilNamaArrow6());

//contoh lain
let mahasiswa = ["bayu", "bayu alif", "bayu alif farisqi"];

//saya akan memetakan jumlah huruf pada nama mahasiswa
//jika menggunakan function biasa

let jumlahHuruf = mahasiswa.map(function (nama) {
  return nama.length;
});

console.log(jumlahHuruf);

//menggunakan arrow function
let jumlahHurufArrow = mahasiswa.map((nama) => nama.length);
console.log(jumlahHurufArrow);

//mereturn object
let jumlahHurufArrow2 = mahasiswa.map((nama) => ({
  nama: nama,
  jmlhHuruf: nama.length,
}));

console.log(jumlahHurufArrow2);

//lebih rapi
console.table(jumlahHurufArrow2);
