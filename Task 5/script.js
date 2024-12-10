// create function Return a Boolean if a number is divisible by 10

function Boolean(x){
    if (x % 10 == 0){
        return true
    }
    else {
        return false
    }
}
console.log(Boolean(20))
console.log(Boolean(15))

// Create a function that finds the maximum number in an array

function FindMax(arr) {
    let max = arr[0]; 
    for (let x of arr) {
        if (x > max) {
            max = x; 
        }
    }
    return max;
}
Array = [5, 17, 9, 99, 3, 0, 45, 70];
console.log(FindMax(Array)); 

// Create a function that reverses an array

function Reverse(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed[reversed.length] = arr[i]; 
    }
    return reversed;
}
Array = [1, 2, 3, 4, 5]
console.log(Reverse(Array)); 

