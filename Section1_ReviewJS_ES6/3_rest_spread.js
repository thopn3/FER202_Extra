function sum1(numbers=[]){
    let total = 0;
    for(let i=0; i<numbers.length; i++){
        total += numbers[i];
    }
    return total;
}

const arr1 = [2, 3, 5];
console.log(sum1(arr1));

// 1. Tham so rest
function sum2(...numbers){ // rest parameter
    let total = 0;
    for(let element of numbers){
        total += element;
    }
    return total;
}

console.log(sum2(2, 3, 5));
console.log(sum2(6, 4, 10, 10));

// Truyen 1 mang vao ham co tham so rest
const arr2 = [7, 3, 5];
console.log(sum2(...arr2)); // Su dung toan tu spread (rai)

// 2. Toan tu Spread
const mang1 = ["Hello", 3.5, true];
const mang2 = [1, 2, 3];
const mang3 = [...mang1, "World", "A", ...arr2, 10];
console.log(mang3);