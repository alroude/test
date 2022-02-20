const add = function(...numbers) {
    sum = 0;
    for(let i = 0; i <numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log('========== SUM OF NUMBERS IN ARRAY ==========')
console.log(add(12, 3, 5));
console.log(add(12, 30, 50, 100));
console.log(add(1000000001, 1000000002, 1000000003, 1000000004, 1000000005));


const divide = function(...numbers) {
    sum = 0;
    for(let i = 0; i <numbers.length; i++) {
        sum += numbers[i] / numbers.length;
    }
    return sum.toFixed(2);
}
console.log('========== DIVISION OF NUMBERS IN ARRAY ==========')
console.log(divide(12, 3, 5));
console.log(divide(12, 30, 50, 100));
console.log(divide(11, 30, 50, 100, 48, 52, 10));

console.log('========== SQUARE ROOT OF  A NUMBER ==========')

function squareRoot(num) {
    const total = num * num;
    console.log(total);
}

squareRoot(5);
squareRoot(6);
squareRoot(7);
squareRoot(8);

console.log('========== GREETING ==========')

const names = ['Nimrod', 'Allan', 'Mary', 'Jack', 'Peter'];

const greeting = function(arr) {
    for(let i = 0; i < arr.length; i++){

        console.log(`Hello ${arr[i]}, how are you today?`);
    }
}

greeting(names);


// function add(n) {
//     let sum = 0;
//     for(let i = 1; i <= n; i++) {
//         sum = sum + i;
//     }
//     return sum;
// }

// console.log(add(5));

let numbers = [10, 20, 30, 40, 50];
