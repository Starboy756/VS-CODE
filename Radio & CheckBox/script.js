const subscribe = document.getElementById("subscribe");
const visa = document.getElementById("visa");
const MasterCard = document.getElementById("masterCard");
const amex = document.getElementById("amex");
const payPal = document.getElementById("payPal");
const submit = document.getElementById("submit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");
const otherPayment = document.getElementById("other");

submit.onclick = function() {
    if(subscribe.checked && visa.checked){
        subResult.textContent = `Your Subscribed via Visa`
    }
    else if(subscribe.checked && MasterCard.checked) {
        subResult.textContent = `Your Subscribed via Master Card`
    }
    else if(subscribe.checked && amex.checked) {
        subResult.textContent = `Your Subscribed via American Express`
    }
    else if(subscribe.checked && payPal.checked) {
        subResult.textContent = `Your Subscribed via Paypal`
    }
    else if(subscribe.checked && otherPayment.checked) {
        subResult.textContent = `Your Subscribed via ${otherPayment.value}`
    }
    else if(subscribe.checked) {
        subResult.textContent = `Your Subscribed`
    }
    else {
        subResult.textContent = `Please Select the Valid option`
    }
 }