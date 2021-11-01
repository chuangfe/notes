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

// Student extends(繼承) Person.
class Student extends Person {
  constructor({ name, age, grade }) {
    // super 是配和 extends 繼承使用的函式.
    // 若繼承者(Student)沒有 constructor, 則不需要寫 super.
    super({ name, age });
    this.grade = grade;
  }

  speakGrade() {
    console.log(`My name is ${this.name}, My grade is ${this.grade}`);
  }

  // class 可以直接寫, 實例的固定屬性.
  gender = "man";

  // 給建構函式賦值, 非原型非實例.
  static className = "Student";
}

const personOne = new Person({ name: "Ian", age: 29 });
const studentOne = new Student({ name: "Petter", age: 17, grade: "高二" });

personOne.speakName();
studentOne.speakName();
studentOne.speakGrade();
