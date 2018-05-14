$(document).ready(function(){
  $(window).scroll(function(event){
    var scroll = $(window).scrollTop()
    $(".navbar").toggleClass("nav-back", scroll+50 >= $("#shop").offset().top)
    $('.navbar-light .navbar-nav .nav-link, .navbar-light .navbar-brand').toggleClass('navbar-font',
      scroll+50 >= $('#shop').offset().top)
       $(".fa-bars").toggleClass("change-color", scroll+50 >= $("#shop").offset().top)
  })
  $(".shop-1").on("click", function(){
    $(".main, .starter, .salads").removeClass("hide-shop-items");
    $(".shop-1").addClass("active")
    $(".shop-3, .shop-2, .shop-4").removeClass("active")
  })
  $(".shop-2").on("click", function(){
    $(".main, .starter, .salads").removeClass("hide-shop-items");
    $(".salads, .starter").addClass("hide-shop-items");
    $(".shop-2").addClass("active")
    $(".shop-1, .shop-3, .shop-4").removeClass("active")
  })
  $(".shop-3").on("click", function(){
    $(".main, .starter, .salads").removeClass("hide-shop-items");
    $(".main, .starter").addClass("hide-shop-items");
    $(".shop-3").addClass("active")
    $(".shop-1, .shop-2, .shop-4").removeClass("active")
  })
  $(".shop-4").on("click", function(){
    $(".main, .starter, .salads").removeClass("hide-shop-items");
    $(".main, .salads").addClass("hide-shop-items");
    $(".shop-4").addClass("active")
    $(".shop-1, .shop-2, .shop-3").removeClass("active")
  })
  $(function(){
    setTimeout(function(){
      $(".shop-first").removeClass("hidden")
    }, 1500)

    setTimeout(function(){
      $(".shop-second").removeClass("hidden1")
    }, 500)

    setTimeout(function(){
      $(".shop-third").removeClass("hidden2")
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
})
