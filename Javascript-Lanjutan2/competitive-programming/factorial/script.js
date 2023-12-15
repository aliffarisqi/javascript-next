function countTotalZero(n) {
  let count = 0;
  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }

  return count;
}
const n = 2;
const trailingZeros = countTotalZero(n);
console.log(`Number of trailing zeros in ${n}! is: ${trailingZeros}`);
