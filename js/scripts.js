

// Jquery for loading animation //

$(window).on('load', function (e) {
  setTimeout(loader, 3000);
  function loader() {
    $(".loader").fadeOut("slow");
  }
})

// change color of nav collapsed //

$('.navbar-toggle').click(function() {
       $('#myNavbar').toggleClass('navBack');
       $('.navbar-header').toggleClass('navBack');
});

// transition navbar //

$(window).scroll(function() {

  var nav = $('.navbar');
  var nav_position = nav.offset();


  if (nav_position.top > 10) {
    $('.navbar').addClass('nav_scroll');
  } else if (nav_position.top < 10) {
    $('.navbar').removeClass('nav_scroll');
  }
  
});
