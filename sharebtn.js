window.addEventListener("scroll", function () {
  var navbarHeight = document.querySelector("nav").offsetHeight; // get the navbar height
  var shareButton = document.querySelector(".sharebtn");

  if (window.pageYOffset > navbarHeight) {
    shareButton.style.top = navbarHeight + 115 + "px"; // 120px below the navbar
  } else {
    shareButton.style.top = "50%";
  }
});

// window.addEventListener("scroll", function () {
//   var shareButton = document.querySelector(".sharebtn");
//   var viewportHeight = window.innerHeight;
//   var triggerHeight = viewportHeight / 2;
//   var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

//   if (scrollPosition >= triggerHeight) {
//     // Make the share button sticky
//     shareButton.style.position = "fixed";
//     shareButton.style.bottom = "20px"; // Position from the bottom of the viewport
//     shareButton.style.right = "20px"; // Position from the right of the viewport
//   } else {
//     // Reset to original position
//     shareButton.style.position = "absolute"; // or 'static', depending on your initial layout
//     shareButton.style.bottom = ""; // Reset bottom position
//     shareButton.style.right = ""; // Reset right position
//   }
// });
