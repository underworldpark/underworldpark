var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
<<<<<<< HEAD
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
=======
    document.getElementsByClassName("navbar").style.top = "0";
  } else {
    document.getElementByClassName("navbar").style.top = "-50px";
>>>>>>> 8b146b520d123ae00d7409d25e77c3b40b1f5b59
  }
  prevScrollpos = currentScrollPos;
};
