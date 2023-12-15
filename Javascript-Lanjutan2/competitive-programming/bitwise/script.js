function addWithoutPlus(a, b) {
  while (b !== 0) {
    const sumWithoutCarry = a ^ b;
    const carry = (a & b) << 1;
    a = sumWithoutCarry;
    b = carry;
  }
  return a;
}
const result = addWithoutPlus(5, 3);
console.log(result);
console.log(result);
