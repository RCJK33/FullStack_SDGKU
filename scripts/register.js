//object literal: name, address{}, tel, hours{}, pet[]
let array = [];

let input1 = document.getElementById("name");
let input2 = document.getElementById("age");
let input3 = document.getElementById("gender");
let input4 = document.getElementById("txtService");

function getForm() {
    console.log("Name: " + input1.value);
    console.log("Age: " + input2.value);
    console.log("Gender: " + input3.value);
    console.log("Service: " + input4.value);
    let newPet = new Pet(input1.value,input2.value,input2.value,"DogX",input4.value);
    array.push(newPet);
    displayPetCards()
    clearInputs();
}

function Pet(name,age,gender,breed,service) {
    this.name = name
    this.age = age
    this.gender = gender
    this.breed = breed
    this.service = service
}

function clearInputs() {
    input1.value = ""
    input2.value = ""
    input3.value = ""
    input4.value = ""
}

const alertDiv = document.getElementById("alertDiv");
function alertAdd() {
    alertDiv.innerHTML = `<div class="alert">
    Congratulations, a pet was added successfully!
    </div>`;
}

// Para evita que JS ejecute el codigo debemos crear una fuincion que
// se ejecute cuando el documento HTML termine de cargar



function init() {

    let pet1 = new Pet("Ody",3,"male","DogX","grooming");
    let pet3 = new Pet("Coraje",1,"male","DogX","nail");
    let pet2 = new Pet("Zeus",5,"male","DogY","nail");
    array.push(pet1,pet2,pet3);
    displayPetCards();
}

window.onload = init;