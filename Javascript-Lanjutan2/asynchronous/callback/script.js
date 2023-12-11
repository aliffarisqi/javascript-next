console.log("ok");
//Callback

// syncronous callback(jarang digunakan)
function hallo(nama) {
  alert(`hallo ${nama}`);
}

function tampilkanPesan(callback) {
  const nama = prompt("Masukan Nama : ");
  callback(nama);
}

// tampilkanPesan(hallo);
// bisa juga
// tampilkanPesan((nama) => alert(`hallo ${nama}`));

//ASYNCRONOUS CALLBACK
mhs = [
  {
    nama: "bayu alif",
    nim: "1800018325",
    email: "bayu@gmail",
    jurusan: "teknik informatika",
    idDodenWali: 1,
  },
  {
    nama: "eko rilo",
    nim: "87916",
    email: "ekou@gmail",
    jurusan: "teknik informatika",
    idDodenWali: 2,
  },
  {
    nama: "rifki",
    nim: "08796",
    email: "rifki@gmail",
    jurusan: "teknik kimia",
    idDodenWali: 2,
  },
];

// console.log("mulai");
// mhs.forEach((m) => {
//   for (let i = 0; i < 10000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });
// console.log("selesai");

//ASYNCRONOUS CALLBACK OTHER EXAMPLE

function getDataMahasiswa(url, success, error) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };

  xhr.open("get", url);
  xhr.send();
}
const success = (result) => {
  const mhs = JSON.parse(result);
  mhs.forEach((m) => console.log(m.nama));
};
function error() {
  console.log("er");
}
console.log("mulai");
getDataMahasiswa("../mahasiswa.json", success, error);
console.log("selesai");

//menggunakan JQUERY
console.log("//menggunakan JQUERY");
console.log("mulai");
$.ajax({
  url: "../mahasiswa.json",
  success: (mhs) => {
    mhs.forEach((m) => console.log(m.email));
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
console.log("selesai");
