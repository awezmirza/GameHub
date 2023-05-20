// We are importing the elements from navbar.html because it is not in main html  
$(document).ready(function() {
  $("#navbar-container").load("navbar.html", function() {

    const menuIcon = $('.MenuIcon');
    // Add a click event listener to the MenuIcon
    menuIcon.on('click', function() {
      // Toggle the "active" class on the MenuWrap element
      $('#MenuWrap').toggleClass('active');
      $('#gamescontainer').toggleClass('active');
    });

    const togglecoloricon = $('.togglecoloricon');
    togglecoloricon.on('click', function() {
      $('.togglecoloricon').toggleClass('onclick');
    });
  });
});
 
// -----------------------------------------------------------------------------------------






