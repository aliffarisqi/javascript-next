// for..of
const mhs = ["bayu", "alif", "faris"];

//for biasa
for (let i = 0; i < mhs.length; i++) {
  console.log(mhs[i]);
}

//menggunakan forEach
mhs.forEach((m) => console.log(m));

//menggunakan for..of
for (const m of mhs) {
  console.log(m);
}

//melooping string
const nama = "bayu alif";
for (const huruf of nama) {
  console.log(huruf);
}

mhs.forEach((m, i) => {
  console.log(`${m} adalah mahasiswa ke ${i + 1}`);
});

//menggunakan for of
for (const [i, m] of mhs.entries()) {
  console.log(`${m} adalah mahasiswa ke ${i + 1}`);
}

//nodelist
const listNama = document.querySelectorAll(".nama");
console.log(listNama);

//menggunakan foreach
listNama.forEach((n) => console.log(n.textContent));

//menggunakan for of
for (n of listNama) {
  console.log(n.innerHTML);
}

//pada arguments

function jumlahAngka() {
  let jumlah = 0;
  for (a of arguments) {
    jumlah += a;
  }
  return jumlah;
}
console.log(jumlahAngka(1, 2, 3, 4, 5, 6));

//FOR IN
const mhs1 = {
  nama: "bayu",
  umur: 22,
  email: "bayu@gmail",
};

for (m in mhs1) {
  console.log(m);
  console.log(mhs1[m]);
}
