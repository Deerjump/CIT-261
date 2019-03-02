// Your code here.

function sum(num){
    let sum = 0;
    for(let i of num){
        sum += i;
    }
    return sum;
}
function range(num1, num2, step = 1){
    let range = [];
    let index = 0;
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);

    if(step <= 0){
        for(let i = max; i >= min; i += step){
            range[index] = i;
            index++
        } 
        return range;
    }
    
    for(let i = min; i <= max; i += step){
        range[index] = i;
        index++
    } 
    return range;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]



