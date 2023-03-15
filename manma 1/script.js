
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
$('.carousel').carousel({
  interval: 2000 // set the interval in milliseconds
});

// Add this script to make the slides enlarge on hover
$('.carousel-item').hover(function() {
  $(this).addClass('enlarge');
}, function() {
  $(this).removeClass('enlarge');
});

