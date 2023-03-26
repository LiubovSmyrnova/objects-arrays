const me = {
    firstName: "Liubov",
    lastName: "Smyrnova",
    age:26,
    job: "animal keeper",
    pets:5,

    getSummary: function () {
    return `My name is ${this.firstName} ${this.lastName} and I'm ${this.age} ${this.job}. `;
    }
    
   

}
console.log(me.getSummary());
const amountOfPets = this.pets >= 0 ? "I have pets" : "I do not have a pet";
console.log (amountOfPets);