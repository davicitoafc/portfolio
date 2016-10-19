// Jquery for loading animation //

$(window).on('load', function (e) {
  setTimeout(loader, 3000);
  function loader() {
    $(".loader").fadeOut("slow");
  }

  function header() {
    $(".title_name").addClass("animated bounceInUp");
    $(".title_job").addClass("animated bounceInUp");
  }

  header();
})

// change color of nav collapsed //

$('.navbar-toggle').click(function() {
       $('#myNavbar').toggleClass('navBack');
       $('.navbar-header').toggleClass('navBack');
});

// transition effect on navbar //
var lastScrollTop = 0;


$(window).scroll(function() {

  var nav = $('.navbar');
  var nav_position = nav.offset();

  var about = $('.about_title');
  var about_position = about.offset();


  if (nav_position.top > 10) {
    $('.navbar').addClass('nav_scroll');
  } else if (nav_position.top < 10) {
    $('.navbar').removeClass('nav_scroll');
  }

// fadeIn effect for about h1 //

  var st = $(this).scrollTop();
    if (st > lastScrollTop){
    about.addClass('animated fadeInLeft');
   }

  lastScrollTop = st;

});
