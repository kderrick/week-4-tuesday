// business logic
function Contact(firstName,lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

function Address(variety, street, city, state) {
  this.variety = variety;
  this.street = street;
  this.city = city;
  this.state = state;
}

Address.prototype.fullAddress = function() {
  return this.variety + ": " + this.street + ", " + this.city + ", " + this.state;
}

// user interface logic
$(document).ready(function() {
  $("#add-address").click(function() {
     $("#new-addresses").append('<div class="plus-address">' +
                                  '<div class="new-address">' +
                                 '<div class="form-group">' +
                                   '<label for="new-variety">Address Variety</label>' +
                                   '<input type="text" class="form-control new-variety">' +
                                 '</div>' +
                                  '<div class="form-group">' +
                                    '<label for="new-street">Street</label>' +
                                    '<input type="text" class="form-control new-street">' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                    '<label for="new-city">City</label>' +
                                    '<input type="text" class="form-control new-city">' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                    '<label for="new-state">State</label>' +
                                    '<input type="text" class="form-control new-state">' +
                                  '</div>' +
                                  '</div>' +
                                '</div>');

  });
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".new-address").each(function() {
      var inputtedVariety = $(this).find("input.new-variety").val();
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var newAddress = new Address(inputtedVariety, inputtedStreet, inputtedCity, inputtedState);
      newContact.addresses.push(newAddress);
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
      $( ".contact" ).hover(
        function() {
        $( this ).addClass( "hover" );
      }, function() {
        $( this ).removeClass( "hover" );
      }
    );
    });
    $(".plus-address").fadeOut("fast");
    $("input").val("");
  });
});
