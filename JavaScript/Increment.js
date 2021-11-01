// x += n -> x = x + n;

// x -= n -> x = x - n;

// x *= n -> x = x * n;

// x /= n -> x = x / n;

// x %= n -> x = x % n;

// ++ 運算

let n = 1;

// n++;
// n = n + 1;
let t1 = n++;

console.log(n, t1); // 2 1

// 計算方式與上相同，區別在於賦值的順序
let t2 = ++n;

console.log(n, t1, t2); // 3 1 3
