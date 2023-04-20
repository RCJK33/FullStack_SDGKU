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


document.write(`
    <div class="student">
        <p>Name: ${student2.name}</p>
        <p>Age: ${student2.age}</p>
        <p>Country: ${student2.address.country}</p>
    </div>
`)