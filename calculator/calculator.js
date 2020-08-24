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
  var amount = document.getElementById("loan-amount").value = 100000;
  var years = document.getElementById("loan-years").value = 30;
  const rate = document.getElementById("loan-rate").value = .02967;
  let initial = {
    amount, years, rate
  }
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
updateMonthly(
  calculateMonthlyPayment(
    getCurrentUIValues()
  )
);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(data) {
  let i = data.rate/12;
  let P = data.amount;
  let n = data.years*12;
  let monthly = ((P * i)/(1 - ((1+i)**(-n))));

  return `$${(Math.floor(monthly*100))/100}`
 
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText = monthly
}
