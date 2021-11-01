// ES6 物件導向案例

class Person {
  constructor({ name, age }) {
    this.name = name;
    this.age = age;
  }

  speakName() {
    console.log(`My name is ${this.name}`);
  }
}

class Student {
  constructor({ grade }) {
    this.grade = grade;
  }

  speakGrade() {
    console.log(`My grade is ${this.grade}`);
  }
}

// Humans 人類
class Humans {
  // 類的建構函式
  // 在 JS 中一個類的建構函式只有一個，若需要多個則需要特殊寫法或是配合其他類的建構函式
  constructor(properties) {
    // 實體的動態屬性
    // 因為會隨著參數而改變，故稱動態屬性
    if (properties) {
      Object.assign(this, properties);
    }

    // 類的靜態屬性
    // 在 JS 中類也是物件，故也有屬性與屬性質
    // 類的屬性相當於變數，可以在類的方法中使用
    Humans.number = 20;
  } // 不能有逗號

  // 動態方法
  // 實體可繼承，故可以使用 this 關鍵字
  showAge() {
    console.log(this.age);
  }

  // 靜態方法，可多個
  // 實體不可繼承，故 this 關鍵字不會指向實體
  static console() {
    console.log(Humans.number);
  }
}

// 實體
let Human1 = new Humans({
  name: "Ian",
  age: 28,
});

// 實體
let Human2 = new Humans({
  name: "Peter",
  age: 24,
});

// 實體
console.log(Human1); // { name: 'Ian', age: 28 }

// 實體繼承方法
Human1.showAge(); // 28

// 實體無法繼承類的靜態方法
// Human1.console();

// 使用類的靜態方法
// 例如 Array.from()
Humans.console(); // 20
