require('./scripts.js');

function range(start, end, step) {
    if (step == null) step = 1;
    var array = [];
  
    if (step > 0) {
      for (var i = start; i <= end; i += step)
        array.push(i);
    } else {
      for (var i = start; i >= end; i += step)
        array.push(i);
    }
    return array;
  }
  
  function sum(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++)
      total += array[i];
    return total;
  }
  
  function factorial(n) {
    if (n == 0) {
      return 1;
    } else {
      return factorial(n - 1) * n;
    }
  }

  function repeat(n, action) {
    for (let i = 0; i < n; i++) {
      action(i);
    }
   }

// function filter(array, test){
//     let passed = [];
//     for(let element of array) {
//         if (test(element)) {
//             passed.push(element);
//         }
//     }
//     return passed;
// }

// function map(array, transform) {
//     let mapped = [];
//     for (let element of array) {
//         mapped.push(transform(element));
//     }
//     return mapped;
// }

function reduce(array, combine, start){
    let current = start;
    for(let element of array) {
        current = combine(current, element);
    }
    return current;
}

function characterCount(script){
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}

let biggest = null;
for (let script of SCRIPTS) {
   if (biggest == null ||
         characterCount(biggest) < characterCount(script)) {
      biggest = script;
   }
}
// console.log(biggest);

function average(array) {
   return array.reduce((a,b) => a + b) / array.length;
}

let total = 0, count = 0;
for (let script of SCRIPTS) {
   if(script.living) {
      total += script.year;
      count += 1;
   }
}
// console.log(Math.round(total/count));

function characterScript(code) {
   for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
         return code >= from && code < to;
      })){
         return script;
      }
   }
   return null;
}

// console.log(characterScript(121));

// let roseDragon = "🌹🐉";
// for (let char of roseDragon) {
//   console.log(char);
// }

function countBy(items, groupName){
   let counts = [];
   for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
         counts.push({name, count: 1});
      } else {
         counts[known].count++;
      }
   }
   return counts;
}

// console.log(countBy([1,2,3,4,5], n => n > 2));

function textScripts(text) {
   let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.name : "none";
   }).filter(({name}) => name != "none");

   let total = scripts.reduce((n, {count}) => n + count, 0);
   if (total == 0) return "No scripts found";

   return scripts.map(({name, count}) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(", ");
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));

//console.log(filter(SCRIPTS, script => script.living));
// console.log(SCRIPTS.filter(s => s.direction == "ttb"));
// let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
// console.log (map(rtlScripts, s => s.name));
// console.log(reduce([1,2,3,4], (a,b) => a + b, 0));
// console.log(SCRIPTS.reduce((a,b) => {
//     return characterCount(a) < characterCount(b) ? b : a;
// }))

// console.log(Math.round(average(
//    SCRIPTS.filter(s => s.living).map(s => s.year))));

// console.log(Math.round(average(
//    SCRIPTS.filter(s => !s.living).map(s => s.year))));


// Exercise 1 - Flatten

let arrays = [[1,2,3], [4,5],[6]];

// console.log(arrays.reduce((a,b) => {
//    return a.concat(b)
// }));

// Exercise 2 - Your Own Loop
function loop(start, test, update, body){
   for(let i = start; test(i); i = update(i)){
      body(i);
   }
}

//loop(3, n => n > 0, n => n - 1, console.log);

// Exercise 3 - Everything

function every(array, test) {
   let same = false;
   for(let element of array) {
      if (test(element)){
         same = true;
      }
      else{
         same = false;
      }
   }
   return same;
}

// console.log(every([1,3,5], n => n < 10));
// console.log(every([2,4,16], n => n < 10));
// console.log(every([], n => n < 10));

//  Exercise 4 - Dominant Writing Direction
//  Remember characterScript() and countBy()
function dominantDirection(text){
   return text;
}


// console.log(dominantDirection("Hello!"));
// console.log(dominantDirection("hey, مساء الخير"));