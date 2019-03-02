function reverseArray(array){
    let temp = [];
    for (let i = array.length-1; i >= 0; i--) {
        temp.push(array[i]);
    }
    return temp;
}

function reverseArrayInPlace(array){
    let length = array.length;
    for (let i = 0; i < length/2; i++) {
        let t = array[i];
        array[i] = array[length - i - 1];
        array[length - i -1] = t;
    }    
}


let array = [1, 2, 3, 4, 5, 6];
console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArray(array))
// → ["C", "B", "A"];
 let arrayValue = [1, 2, 3, 4, 5, 6];
 reverseArrayInPlace(arrayValue);
 console.log(arrayValue);
// → [5, 4, 3, 2, 1]