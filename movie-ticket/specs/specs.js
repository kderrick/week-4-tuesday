describe ("movieTicket", function (){
  it("Will create a new movieTicket with the given specifications", function() {
    var testTicket = new movieTicket("Batman", "Matinee", "Adult");
    expect(testTicket.movie).to.equal("Batman");
    expect(testTicket.time).to.equal("Matinee");
    expect(testTicket.age).to.equal("Adult");
  });
});
