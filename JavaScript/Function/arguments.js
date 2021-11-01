// ...args
function sum(...args) {
  console.log(args, Array.isArray(args)); // [ 1, 2, 3, 4 ] true
  return args.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
