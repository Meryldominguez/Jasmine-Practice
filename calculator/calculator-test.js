  let testAmount1 = {
    amount: 500000,
    years: 15,
    rate:0.03593654,
  }
  let testAmount2 = {
      amount: 10043,
      years: 8,
      rate: .058
  };

it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment(testAmount1)).toEqual(3597.45);
  expect(calculateMonthlyPayment(testAmount2)).toEqual(131.00)
});


it("should return a result with 2 decimal places", function() {
  expect((calculateMonthlyPayment(testAmount1)*100)%1).toEqual(0);
  expect((calculateMonthlyPayment(testAmount2)*100)%1).toEqual(0);
});

/// etc
