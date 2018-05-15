$("#closedMenuButton").click(function() {
  // $("nav").toggle();
  $("nav").toggleClass("hidden animated slideInRight");
});

$("#openMenuButton").click(function () {
  $("nav").toggleClass("hidden animated slideInLeft");
})
