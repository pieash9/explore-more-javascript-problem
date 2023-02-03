function removeDuplicate(names){
let unique = [];
for(let i=0;i<names.length;i++){
    let name = names[i];
    if(unique.includes(name)===false){
        unique.push(name);
    }
}
return unique;
}
let names = ['abul','babul','cabul','dabul','ebul','abul','gabul','dabul','babul','nabul'];
let uniqueName = removeDuplicate(names);
console.log(uniqueName);