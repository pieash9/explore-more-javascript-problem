const shoppingCart=[
    {name:'shoe',price :1600, quantity:3},
    {name:'shirt',price :2600, quantity:4},
    {name:'pant',price :3600, quantity:5},
    {name:'belt',price :800, quantity:2},
]

function totalCost(shoppingCart){
    let sum=0
    for(let i=0;i<shoppingCart.length;i++){
        let product = shoppingCart[i];
        let productTotal = product.price * product.quantity;
        sum = sum+productTotal;
    }
    return sum;
}
let expense = totalCost(shoppingCart);
console.log('total expense today:',expense);