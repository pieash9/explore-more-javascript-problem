let phones = [
  { name: "Samsung", storage: "64GB", price: 32000, color: "black",camera:108 },
  { name: "iphone", storage: "64GB", price: 82000, color: "black",camera:48 },
  { name: "Xiomi", storage: "64GB", price: 22000, color: "Red",camera:72 },
  { name: "Oppo", storage: "64GB", price: 20000, color: "black",camera:200 },
  { name: "HTC", storage: "64GB", price: 18000, color: "black",camera:12 },
  { name: "Nokia", storage: "64GB", price: 52000, color: "black",camera:48 },
];
function highestCamera(phones) {
    let highestCamera = phones[0];
    for (let i = 0; i < phones.length; i++) {
      let phone = phones[i];
      if (phone.camera > highestCamera.camera) {
        highestCamera = phone;
      }
    }
    return highestCamera;
  }
  
  console.log(highestCamera(phones));

function cheapest(phones) {
  let cheapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    let phone = phones[i];
    if (phone.price < cheapest.price) {
      cheapest = phone;
    }
  }
  return cheapest;
}

// console.log(cheapest(phones));
