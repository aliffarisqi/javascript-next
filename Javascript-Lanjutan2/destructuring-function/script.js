console.log("ok");

//DESTRUCTURING FUnction
function penjumlahanPerkalian(a, b) {
  return [a + b, a * b];
}
//traditional
const jumlah = penjumlahanPerkalian(2, 3);
const jumlahPenjumlahanSaja = penjumlahanPerkalian(2, 3)[0];
console.log(jumlah);
console.log(jumlahPenjumlahanSaja);

// menggunakan destructuring
const [jumlahPenjumlahan, jumlahPerkalian] = penjumlahanPerkalian(4, 5);
console.log(jumlahPenjumlahan);
console.log(jumlahPerkalian);

//contoh lain
function kalkulasi(a, b) {
  return [a + b, a - b, a * b];
}

const [tambah1, kurang1, kali1 = "tidak ada", bagi1 = "tidak adaa"] = kalkulasi(
  6,
  7
);
console.log(bagi1);
console.log(kali1);

//contoh diatas nama variable harus urut dengan apa yang di get
//jika tidak ingin seperti itu maka bisa menggunakan object

function kalkulasi1(a, b) {
  return {
    tambah2: a + b,
    kurang2: a - b,
    kali2: a * b,
    bagi2: a / b,
  };
}

const { bagi2, tambah2 } = kalkulasi1(9, 23);
console.log(tambah2);

//DEstructuring function argument
const mhs1 = {
  nama: "bayu",
  umur: 23,
  email: "bayu@gmail.com",
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 100,
  },
};

function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `hallo saya ${nama}, saya umur ${umur} tahun, dan nilai UAS saya adalah ${uas}`;
}
console.log(cetakMhs(mhs1));
