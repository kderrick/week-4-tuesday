function movieTicket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}


var getPrice = function(movie, time, age) {
  var price = 5;

    if (movie === "Batman"){
      price += 5;
    }else {
      price += 0;
    } if (time === "Evening") {
      price += 5;
    }else {
      price += 0;
    }
    if (age === "Adult") {
      price += 5;
    }else {
      price += 0;
    }
    return price;
};




movieTicket.prototype.ticketPrice = function() {
  return "Your " + this.age + " ticket to " + this.movie + " at " + this.time + " will be " + getPrice(this.movie, this.time, this.age);
};
// user interface logic

$(document).ready(function() {
  $("form#new-ticket").submit(function(event) {
  event.preventDefault();

  var inputtedMovie = $("input#new-movie").val();
  var inputtedTime = $("input#new-time").val();
  var inputtedAge = $("input#new-age").val();
  var newMovieTicket = new movieTicket(inputtedMovie, inputtedTime, inputtedAge);

    $("ul#tickets").append("<li><span class='tickets'>" + newMovieTicket.ticketPrice() + "</span></li>");
    $('input').val("");
  });
});
