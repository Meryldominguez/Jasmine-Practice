describe ("createcurrentPayment", ()=>{
    it("should not accept a blank payment or tip", ()=>{
        billAmtInput.value = "";
        tipAmtInput.value = "";
        expect(createCurPayment()).toBe(undefined);
    })
    it("should have positive bill amt even if tip is 0", () =>{
        tipAmtInput.value = "0";
        billAmtInput.value = "24";
        expect(createCurPayment()).not.toBe(undefined);
        billAmtInput.value = "-24";
        expect(createCurPayment()).toBe(undefined);
    })

});

describe ("appendPaymentTable", ()=>{
    
    // beforeEach(function(){
        billAmtInput.value = "10";
        tipAmtInput.value = "2";
        let testPayment = createCurPayment();
        appendPaymentTable(testPayment);
        const tblrow = document.querySelector("#payment0");
        const tbltds = document.querySelectorAll("#payment0 td");  
    // });
    it("should create a new table row with 3 tds", ()=>{
        expect(tblrow.innerHTML.trim()).toBe(`<td>$10</td><td>$2</td><td>20%</td>`);
        expect(tbltds.length).toBe(3);

    });
    it("should add input values into the table", ()=>{
        expect(tbltds.item(0).textContent).toBe("$10");
        expect(tbltds.item(1).innerText).toBe("$2");
        expect(tbltds.item(2).innerText).toBe("20%");
    });
    // afterEach(function(){
    //     tblrow.innerHTML = ""
    // });
})
describe("updateSummary", ()=>{
    beforeEach(function(){
        billAmtInput.value = "10";
        tipAmtInput.value = "2";
        let testPayment = createCurPayment();
    });

    it("add submitted values to the 3 tds in #summaryTable", ()=>{
    let tblrow = document.querySelectorAll("#summaryTable tbody tr td");

    })
});