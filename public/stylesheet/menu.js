$(document).ready(function(){
  $(window).scroll(function(event){
    var scroll = $(window).scrollTop()
    $(".navbar").toggleClass("nav-back", scroll+50 >= $("#menu").offset().top)
    $('.navbar-light .navbar-nav .nav-link, .navbar-light .navbar-brand').toggleClass('navbar-font',
      scroll+50 >= $('#menu').offset().top)
    $(".fa-bars").toggleClass("change-color", scroll+50 >= $("#menu").offset().top)
  })
  setTimeout(function(){
      $(".menu-second").removeClass("hidden1")
  },500)

})
