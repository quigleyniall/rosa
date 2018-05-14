$(document).ready(function(){
  $(window).scroll(function (event){
     var scroll = $(window).scrollTop()
     $('.navbar').toggleClass('nav-back', scroll+50 >= $('#reservation').offset().top);
     $('.navbar-light .navbar-nav .nav-link, .navbar-light .navbar-brand').toggleClass('navbar-font',
       scroll+50 >= $('#reservation').offset().top)
         $(".fa-bars").toggleClass("change-color", scroll+50 >= $("#reservation").offset().top)
     });
     $(window).scroll();



  $(function(){
    setTimeout(function(){
      $(".reservation-image-first").removeClass("hidden")
    },1500)
    setTimeout(function(){
      $(".reservation-image-second").removeClass("hidden1")
    },500)
    setTimeout(function(){
      $(".reservation-image-third").removeClass("hidden2")
    },2000)
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
})
