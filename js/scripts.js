// modals //

$(function(){


// Hitchr Modal //

var hitchr = $('.hitchr');
var modal1 = $('.modal1');
var closeHitchr = $('.closes');

// Crowdfunder Modal //

var crowdfunder = $('.crowdfunder');
var modal2 = $('.modal2');
var closeCrowdFunder = $('.closes');


// Porfolio Site Modal //

var portfolio = $('.crowdfunder');
var modal3 = $('.modal3');
var closePortfolio = $('.closes');


function fadeInModal() {
  modal1.fadeIn();
}

function fadeOutModal() {
  modal1.fadeOut()
}

hitchr.on('click', fadeInModal);
closeHitchr.on('click', fadeOutModal);

crowdfunder.on('click', fadeInModal);
closeCrowdFunder.on('click', fadeOutModal);

hitchr.on('click', fadeInModal);
closePortfolio.on('click', fadeOutModal);

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
var lastScrollTop = 100;


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

  var $animation_elements = $('.animation-element');
  var $window = $(window);





// fadeIn effect for about section //

  var st = $(this).scrollTop()
    if (st > lastScrollTop){
    about.addClass('animated fadeInLeft');
    story.addClass('animated fadeInLeft');
   }

lastScrollTop = st;

});
