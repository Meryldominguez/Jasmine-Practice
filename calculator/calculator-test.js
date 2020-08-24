
it('should calculate the monthly rate correctly', function () {
  let testAmount1 = {
    amount: 500000,
    years: 15,
    rate:0.03593654,
  }
  let testAmount2 = {
    amount: 300000,
    years: 10,
    rate:0.033654,
  }
  expect(calculateMonthlyPayment(testAmount1).toEqual())
});


it("should return a result with 2 decimal places", function() {
  // ..
});

/// etc
