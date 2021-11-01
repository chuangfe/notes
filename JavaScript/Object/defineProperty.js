// Object.defineProperty(Obj, key, {value, 屬性條件 ... });
// 給與物件賦值，且可以設定更嚴格的條件，例如不可修改

// 參數一 要賦值的物件
// 參數三 賦值的屬性
// 參數三 {value: 賦值的屬性值, writable: 是否可寫入, configurable: 是否可以刪除}

let obj = {};

Object.defineProperty(obj, "test", {
  value: "writableFalse",
  writable: false,
  configurable: false,
});
