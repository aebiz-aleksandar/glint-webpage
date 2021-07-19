  var navbarButton = $('.navbar-button');
  var closeNavbar = $('#close-nav');
  var navContainer = $('.navbar-container');
  var scrollBtn = $('.scroll-track');
  var aboutSection = $('#aboutSection');
  var count = $('.count');
  var scrollToTop = $('#scroll-to-top');
  var navbarLink = $('.main-header .navbar .navbar-container .nav li a');
  var preloader = $('#preloader');
  var loader = $('#loader');

  //Load Window
  $(window).on('load', function() {
    preloader.fadeOut('slow', function() {
      loader.delay(300).fadeOut('slow');
    });
  });



  //Navbar Button On Scroll
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
      navbarButton.addClass('active');
    } else {
      navbarButton.removeClass('active');
    }
  });
  //Open/Close Navbar
  navbarButton.on('click', function() {
    navContainer.css('width', '300');
  });
  closeNavbar,$(window).on('click', function() {
    if (navContainer.width() > 0) {
      navContainer.css('width', '0');
    }
  });

  //Smooth Scroll
  navbarLink.on('click', function(event) {
    event.preventDefault();
    var sectionId = $(this).attr('href');
    var sectionPosition = $(sectionId).offset().top;
    $('html, body').animate({
      scrollTop: sectionPosition
    }, 1000);
  });

  //Scroll To About Section
  scrollBtn.on('click', function() {
    var sectionPosition = aboutSection.offset().top;
    $('html, body').animate({
      scrollTop: sectionPosition
    }, 1000);
  });

  //Section About Counter
  count.each(function() {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    },
    {
      duration: 4000,
      easing: 'swing',
      step: function(now) {
        $(this).text(Math.ceil(now));
      }
    });
  });

  //Scroll To Top
  scrollToTop.on('click', function() {
    if ($(window).scrollTop() > 0) {
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
    }
  });

  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 150) {
      scrollToTop.fadeIn(200);
    } else {
      scrollToTop.fadeOut(200);
    }
  });

  //Clients Carousel First
  $('.section-client-carousel-first').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        768: {
            items: 4
        },
        992: {
            items: 5
        },
        1200: {
            items: 6
        }
     }
  });


  //Clients Carousel Seconds
  $('.section-client-carousel-second').owlCarousel({
    loop: true,
    items: 1,
    margin: 10,
    nav: true,
    navText: ['<i class="fi fi-arrow-left-l"></i>', '<i class="fi fi-arrow-right-l"></i>']
  });

  $('.parallax-window').parallax({imageSrc: 'img/hero-bg.jpg'});

  //Work Section

  if ($.fn.imagesLoaded) {
    $('.section-holder-wrapp').imagesLoaded(function () {
      var $grid = $('.section-holder-wrapp').isotope({
        itemSelector: '.single_gallery_item',
        percentPosition: true,
        masonry: {
          columnWidth: '.single_gallery_item'
        }
      });
    });
  }
