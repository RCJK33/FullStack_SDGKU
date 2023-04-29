function init() {

    let pet1 = new Pet("Ody",3,"male","DogX","grooming");
    let pet2 = new Pet("Coraje",1,"male","DogX","nail");
    let pet3 = new Pet("Zeus",5,"female","DogY","nail");
    let pet4 = new Pet("Cheese",7,"female","DogY","shower");
    let pet5 = new Pet("Rouf",2,"male","DogY","shower");
    let pet6 = new Pet("Jr",4,"male","DogY","grooming");
    let pet7 = new Pet("Garou",10,"female","DogY","vaccine");
    let pet8 = new Pet("Hop",8,"male","DogY","vaccine");
    array.push(pet1,pet2,pet3,pet4,pet5,pet6,pet7,pet8);
    searchPet();
}

window.onload = init;