$(document).ready(function(){
    $(window).scroll(function(event){
  var scroll = $(window).scrollTop();
  $(".navbar").toggleClass("nav-back", scroll+50 >= $("#contact").offset().top)
  $('.navbar-light .navbar-nav .nav-link, .navbar-light .navbar-brand').toggleClass('navbar-font',
    scroll+50 >= $('#contact').offset().top)
     $(".fa-bars").toggleClass("change-color", scroll+50 >= $("#contact").offset().top)
})
$(window).scroll();
$(function(){
  setTimeout(function(){
    $(".contact-first").removeClass("hidden")
  }, 1500)

  setTimeout(function(){
    $(".contact-second").removeClass("hidden1")
  }, 500)

  })
});

var map;
 function initMap() {
        var myLatLng = {lat: 40.7128, lng: -74.0060};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!'
        });
      }
