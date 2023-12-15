function hitungCaraMenaikiTangga(n) {
  const memo = new Array(n + 1).fill(-1);
  console.log(memo);
  function hitungCarabantu(tangga) {
    if (tangga === 0) return 1;
    if (tangga < 0) return 0;
    if (memo[tangga] !== -1) return memo[tangga];

    const cara =
      hitungCarabantu(tangga - 1) +
      hitungCarabantu(tangga - 2) +
      hitungCarabantu(tangga - 3);
    memo[tangga] = cara;
    return cara;
  }
  return hitungCarabantu(n);
}

const jumlahTingkat = 4;
const caraMendaki = hitungCaraMenaikiTangga(jumlahTingkat);
console.log(
  `Jumlah cara untuk mendaki ${jumlahTingkat} tingkat tangga: ${caraMendaki}`
);
