function displayPetCards() {
    var cards = "";
    var rows ="";
    // Travel the pets array
    for (let i = 0; i < array.length; i++) {
        // Create the template
        if (array[i].service == "grooming") {
            color = "#93e1a0"
        }
        if (array[i].service == "vaccine") {
            color = "#f0b0b0"
        }
        if (array[i].service == "nail") {
            color = "#d2b2f4"
        }
        if (array[i].service == "shower") {
            color = "#9ad4ea"
        }
        cards += `
        <div class="pet" style="background-color:${color}">
            <div class="card-name"><h6>${array[i].name}</h6></div>
            <div class="card-info"><p>Age :${array[i].age}</p></div>
            <div class="card-info"><p>Gender: ${array[i].gender}</p></div>
            <div class="card-info"><p>Service: ${array[i].service}</p></div>       
            <div class="btn-content-card"><button class="btn btn-card" type="button" onclick="deletePet(${i});">Delete</button></div>
        </div>`;
        rows += `
            <tr class="tr" style="background-color:${color}">
                
                <td class="table-rows">${i+1}</td> 
                <td class="table-rows">${array[i].name}</td>
                <td class="table-rows">${array[i].age}</td>
                <td class="table-rows">${array[i].gender}</td>
                <td class="table-rows">${array[i].service}</td>
                <td class="table-rows"><button class="btn btn-delete" type="button" onclick="deletePet(${i});">Delete</button></td>
                    
            </tr>
        `;
    }
    // Insert the template into the html
    div.innerHTML = cards;
    divTR.innerHTML = rows;
    updateCountPets();
}

function updateCountPets() {
    const divC = document.getElementById('petCount');
    let countDiv = `
    <div class="petsCount">
        <p>There are ${array.length} doggies</p>
    </div>`;
    
    divC.innerHTML = countDiv;
    clearInputs();
}