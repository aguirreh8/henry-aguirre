const navBar = document.getElementById("navBar");
const w = window.innerHeight;

window.onscroll = function changeClass() {
    let scrollPosY = window.pageYOffset | document.body.scrollTop;
    if(scrollPosY > 400) {
        navBar.classList.add("fadeIn");
  } else {
        navBar.classList.remove("fadeIn");
  }
}

$('#top').on('click', function(e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: $('html, body').offset().top });
  });    

  $('#about').on('click', function(e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: $('.about').offset().top - 100 });
  });

  $('#projects').on('click', function(e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: $('.projects').offset().top - 100});
  });

  $('#contact').on('click', function(e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: $('.contact').offset().top - 100 });
  });