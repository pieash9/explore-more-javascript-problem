//! area of a triangle

let side1 = 10;
let side2=12;
let side3 = 15;
const s = (side1+side2+side3)/2;
const area = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
// console.log(area);

//! prime number check

function isPrime(number){
    if(number<=1){
        return 'Not prime number & number is 1 or less';
    }
    for(let i=2;i<number;i++){
        if(number%2==0){
            return "not prime number"
        }
    }
    return 'prime number';
}
console.log(isPrime(11));