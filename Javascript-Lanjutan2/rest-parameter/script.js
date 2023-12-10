console.log("ok");
//REST PARAMETER ...

function myFunc(a, b, ...myArgs) {
  return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
  // return arguments;
  // return [...arguments]
}
console.log(myFunc(1, 2, 3, 4, 5, 6, 7));

//menjumlahkan seluruh parameter yang dikirimkan

function jumlahkan(...angka) {
  // let total = 0;
  // for (const a of angka) {
  //   total += a;
  // }
  // return total;

  //menggunakan reduce
  return angka.reduce((a, b) => a + b);
}
console.log(jumlahkan(1, 2, 3, 4, 5, 6));

//array destructuring dengan rest
const kelompok1 = ["bayu", "alif", "faris", "risqi"];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(ketua);

// contoh lain
const team = {
  pm: "bayu",
  frontEnd1: "alif",
  frontEnd2: "faris",
  backEnd: "isqi",
  ux: "isqi",
  devops: "Ferry",
};

const { pm, ...myTeam } = team;
console.log(myTeam);

//fileter
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}

console.log(filterBy("string", 1, 2, "lifarisqi", 4, 5));
