console.log("Practice")

let array = [];

//object literal
function Student(n,a,g) {
    this.name = n;
    this.age = a;
    this.gender = g;
}

let student0 = new Student("Mario",19,"Male");
let student1 = new Student("Felix",21,"Male");
let student2 = new Student("Mario",20,"Male");

array.push(student0,student1,student2)

let p = document.createElement('p');
p.textContent = "Something";
