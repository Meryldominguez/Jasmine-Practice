window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});
var amountInput = document.getElementById("loan-amount").value;
var yearsInput = document.getElementById("loan-years").value;
const rateInput = document.getElementById("loan-rate").value;

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  amountInput.value = 100000;
  yearsInput.value = 30;
  rateInput.value = .02967;
  update()
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let i = rate/12;
  let P = amount;
  let n = years*12;
  var monthly = document.getElementById("monthly-payment").innerText = (P
    * i)/(1-((1+i)**n))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {

}
