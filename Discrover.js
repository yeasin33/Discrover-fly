
const firstClassMinusBtn = document.querySelector('.first-classMinus');
const firstClassPlusBtn = document.querySelector('.first-classPlus');
const economyMinusBtn = document.querySelector('.economy-minus');
const economyPlusBtn = document.querySelector('.economy-plus');
const firstClassTicket = document.querySelector('.first-ticket-price');
const economyTicket = document.querySelector('.economy-ticket-price');

// First Class Plus Button Click Event
firstClassPlusBtn.addEventListener('click', function () {
    increaseSpinner(firstClassTicket);
    grandTotal();
});

// First Class Minus Button Click Event
firstClassMinusBtn.addEventListener('click', function () {
    decreaseSpinner(firstClassTicket);
    grandTotal();
});

// Economy Plus Button Click Event
economyPlusBtn.addEventListener('click', function () {
    increaseSpinner(economyTicket);
    grandTotal();
});

// Economy Minus Button Click Event
economyMinusBtn.addEventListener('click', function () {
    decreaseSpinner(economyTicket);
    grandTotal();
});

// Increase 
function increaseSpinner(itemPlus) {
    itemPlus.value++;
    itemPlus.value * 150;
}
// Decrease 
function decreaseSpinner(itemMinus) {
    let yeasin = Number(itemMinus.value);

    if (!yeasin ||yeasin < 0) {
        itemMinus.classList.add('error');
    } else {
        itemMinus.value--;
        itemMinus.value * 150;
    }
}

//Total ticket Price Count
function grandTotal() {
    let FirstClassPrice = firstClassTicket.value * 150;
    let EconomyPrice = economyTicket.value * 100;
    let subTotal = (document.querySelector('.sub-total').textContent = FirstClassPrice + EconomyPrice);
    let userSubTotal = (document.querySelector('.userSubtotal').textContent = subTotal);
    let vat = (document.querySelector('.vat').textContent = Math.round(subTotal * 0.1));
    let userVat = (document.querySelector('.userVat').textContent = vat);
    let total = (document.querySelector('.total').textContent = subTotal + vat);
    let userTotal = (document.querySelector('.userTotal').textContent = total);
}

// Booking conform block de
document.querySelector('.book-now').addEventListener('click', function () {
    const fryingFrom = document.querySelector('.flying-from').value;
    const fryingTo = document.querySelector('.flying-to').value;
    const fryingDeparture = document.querySelector('.flying-departure').value;
    const fryingReturn = document.querySelector('.flying-return').value;
    const firstClassTicket = document.querySelector('.first-ticket-price').value;
    const economyTicket = document.querySelector('.economy-ticket-price').value;

    if (!fryingFrom || !fryingTo || !fryingDeparture || !fryingReturn || !firstClassTicket || !economyTicket) {
        document.querySelector('.warning').textContent = '⚠ Please fill all filds 😣';
    } else {
        document.querySelector('.booking-form').style.display = 'none';
        document.querySelector('.booking-details').style.display = 'block';
        document.querySelector('.user-flying-from').textContent = fryingFrom;
        document.querySelector('.user-flying-to').textContent = fryingTo;
        document.querySelector('.user-departure-date').textContent = fryingDeparture;
        document.querySelector('.user-return-date').textContent = fryingReturn;
        document.querySelector('.user-first-class').textContent = firstClassTicket;
        document.querySelector('.user-economy-class').textContent = economyTicket;
        grandTotal();
    }
});
