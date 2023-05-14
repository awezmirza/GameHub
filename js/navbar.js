// $(document).ready(function() {
//     $("#navbar-container").load("navbar.html");
//   });
  
$(document).ready(function() {
  $("#navbar-container").load("navbar.html", function() {
    // Callback function executed after the HTML file is loaded

    // Get the MenuIcon element within the loaded content
    const menuIcon = $('#MenuIcon');

    // Add a click event listener to the MenuIcon
    menuIcon.on('click', function() {
      // Toggle the "active" class on the MenuWrap element
      $('#MenuWrap').toggleClass('active');
    });
  });
});


