window.addEventListener("scroll", function () {
  var navbarHeight = document.querySelector("nav").offsetHeight; // get the navbar height
  var shareButton = document.querySelector(".sharebtn");

  if (window.pageYOffset > navbarHeight) {
    shareButton.style.top = navbarHeight + 115 + "px"; // 120px below the navbar
  } else {
    shareButton.style.top = "50%";
  }
});
