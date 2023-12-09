console.log("ok");
// higher order function adalah function yang memiliki parameter function
// kenapa menggunakan higher order function agar abstraksi (simple)

// higher order function banyak digunakan pada map filter reduce

//FILTER
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

//filter angka >=3 tradisional
const newAngka = [];
for (i = 0; i < angka.length; i++) {
  if (angka[i] >= 3) {
    newAngka.push(angka[i]);
  }
}
console.log(newAngka);

//menggunakan filter
const newAngkaFilter = angka.filter(function (a) {
  return a >= 3;
});
console.log(newAngkaFilter);

//menggunakan arrow function
const newAngkaFilterArrow = angka.filter((a) => a >= 3);
console.log(newAngkaFilterArrow);

// MAP
// kalikan angka dikali 2
// menggunakan arrow function
const newAngkaMapArrow = angka.map((a) => a * 2);
// return bisa bermacam maca,
const newAngkaMapArrayDes = angka.map((a, i) => {
  return console.log(`angka ke ${i + 1} : ${a}`);
});
console.log(newAngkaMapArrow);

//REDUCE
// melakukan sesuatu terhadap seluruh isi array
// reduce memiliki 2 argument
console.log("==");
//nilai awal default 0, jika di kasih bisa
const newAngkaReduceArrow = angka.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 4);
console.log(newAngkaReduceArrow);

//METHOD CHAINING
// cari angka > 5, kalikan 3, jumlahkan

const hasil = angka
  .filter((a) => a > 5)
  .map((a) => a * 3)
  .reduce((acc, cur) => acc + cur);
console.log(hasil);
