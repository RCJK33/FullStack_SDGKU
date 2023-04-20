function displayPetCards() {
    let card = "";
    const div = document.getElementById('pets')
    // Travel the pets array
    for (let i = 0; i < array.length; i++) {
        // Create the template
        if (array[i].service == "grooming") {
            color = "#8cc5fa"
        }
        if (array[i].service == "vaccine") {
            color = "#c75e51"
        }
        if (array[i].service == "nail") {
            color = "#62df62"
        }
        card += `
        <div class="pet" style="background-color:${color}">
            <h6>${array[i].name}</h6>
            <p>${array[i].age}</p>
            <p>${array[i].gender}</p>
            <p>${array[i].service}</p>
        </div>`;
    }
    // Insert the template into the html
    div.innerHTML = card;
    updateCountPets();
}

function updateCountPets() {
    const divC = document.getElementById('petCount');
    let countDiv = `
    <div class="petsCount">
        <p>There are ${array.length} doggies</p>
    </div>`;
    
    divC.innerHTML = countDiv;
}

function displayTabla() {
    
}

/* function displayPetNames() {
    const divPets = document.querySelector("#pets")
    for (let i = 0; i < array.length; i++) {
        divPets.innerHTML += `
            <p>${array[i].name}</p>
        `;
    }
}
 */