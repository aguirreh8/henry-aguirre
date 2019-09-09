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