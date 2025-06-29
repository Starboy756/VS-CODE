const subscribe = document.getElementById("subscribe");
const visa = document.getElementById("visa");
const masterCard = document.getElementById("masterCard");
const amex = document.getElementById("amex");
const payPal = document.getElementById("payPal");
const submit = document.getElementById("submit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");
const otherPayment = document.getElementById("otherPayment");
const otherText = document.getElementById("otherText");

// Enable/disable the text input based on "Other" selection
const paymentRadios = document.querySelectorAll('input[name="card"]');
paymentRadios.forEach(radio => {
    radio.addEventListener('change', function() {
        if (otherPayment.checked) {
            otherText.disabled = false;
            otherText.focus();
        } else {
            otherText.disabled = true;
            otherText.value = '';
        }
    });
});

submit.onclick = function() {
    if(subscribe.checked && visa.checked){
        subResult.textContent = `Your Subscribed via Visa`
    }
    else if(subscribe.checked && masterCard.checked) {
        subResult.textContent = `Your Subscribed via Master Card`
    }
    else if(subscribe.checked && amex.checked) {
        subResult.textContent = `Your Subscribed via American Express`
    }
    else if(subscribe.checked && payPal.checked) {
        subResult.textContent = `Your Subscribed via Paypal`
    }
    else if(subscribe.checked && otherPayment.checked) {
        // Use the value from the text input if available
        let otherValue = '';
        if (otherText && otherText.value.trim() !== '') {
            otherValue = otherText.value.trim();
        } else {
            // fallback to label or 'Other'
            const otherLabel = document.querySelector('label[for="otherPayment"]');
            otherValue = otherLabel ? otherLabel.textContent : 'Other';
        }
        subResult.textContent = `Your Subscribed via ${otherValue}`
    }
    else if(subscribe.checked) {
        subResult.textContent = `Your Subscribed`
    }
    else {
        subResult.textContent = `Please Select the Valid option`
    }
 }