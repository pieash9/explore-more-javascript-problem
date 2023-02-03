const shoppingCart=[
    {name:'shoe',price :1600},
    {name:'shirt',price :2600},
    {name:'pant',price :3600},
    {name:'belt',price :800},
]

function totalCost(shoppingCart){
    let sum=0
    for(let i=0;i<shoppingCart.length;i++){
        let product = shoppingCart[i];
        sum = sum+product.price;
    }
    return sum;
}
let expense = totalCost(shoppingCart);
console.log('total expense today:',expense);