const navBar = document.getElementById("navBar");
const w = window.innerHeight;

// if (w > 400) {
//     console.log("Hello!");
// }

// if (window.scrollY > 400) {
//     navBar.classList.add("fadeIn");
//     console.log(window.scrollY);
// } else {
//     navBar.classList.remove("fadeIn");
// }

window.onscroll = function changeClass() {
    let scrollPosY = window.pageYOffset | document.body.scrollTop;
    if(scrollPosY > 400) {
        navBar.classList.add("fadeIn");
  } else {
        navBar.classList.remove("fadeIn");
  }
}