console.log("oke");

//destructuring array

const perkenalan = ["hallo", "nama", "saya", "bayu"];
const [salam, satu, dua, nama] = perkenalan;
const [salam1, , , nama1] = perkenalan;

console.log(salam);
console.log(nama1);

//swap
let a = 1;
let b = 2;
console.log(a);
console.log(b);
[a, b] = [b, a];
console.log(a);
console.log(b);

// return value pada function
const coba = () => [1, 2];
const [aArr, bArr] = coba();
console.log(aArr);

//rest parameter
const [aArr1, ...values] = [1, 2, 3, 4, 5];
console.log(aArr1);
console.log(values);

// DESTRUCTURING OBJECT
const mhs = {
  nama2: "sandhika galih",
  umur2: 23,
};
//kalau object namanya harus sama
const { nama2, umur2 } = mhs;
console.log(nama2);

//assignment tanpa deklarasi
({ nama3, umur3 } = { nama3: "sandhika galih", umur3: 23 });
console.log(nama3);

//assign ke variable baru
const mhs2 = {
  nama4: "sandhika galih",
  umur4: 23,
};
const { nama4: n, umur4: u } = mhs2;
console.log(u);

//memberikan default value dan assign ke variable baru
const mhs3 = {
  nama5: "sandhika galih",
};
const { nama5: n2, umur2: u2 = "20", email = "bayu@gmail.com" } = mhs3;
console.log(u2);
console.log(email);

//rest parameter
const mhs4 = {
  nama5: "sandhika galih",
  umur5: 23,
  email: "bayu@gmail.com",
};
const { nama5: n3, ...values2 } = mhs4;
console.log(values2);

//mengambil field pada object setelah dikirim sebagai parameter untuk function
const mhs5 = {
  id: 123,
  nama6: "sandhika galih",
  umur6: 23,
  email6: "bayu@gmail.com",
};

function getData({ id, nama6 }) {
  return `${id} - ${nama6}`;
}
console.log(getData(mhs5));
