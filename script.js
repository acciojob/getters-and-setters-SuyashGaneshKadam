//complete this code
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  setAge(age) {
    this.age = age;
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

const person = new Person("John", 30);

const student = new Student("Jake", 20);
student.study(); 

const teacher = new Teacher("Jane", 35);
teacher.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;