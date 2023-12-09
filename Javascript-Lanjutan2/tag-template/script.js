console.log("oke");
// tagged template

const nama = "Bayu Alif";
const umur = "23";

//...values menerima parameter dinamis
function coba(strings, ...values) {
  //cara gampang
  // let result = "";
  // strings.forEach((str, i) => {
  //   result += `${str}${values[i] || ""}`;
  // });
  // return result;

  //cara modern
  return strings.reduce(
    (result, str, i) => `${result}${str}${values[i] || ""}`,
    ""
  );
}

const str = coba`hallo nama saya ${nama} umur saya ${umur} tahun`;
console.log(str);

//contoh implementasi

const namaIm = "Bayu Alif";
const umurIm = "23";

function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str} <span class="hl">${values[i] || ""}</span>`,
    ""
  );
}

const strIm = highlight`hallo nama saya ${namaIm} umur saya ${umurIm} tahun`;
console.log(strIm);
document.body.innerHTML = strIm;
