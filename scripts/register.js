//object literal: name, address{}, tel, hours{}, pet[]
let array = [];
let divPets = document.querySelector("#pets")
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
    
    divPets.innerHTML += `
            <p>${newPet.name}</p>
        `;
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


// Para evita que JS ejecute el codigo debemos crear una fuincion que
// se ejecute cuando el documento HTML termine de cargar

function displayPetNames() {
    for (let i = 0; i < array.length; i++) {
        divPets.innerHTML += `
            <p>${array[i].name}</p>
        `;
    }
}


function init() {

    let pet1 = new Pet("Ody",3,"male","DogX","Grooming");
    let pet2 = new Pet("Zeus",5,"male","DogY","Grooming");
    let pet3 = new Pet("Coraje",1,"male","DogX","Grooming");
    array.push(pet1,pet2,pet3);
    displayPetNames();
}

window.onload = init;