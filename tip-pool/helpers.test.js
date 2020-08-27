describe ("utility functions for use in payments.js and servers.js", function(){
    beforeEach(function(){
        billAmtInput.value = "10"; 
        tipAmtInput.value = "2";
        submitPaymentInfo()
    });
    it ("should convert bill and tip amount into percent", function(){
        expect(calculateTipPercent(10,
        2)).toEqual(20)
    });
    it("should sum up tips, bill amount", function(){
        expect(sumPaymentTotal("billAmt")).toEqual(10);
        expect(sumPaymentTotal("tipAmt")).toEqual(2);
        billAmtInput.value = "8"; 
        tipAmtInput.value = "2";
        submitPaymentInfo();
        expect(sumPaymentTotal("billAmt")).toEqual(18);
        expect(sumPaymentTotal("tipAmt")).toEqual(4);
    });
    it("should fill a tr with a td", function(){
        let newTr = document.createElement('tr');
    
        appendTd(newTr, "test");
        
        expect(newTr.firstChild.innerHTML).toEqual("test");
        expect(newTr.childElementCount).toEqual(1)

    });
    it("should add a button that deletes the current row", function(){
        let newTr = document.createElement('tr');
    
        appendDeletebtn(newTr);

        expect(newTr.firstChild.textContent).toEqual("X");
        expect(newTr.children.length).toEqual(1);

    })

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
})