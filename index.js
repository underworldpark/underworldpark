//Navbar hides on scroll down informed by https://www.w3schools.com/howto/howto_js_navbar_slide.asp

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
};

//maybe have a function that adds a class to the shopping cart when a ticket has been added like it is animated by growth or color changing to indicate it has stuff in it.
