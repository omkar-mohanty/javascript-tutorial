class Animal {
    name = 'animal';
    showAnimal(){
        console.log('Animal');
    }
    constructor() {
      this.showAnimal();
    }
  }
  
  class Rabbit extends Animal {
    name = 'rabbit';
    showAnimal(){
        console.log('rabbit');
    }
  }
  
  new Animal(); // animal
  new Rabbit(); // animal