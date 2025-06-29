let purchaseAmount = 140;

let newAmount = purchaseAmount >= 100 ? (purchaseAmount - (purchaseAmount * 0.10)) : purchaseAmount ;

console.log(`Your Total After Discount is $${newAmount}`);