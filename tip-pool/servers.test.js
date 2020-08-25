describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';

  });
  afterEach(function() {
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  })

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  })

  it("Should not accept a blank username", () =>{
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  })
  it('should updateServertable to #serverTable', () => {
    submitServerInfo();
    updateServerTable();

    let submittedName = document.querySelector("#server1 td");
    let submittedTip = document.querySelector("#server1 td:last-child");

  
    expect(submittedName.textContent).toEqual("Alice");
    expect(submittedTip.textContent).toEqual("$0.00");
  })

})
