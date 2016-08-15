var suits = ["clubs", "diamonds", "spades", "hearts"];
var ranks = ["ace", "2", "3", "4", "5","6","7","8","9","10","jack","queen","king"];

$(function() {
  $(".btn").click(function(event) {
    suits.forEach(function(suit) {
      ranks.forEach(function(rank) {
          $("ul").append("<li>" + rank + " of " + suit + "</li>");
      });
    });
    event.preventDefault();
  });
});
