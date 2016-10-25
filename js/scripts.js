// modals //

$(function(){

var hitchr = $('.hitchr');
var modal = $('.modals');
var closeHitchr = $('.closes');

function fadeInModal() {
  modal.fadeIn()
}

function fadeOutModal() {
  modal.fadeOut()
}

hitchr.on('click', fadeInModal);
closeHitchr.on('click', fadeOutModal);

});


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

});

// change color of nav collapsed //

$('.navbar-toggle').click(function() {
       $('#myNavbar').toggleClass('navBack');
       $('.navbar-header').toggleClass('navBack');
});

// transition effect on navbar //
var lastScrollTop = 0;


$(window).scroll(function() {

  var nav = $('.navbar');
  var navPosition = nav.offset();

  var about = $('.about_title');
  var aboutPosition = about.offset();

  var story = $('.my_story')
  var storyPosition = story.offset();


  if (navPosition.top > 10) {
    $('.navbar').addClass('nav_scroll');
  } else if (navPosition.top < 10) {
    $('.navbar').removeClass('nav_scroll');
  }

// fadeIn effect for about h1 //

  var st = $(this).scrollTop()
    if (st > lastScrollTop){
    about.addClass('animated fadeInLeft');
    story.addClass('animated fadeInLeft');
   }

  lastScrollTop = st;

});
