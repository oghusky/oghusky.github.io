$(document).ready(function() {
  //   controls progress bar animation
  let barsPos = $("#progress-header").offset().top;
  window.addEventListener("scroll", function() {
    if (barsPos - 400 < $(window).scrollTop()) {
      $("#progress-div").addClass("progress-animate");
      $(window).off("scroll");
    }
    //   controls nav position
    const navBar = document.querySelector("nav");
    const canvas = document.querySelector("canvas");
    const aboutSect = document.querySelector("#about-sect");
    if (window.pageYOffset + canvas.offsetHeight >= aboutSect.offsetTop + 500) {
      navBar.classList.add("fixed-top");
    }
    if (window.pageYOffset + canvas.offsetHeight <= aboutSect.offsetTop + 500) {
      navBar.classList.remove("fixed-top");
    }
  });
});
