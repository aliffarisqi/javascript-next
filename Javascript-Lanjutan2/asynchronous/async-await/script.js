// const coba = new Promise((resolve, reject) => {
//   const waktu = 3000;
//   if (waktu < 5000) {
//     setTimeout(() => {
//       resolve("selesai");
//     }, 2000);
//   } else {
//     reject("kelamaan");
//   }
// });
// console.log(coba);
// coba.then(() => console.log(coba)).catch(() => console.log(coba));

//menerapkan async await
function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 3000;
    if (waktu < 3000) {
      setTimeout(() => {
        resolve("selesai ya");
      }, 2000);
    } else {
      reject("kelamaan");
    }
  });
}
async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (err) {
    console.log(err);
  }
}
cobaAsync();
