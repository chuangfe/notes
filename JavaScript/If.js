if () {
  
} else {

}

// 關係運算與隱式轉換

let x;

if (x == false) {
  // '', 0, false
} else if (x === false) {
  // false
} else if (!x) {
  // '', 0, false, undefined, null, NaN
}

// a, b 觸碰
// a 矩形 200*200 x1, y1
// b 矩形 400*400 x2, y2
// if (x1 + 200 >= x2 || x1 <= x2 + 400 && y1 + 200 >= y2 || y1 <= y2 + 400)
