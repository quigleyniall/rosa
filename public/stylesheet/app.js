$(document).ready(function(){
  $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      $('.navbar').toggleClass('nav-back',
       //add 'nav-back' class when div position match or exceeds else remove the 'ok' class.
        scroll+50 >= $('#about').offset().top
      );
      $('.navbar-light .navbar-nav .nav-link, .navbar-light .navbar-brand').toggleClass('navbar-font',    
        scroll+50 >= $('#about').offset().top
      );
      $(".fa-bars").toggleClass("change-color", scroll+50 >= $("#about").offset().top)
        $(".gallery-first").toggleClass("hidden", scroll+200 <= $('#gallery').offset().top);
        $(".gallery-second").toggleClass("hidden1", scroll+200 <= $('#gallery').offset().top);
        $(".gallery2-first").toggleClass("hidden", scroll+200 <= $('#gallery2').offset().top);
        $(".gallery2-second").toggleClass("hidden1", scroll+200 <= $('#gallery2').offset().top);
  });
  //trigger the scroll
  $(window).scroll();//ensure if you're in current position when page is refreshed

$(function(){
  setTimeout(function(){
    $(".image-first").removeClass("hidden")
  }, 1500)

  setTimeout(function(){
    $(".image-second").removeClass("hidden1")
  }, 500)

  setTimeout(function(){
    $(".image-third").removeClass("hidden2")
  }, 2000)

  setTimeout(function(){
    $(".line").removeClass("hidden3")
  }, 1000)

  setTimeout(function(){
    $(".line-left").removeClass("left-hide")
  }, 1000)

  setTimeout(function(){
    $(".line-right").removeClass("right-hide")
  }, 1000)

  setTimeout(function(){
    $(".star").removeClass("star-hide")
  }, 1000)

})
});
