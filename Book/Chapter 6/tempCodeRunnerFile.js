let rabbit = {};
rabbit.speak = function(line) {
   console.log(`The rabbit says '${line}'`);
};

rabbit.speak("I'm alive");


function calcDamage(damage, defense, toughness = 0){
   return damage * (1 - Math.min(20, Math.max( defense / 5, defense - damage / (toughness / 4 + 2)))/25);
}

function calcDamageReduction(damage, toughness){
   return damage*2 / ((toughness / 8) + 1);
}
let total = 8.1 + 20.25 + 15.19 + 7.09;

// console.log(calcDamage(6, total, 300))
// console.log(calcDamageReduction(6, 300))

console.log(calcDamage(16, 20, 600));