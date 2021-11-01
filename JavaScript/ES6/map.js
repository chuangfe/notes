// 新的資料結構

let obj = new Map();

// Map.prototype.set(key, value);
// 增加屬性，可以覆蓋
obj.set("name", "ian");
obj.set("age", 27);

console.log(obj); // Map { 'name' => 'ian', 'age' => 27 }

// Map.prototype.get(key);
// 獲取屬性值
console.log(obj.get("name")); // ian

// Map.prototype.size;
// 獲取實體長度
console.log(obj.size); // 2

// Map.prototype.has(property);
// 判斷物件使否有該屬性，返回 true or false
console.log(obj.has("name")); // true

// Map.prototype.clear();
// 刪除物件所有屬性
// obj.clear();
// console.log(obj); // Map {}

// 迴圈方式
// for of || for of + keys() || for of + values()
for (let item of obj) {
  console.log(item); // [ 'name', 'ian' ] [ 'age', 27 ]
}
for (let key of obj.keys()) {
  console.log(key); // name age
}
for (let value of obj.values()) {
  console.log(value); // ian 27
}

//
obj.forEach((value, key, obj) => {
  // ian name Map { 'name' => 'ian', 'age' => 27 }
  // 27 'age' Map { 'name' => 'ian', 'age' => 27 }
  console.log(value, key, obj);
});

console.log(obj.name); // undefined
console.log(obj["name"]); // undefined
