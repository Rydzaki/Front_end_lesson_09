// // function declaration

function power(base, p){
    const result = base **p;
return result;
}
// console.log(power(12,2));
// console.log(power(12,3));
// console.log(power(12,4));
// console.log(power(12,10));
// console.log('====================================')

// //function expression

// const sum = function(value1, value2){
//     return value1 + value2;
// }
// console.log(sum(12,43))

// //arrow function

// const length = (message) => {return message.length} // const length = message => message.length;
// console.log(length('hello world'));



function max(number_1, number_2){
    if(number_1 > number_2){ // return num1 > num2 ? num1 : num2
        return number_1
    } else{return number_2}
    return max;
}
console.log(max(12, 20));
console.log(max(25, 12));

console.log('--------------------------------')

function mult (n1, n2, n3){
    return n1*n2*n3;
}
console.log(mult(3, 10, 2));

console.log('======================')

function mult (... args){
    res = 1;
    for(elem of args){
        res *= elem       
    }
    return res;
}
console.log(mult(3, 10, 2));


// function avg(... args){
//     console.log(args);

// }
// avg(12, 5, 3, 7, 5);

function avg(... args){
    let sum = 0;
    for(elem of args){
        sum += elem
    }
    return sum/ args.length;
}
console.log(avg(12, 5, 3, 7, 5));

console.log('======================')

function max(... args){
    let maxi = args[0];
    for(n of args){
        maxi =  n > maxi ? n : maxi
    }
    return maxi;
}
console.log(max(12, 20, 13, 40));

console.log('======================')


function fun(arr){
    for(n of arr)
    console.log(n);
}
fun([1, 2, 3, 4, 5]);
console.log('======================')

function handler(arr){
    for(let i = 0; i < arr.length; i++){
       arr[i] = arr[i] >= 0 ? arr[i] : -arr[i];
    }
    return arr;
}
const sourseArr = [1, -5, -3, 8, 5, -5];
console.log(handler(sourseArr));




