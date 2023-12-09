// ambil semua elemen video
const videos = Array.from(document.querySelectorAll("[data-duration"));
console.log(videos);
// pilih hanya yang 'JAVASCRIPT LANJUTAN'
// ambil durasi masing masing vide
// ubah durasi menjadi float kemudian, ubah menit menjadi detik
// jumlahkan semua detik
let jsLanjut = videos
  .filter((v) => v.textContent.includes("JAVASCRIPT LANJUTAN"))
  .map((item) => item.dataset.duration)
  .map((waktu) => {
    // 10:30 -> [10,30] split
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  .reduce((total, detik) => total + detik);

// ubah formatnya dari detik ke jam menit detik
// Math.flor untuk pembulatan ke bawah, round untuk ke paling dekat dan ceil untuk ke atas
console.log(jsLanjut);
const jam = Math.floor(jsLanjut / 3600);
//mencari sisa menit
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

console.log(jam);
console.log(menit);
console.log(detik);

const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;

const jmlVideo = videos.filter((v) =>
  v.textContent.includes("JAVASCRIPT LANJUTAN")
).length;

const pJmlVideo = document.querySelector(".jumlah-video");
pJmlVideo.textContent = `${jmlVideo} video`;

console.log(jmlVideo);
