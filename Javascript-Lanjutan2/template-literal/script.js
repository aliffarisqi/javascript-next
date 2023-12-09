console.log("ok");

// template literal
const nama = "bayu alif";
const umur = "23";
const nrp = "8279812";
console.log(`hallo nama saya ${nama} umur saya ${umur} tahun`);

//menyimpan ternari operator
const x = 10;
console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);

const mhs = {
  nama: "bayu alif",
  umur: "23",
  nrp: "8279812",
};
const el = `<div class="mhs">
<h2 class="">${mhs.nama}</h2>
<span class="nrp">${mhs.nrp}</span>
</div>`;

// document.body.innerHTML = el;

const mhsArray = [
  {
    nama: "alif",
    umur: "22",
    nrp: "8279812",
    matkul: ["kalulus", "alpro"],
  },
  {
    nama: "alif farisqi",
    umur: "23",
    nrp: "23423",
    status: "lulus",
    matkul: ["statistik", "alpro", "databases"],
  },
];

function cetakMatkul(mataKuliah) {
  return `
  <ol class="">
    ${mataKuliah.map((mk) => `<li class="">${mk}</li>`).join("")}
  </ol>
  `;
}
const elLoop = `
<div class="nama">
${mhsArray
  .map(
    (m) => `<ul class="">
  <h2 class="">${m.nama} ${m.status ? `(${m.status})` : ""}</h2>
  <h4 class="">Nrp : ${m.nrp}</h4>
  <h4 class="">Mata kuliah</h4>
  ${cetakMatkul(m.matkul)}
</ul>`
  )
  .join("")}
</div>
`;
document.body.innerHTML = elLoop;
