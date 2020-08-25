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

})
describe ("appendPaymentTable", ()=>{

    beforeEach(function(){
        let tblrow = document.querySelector("#paymentTable tbody trow");
        let tbltds = document.querySelectorAll("#payment Table tbody trow td");
        let testPayment = createCurPayment();
        billAmtInput.value = "10";
        tipAmtInput.value = "2";
        appendPaymentTable(testPayment);
    })
    it("should create a new table row with 3 tds", ()=>{
        expect(tblrow.innerHTML.trim()).toBe(`<tr id="payment0"><td>$10</td><td>$2</td><td>20%</td></tr>`);;
        expect(tbltds.length).toBe(3);

    })
    it("should add input values into the table", ()=>{
        expect(tbltds.item(0).innerText).toBeEqualTo("$10");
        expect(tbltds.item(2).innerText).toBeEqualTo("$2");
        expect(tbltds.item(2).innerText).toBeEqualTo("20%");
    })
    // afterEach(function(){
    //     tblrow.innerHTML = ""
    // })
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