//! area of a triangle

// let side1 = 10;
// let side2=12;
// let side3 = 15;
// const s = (side1+side2+side3)/2;
// const area = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
// console.log(area);

//! prime number check

// function isPrime(number){
//     if(number<=1){
//         return 'Not prime number & number is 1 or less';
//     }
//     for(let i=2;i<number;i++){
//         if(number%2==0){
//             return "not prime number"
//         }
//     }
//     return 'prime number';
// }
// console.log(isPrime(11));

//! who is the tallest

// function tallestFriend(heights) {
//     let tallest = heights[0];
//     for(let i=0;i<heights.length;i++){
//         let height = heights[i];
//         if(height>tallest){
//             tallest=height;
//         }
//     }
//     return tallest;
// }

// let heights= [157 , 134 , 188 ];
// let tallest = tallestFriend(heights);
// console.log(tallest);

//! is isoscel

// function checkTriangle(side1, side2, side3) {
//   if (side1 === side2 && side1 === side3 && side2 === side3) {
//     return "No";
//   } else if (side1 === side2 || side2 === side3 || side1 === side3) {
//     return "Yes";
//   }
// }
// console.log(checkTriangle(12, 12, 11));

//! find max
// function findMax(arr) {
//   let maxNumber = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxNumber) {
//       maxNumber = arr[i];
//     }
//   }
//   return maxNumber;
// }
// let arr = [55, 10, 95];
// let maxNumberResult=findMax(arr);
// console.log(maxNumberResult);

//! sum of an array
// function finalScore ( scores ) {
//     let sum = 0;
//     for(let i=0;i<scores.length;i++){
//         let element = scores[i];
//         sum = sum+element;
//     }
//     return sum;
//     }
//     let scores =[20,  13,  37 ];
//     console.log(finalScore(scores));

//! calculate grade
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade

// function findGrade(marks){
//     if(marks >=80){
//         return "A";
//     }else if (marks>=60) {
//         return 'B';
//     }else if (marks>=50) {
//         return "C";
//     }else if (marks>=40) {
//         return "D";
//     }else if(marks <=39){
//         return "F";
//     }
//     }
//     console.log(findGrade(81));
//! who will get the cake among 2
// function JimOrDela (marksOfJim, marksOfDela) {
//     if(marksOfJim >marksOfDela){
//         return "Jim";
//     }else{
//         return "Dela"
//     }
//     }
//     console.log(JimOrDela(84,75));

//! who willl get the cake among 3

// function JimOrDelaOrChinku(marksOfJim, marksOfDela, marksOfChinku) {
//   if (marksOfJim > marksOfDela && marksOfJim > marksOfChinku) {
//     return "Jim";
//   } else if (marksOfDela > marksOfJim && marksOfDela > marksOfChinku) {
//     return "Dela";
//   } else {
//     return "Chinku";
//   }
// }
// console.log(JimOrDelaOrChinku(84,99,77));

//! calculate remainder

// function findRemainder(mod) {
//   let remainder = mod % 5;
//   return remainder;
// }
// console.log(findRemainder(119));

//! get letters
// If the first character in string s is in the set {a , e, i, o, u} then return A.
// If the first character in string s is in the set {b , c, d, f, g} then return B.
// If the first character in string s is in the set {h , j , k, l, m} then return C.
// If the first character in string s is in the set {n , p , q , r , s , t , v , w , x , y , z} then return D.

// function getLetter(s) {
//     const firstCharacter = s.slice(0, 1);
//     let letter;
//     // Write your code here
//     switch (firstCharacter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             letter = 'A';
//             break;

//         case 'b':
//         case 'c':
//         case 'd':
//         case 'f':
//         case 'g':
//             letter = 'B';
//             break;

//         case 'h':
//         case 'j':
//         case 'k':
//         case 'l':
//         case 'm':
//             letter = 'C';
//             break;

//         default:
//             letter = 'D';
//             break;
//     }
//     return letter;
// }

//! join 2 sentence

// function stringCombine(str1, str2){
//     let result = str1 + str2;
//       return result;
//     }
//     let str1 = 'I am going to be';
//     let str2 = ' an awesome web developer';
//     console.log(stringCombine(str1,str2));

//! average
// function average(arrOfMarks) {
//   let sum = 0;
//   for (let i = 0; i < arrOfMarks.length; i++) {
//     if (typeof arrOfMarks[i] !== "number") {
//       return "please input correct type";
//     }

//     let mark = arrOfMarks[i];
//     sum = sum + mark;
//     let average = sum / arrOfMarks.length;

//     let average2 = average.toFixed(2);
//     // let average3 =parseFloat( Math.round(average2));
//     return average2;
//   }

// }
// let arrOfMarks = [75.25, 65, 80, 35.45, 99.50];
// let averageOfMarks = average(arrOfMarks);
// console.log(averageOfMarks);

//! delete object
// [
//     {
//      lastName:'Mithila',
//     },'fname'
//   ]
// const deleteProperty =(arr)=>{
//     let obj = arr[0];
//     console.log(obj);
//       const result = Object.keys(obj).includes(arr[1]);
//       return result ? "Yes":"No"

//     }
// let arr1 = [ {
//     fname:'John',
//    },'lname',];
//   console.log(deleteProperty(arr1));

//! total cost
// let productsList = [
//     { name: "Dano Milk", price: 500 },
//     { name: "Taaza Tea", price: 200 },
//     { name: "Fresh Sugar", price: 300 },
//   ];
// const totalCost = (products) => {
//   for (let i = 0; i < products.length; i++) {
//     let product = products[i];
//     let productPrice = product.price;
//     console.log(productPrice);
//   }
// };

//! vowel or conconent
// const solution = (letter) => {
//     let vowels = ['a','e','i','o','u'];
//       if (vowels.includes(letter)) {
//         return "VOWEL";
//       } else return "CONSONANT";
//   };
// console.log(solution("e"));\

//! reverse string
// const reverseMaker = (word)=> {
//     let str='';
//     for(let i=word.length-1;i>=0;i--){
//         let word1 = word[i];
//         str = str+word1;
//     }
//     return str;
//   };
// console.log(reverseMaker("GeeksforGeeks"));

//! total cost

// const totalCost = (products) => {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     let productPrice = products[i].price;
//     total = total + productPrice;
//   }
//   return total;
// };
// let product = [
//   { name: "Dano Milk", price: 500 },
//   { name: "Taaza Tea", price: 200 },
//   { name: "Fresh Sugar", price: 300 },
// ];
// console.log(totalCost(product));
//!Convert temperature
// ℃=(℉-32)/1.8
// function temperatureConverter(valNum) {
//   let C, F=valNum;
//   C = (F-32)/1.8;
//   let result = Number(C.toFixed(2));
//   return result;
// }
// console.log(temperatureConverter(50));

//! find the average

function average(arrOfMarks) {
  let sum = 0;
  for (let i = 0; i < arrOfMarks.length; i++) {
    let element = arrOfMarks[i];
    sum = sum + element;
  }
  let average = sum / arrOfMarks.length;
  return (finalResult = Number(average.toFixed(2)));
}
let arrOfMarks = [100, 100, 100, 100, 100];
console.log(average(arrOfMarks));
