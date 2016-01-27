describe ("movieTicket", function (){
  it("Will create a new movieTicket with the given specifications", function() {
    var testTicket = new movieTicket("Batman", "Evening", "Adult");
    expect(testTicket.movie).to.equal("Batman");
    expect(testTicket.time).to.equal("Evening");
    expect(testTicket.age).to.equal("Adult");
  });

  it("will add ticket price to all movie tickets", function() {
    var testTicket = new movieTicket ("Batman", "Evening", "Adult");
    expect(testTicket.ticketPrice()).to.equal("Your Adult ticket to Batman at Evening will be " + 20);
  });
});

describe('getPrice', function() {
  it("will add 5 for new releases, evening movies, and if adult", function() {
    expect(getPrice("Batman", "Evening", "Adult")).to.equal(20);
  });
});
