
  (function ($) {
  
  "use strict";

    // COUNTER NUMBERS
    jQuery('.counter-thumb').appear(function() {
      jQuery('.counter-number').countTo();
    });

    // BACKSTRETCH SLIDESHOW
    $('.hero-section').backstretch([
      "images/slideshow/ingenierie.jpg", 
      "images/slideshow/business.jpg",
      "images/slideshow/logistique.jpg",
      "images/slideshow/fournisseur.jpg"

    ],  {duration: 2000, fade: 750});
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
  
      scrollToDiv(elWrapped);
      return false;
  
      function scrollToDiv(element){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
    
  })(window.jQuery);


  (function(){

    var scroll = function(){ 
      return window.scrollY
    }
    
    let navbar = document.querySelector('.navbar')
    let top = navbar.getBoundingClientRect().top + scroll()
    let logo = document.querySelector('#logo')

    var onScroll = function(){
      let isfixing = navbar.classList.contains('fixed-nav')
      if(scroll() > top && !isfixing){
        navbar.classList.add("fixed-nav")

      }else if(scroll() < top && isfixing){
        navbar.classList.remove("fixed-nav")
      }
    }

    window.addEventListener("scroll", onScroll)
  }());


  jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        navigator: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });
  });