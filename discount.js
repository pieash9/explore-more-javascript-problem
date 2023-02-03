//! Ticket discount


function discount(ticketQuantity){
const F100T = 100;
const S100T = 90;
const restTicket = 70;
if(ticketQuantity <=100){
    let ticketPrice=ticketQuantity* F100T;
    return ticketPrice;
}else if(ticketQuantity <=200){
    let f100TPrice=F100T*100;
    let restTicketPrice =(ticketQuantity-100)*S100T;
    return restTicketPrice; 
}else{
    let F100TPrice = F100T *100;
    let S100TPrice = S100T*100;
    let restTicketPrice2 = ((ticketQuantity-200)*70)+F100TPrice+S100TPrice;
    return restTicketPrice2;
}
}
console.log(discount(220));