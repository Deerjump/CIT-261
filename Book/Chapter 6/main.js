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

class Matrix {
   constructor(width, height, element = (x, y) => undefined) {
      this.width = width;
      this.height = height;
      this.content-[];

      for(let y = 0; y < height; y++){
         for(let x = 0; x < width; x++){
            this.content[y * width + x] = element(x,y);
         }
      }
   }
   get(x,y) {
      return this.content[y * this.width + x];
   }
   set(x, y, value) {
      this.content[y * this.width + x] = value;
   }
}

class MatrixIterator {
   constructor(matrix) {
      this.x = 0;
      this.y = 0;
      this.matrix = matrix;
   }
   next() {
      if (this.y == this.matrix.height) return {done:true};

      let value = {x: this.x,
                   y: this.y,
                   value: this.matrix.get(this.x, this.y)};
      this.x++;
      if (this.x ==this.matrix.width) {
         this.x = 0;
         this.y++;
      }
      return {value, done: false};     
   }
}