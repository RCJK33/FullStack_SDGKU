let input_name = document.getElementById("name");
let input_age = document.getElementById("age");
let input_gender = document.getElementById("gender");
let input_txtService = document.getElementById("txtService");
let divAlert = document.getElementById("alert");

function getForm() {
    var name = input_name.value;
    var age = input_age.value;
    var gender = input_gender.value;
    var txtService = input_txtService.value;

    var errcount = 4;

    if (name == '') {
        input_name.classList.add('error');
        errcount -= 1;
    }
    if (age == '') {
        input_age.classList.add('error');
        errcount -= 1;
    }
    if (gender == '') {
        input_gender.classList.add('error');
        errcount -= 1;
    }
    if (txtService == '') {
        input_txtService.classList.add('error');
        errcount -= 1;
    }
    
    if (errcount == 4) {
        let newPet = new Pet(name,age,gender,"DogX",txtService);
        array.push(newPet);
        alertGreenF()
        displayPetCards()
    }else{
        console.log("asdas")
        alertRedF();
    }
}

function clearInputs() {
    input_name.value = ""
    input_age.value = ""
    input_gender.value = ""
    input_txtService.value = ""
}


function alertRedF() {
    divAlert.innerHTML = `
    <div class="alertRed">Please enter all data</div>`;
}
function alertGreenF() {
    divAlert.innerHTML = `
    <div class="alertGreen">Dog added successfully</div>`;
    input_name.classList.remove('error');
    input_age.classList.remove('error');
    input_gender.classList.remove('error');
    input_txtService.classList.remove('error');
}