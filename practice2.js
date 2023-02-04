// let stringType= 'pieash';
// let number = 17;
// let boolean = true;

//! let constant
// let a=17;
// const b=4;
// a=1;
// b=4;
// console.log(a);
//! add,sub,mul,div
// let a=11,b=6;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// let a=5,b=5;
// console.log(a>b);
// console.log(a<b);
// console.log(a==b);
// console.log(a!=b);
// console.log(a>=b);
// console.log(a<=b);

//! condition check
// let a=6,b=5,c=4;
// if(a>b &&a>c){
//     console.log('a is Largest');
// }else if (a>b || a>c) {
//     console.log("a is larger than b or c");
// }\

//! while loop 7-19 odd print

// let i = 7;
// while (i < 20) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i++;
// }

//! array details

// let array = [1,2,3,4,5,6,7,8,9]
// for(let i=0;i<array.length;i++){
//     console.log(array[i]);
// }
// console.log(array.length);
// array[3]='change';
// console.log(array);
// array.push('add','add2');
// console.log(array);
// array.pop()
// console.log(array);

//! multiplication
// function multiplication(n1,n2,n3){
//     return n1*n2*n3;
// }
// console.log(multiplication(5,5,5));

//!  object

// let pieash={age : 23, study:'DIU',maritalStatus:'unmarried'}
// pieash.age=24;
// pieash.maritalStatus = 'married'
// pieash.study = 'Cambridge University'
// console.log(pieash);

//! feet to inch
// function feetToInch (feet){
//     return feet*12;
// }
// console.log(feetToInch(5));

//! centimeterToMeter
// function centimeterToMeter (centimeter){
//     return centimeter*0.01;
// }
// console.log(centimeterToMeter(123545));

//! paperRequirements
// function paperRequirements (n1,n2,n3){
//     let book1 = 100;
//     let book2 = 200;
//     let book3 = 300;
//     return (book1*n1)+(book2*n2)+(book3*n3);
// }
// console.log(paperRequirements (2,5,2));

//! bestFriend
// function bestFriend(array) {
//   let highestLength = array[0];
//   for (let i = 0; i < array.length; i++) {
//     let name = array[i];
//     if (name.length > highestLength.length) {
//       highestLength = name;
//     }
//   }
//   return highestLength;
// }
// let array = ["kuddus", "abul orofe bin laden hasinul abedin orofe hashimi", "dablu bin kader Khan", "nilima hasan"];
// console.log(bestFriend(array));


//! check positive number

function isPositive(numbers){
    let result = [];
for(let i=0;i<numbers.length;i++){
    let number = numbers[i];
    if(number>0){
        result.push(number);
    }else if(number<0){
        break
    }
    
}
// console.log(numbers);
return result;
}
let numbers = [1,2,3,4,5,-6,7,8,9];
console.log(isPositive(numbers));