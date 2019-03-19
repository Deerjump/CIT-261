class Rabbit {
   constructor(type) {
      this.type = type;
   }
   speak(line){
      console.log(`The ${this.type} rabbit says '${line}'`);
   }
}

// rabbit.speak("I'm alive");

// let ages = {
//    Boris: 39,
//    Liang: 22,
//    Júlia: 62,
// };

// console.log(`Júlia is ${ages["Júlia"]}`);
// console.log("Is Jack's age known?", "Jack" in ages);
// console.log("Is toString's age known?", "toString" in ages);

// console.log("toString" in Object.create(null));

let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);

let sym = Symbol("name");
console.log(sym == Symbol("name"));

Rabbit.prototype[sym] = 55;
// console.log(blackRabbit[sym]);