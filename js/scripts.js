// modals //

$(function(){

// Hitchr Modal //

var hitchr = $('.hitchr');
var modal1 = $('.modal1');
var closeHitchr = $('.closes');

function fadeInModal1() {
  modal1.fadeIn();
}

function fadeOutModal1() {
  modal1.fadeOut()
}

hitchr.on('click', fadeInModal1);
closeHitchr.on('click', fadeOutModal1);

// Crowdfunder Modal //

var crowdfunder = $('.crowdfunder');
var modal2 = $('.modal2');
var closeCrowdFunder = $('.closes');

function fadeInModal2() {
  modal2.fadeIn();
}

function fadeOutModal2() {
  modal2.fadeOut()
}

crowdfunder.on('click', fadeInModal2);
closeCrowdFunder.on('click', fadeOutModal2);


// Porfolio Site Modal //

var portfolio = $('.portfolio');
var modal3 = $('.modal3');
var closePortfolio = $('.closes');

function fadeInModal3() {
  modal3.fadeIn();
}

function fadeOutModal3() {
  modal3.fadeOut()
}

portfolio.on('click', fadeInModal3);
closePortfolio.on('click', fadeOutModal3);

});


// Jquery for loading animation //

$(window).on('load', function (e) {
  setTimeout(loader, 3000);
  function loader() {
    $(".loader").fadeOut("slow");
  }

  // function header() {
  //   $(".title_name").addClass("animated bounceInUp");
  //   $(".title_job").addClass("animated bounceInUp");
  // }

// header();

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

// animation for header //

var $header_name = $('.title_name')
var $header_job = $('.title_job')

$header_name.waypoint(function() {
  $(this.element).addClass("animated bounceInUp fade");
}, {
  offset: '90%'
});

$header_job.waypoint(function() {
  $(this.element).addClass("animated bounceInUp fade");
}, {
  offset: '90%'
});


// fade in for projects //

var $projectsTitle = $('.projects_title')

$projectsTitle.waypoint(function() {
       $(this.element).addClass('animated fadeInUp fade');
   }, {
       offset: '70%'
   });



// fadeIn effect for about section //

about.waypoint(function() {
  about.addClass('animated fadeInLeft fade');
  story.addClass('animated fadeInLeft fade');
}, {
    offset: '70%'
});

//   var st = $(this).scrollTop()
//     if (st > lastScrollTop){
//     about.addClass('animated fadeInLeft');
//     story.addClass('animated fadeInLeft');
//    }
//
// lastScrollTop = st;

});
