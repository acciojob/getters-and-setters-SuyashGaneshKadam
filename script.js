//complete this code
class Person {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  getName() {
    return this.name;
  }

  setAge(age) {
    this._age = age;
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is studying`); 
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

const student = new Student("John", 20);
student.study(); 

const teacher = new Teacher("Jane", 35);
teacher.teach();
teacher.setAge(36);

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;