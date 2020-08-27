describe("Payments test",()=>{
    beforeEach(function(){
    billAmtInput.value = "10"; 
    tipAmtInput.value = "2";
    });
    
    it("should add a new payment",()=>{
        submitPaymentInfo();
        expect(paymentId).toEqual(1);
        expect(allPayments["payment1"].billAmt).toEqual('10');
        expect(allPayments['payment1'].tipAmt).toEqual('2');
        expect(allPayments['payment1'].tipPercent).toEqual(20)
    });

    it('should not add a new payment with empty input', function () {
        billAmtInput.value = '';
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0);
      });

    // it("should not accept a blank payment or tip", ()=>{
    //     billAmtInput.value = "";
    //     tipAmtInput.value = "";
    //     expect(createCurPayment()).toBe(undefined);
    // });
    it("should have positive bill amt even if tip is 0", () =>{
        tipAmtInput.value = "0";
        billAmtInput.value = "-24";
        expect(Object.keys(allPayments).length).toEqual(0);
    });

    it("should create a new table row with 4 tds", ()=>{
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
        appendPaymentTable(curPayment);

        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(curTdList.length).toEqual(4);
        expect(curTdList[0].innerText).toEqual('$10');
        expect(curTdList[1].innerText).toEqual('$2');
        expect(curTdList[2].innerText).toEqual('20%');
        expect(curTdList[3].innerText).toEqual('X');
        expect(curTdList.length).toBe(4);
    });

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    })
});