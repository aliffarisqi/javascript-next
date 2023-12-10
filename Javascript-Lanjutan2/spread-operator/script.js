console.log("ok");
//SPREAD OPERATOR ...
const mhs = ["bayu", "alif", "farisqi"];
console.log(mhs);

//dengan spread
console.log(...mhs);

console.log(...mhs[0]);

//penggunaan
//1. menggabungkan dua array

const mhs1 = ["bayu", "farisqi", "alif"];
const dosen = ["dede", "mulyadi"];

//dengan funcgsi default concat
const orang1 = mhs.concat(dosen);
//dengan spread operator
const orang2 = [...mhs1, ...dosen];
console.log(orang1);
console.log(orang2);

// dengan spread lebih fleksible
const orang3 = [...mhs, "aji", ...dosen];
console.log(orang3);

//2. meng COPY array
console.log("//2. meng COPY array");
// cara salah mengcopy array
const mhs2 = ["bayu", "farisqi", "alif"];
const mhsCopy = mhs2;
//karena jika kita merubah nilai arrayCopy maka nilai aray mhs2 juga akan berubah
mhsCopy[0] = "andika";
console.log(mhs2);
console.log(mhsCopy);

// menggunakan spread
const mhsCopy1 = [...mhs2];
mhsCopy1[0] = "sigit";
console.log(mhs2);
console.log(mhsCopy1);
//contoh lain

const liMhs = document.querySelectorAll("li");
console.log(liMhs);
// jika ingin memasukan data li ke dalam array
// cara tradisional
const mhs3 = [];
for (let i = 0; i < liMhs.length; i++) {
  mhs3.push(liMhs[i].textContent);
}
console.log(mhs3);

//menggunakan map dan spread, karena nodelist bukan array jadi tidak bisa di map, harus di spread dulu
const mhs4 = [...liMhs].map((m) => m.textContent);
console.log(mhs4);

const nama = document.querySelector(".namas");
const huruf = [...nama.textContent].map((h) => `<span >${h}</span>`).join("");

console.log(huruf);

//me replace string menjadi per span
nama.innerHTML = huruf;
