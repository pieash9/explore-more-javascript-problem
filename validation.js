function sum(num1,num2){
    if(typeof num1 !== 'number'|| typeof num2 !== 'number'){
        return "Please input the correct type number!!"
    }
    return num1+num2;
}
console.log(sum(29,'11'));