
//window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var slideIndex = 0;
showSlide(0);

var myTimeout;

function nextSlide() {
   showSlide(slideIndex+1);
}

function prevSlide() {
   showSlide(slideIndex-1);
}

function showSlide(idx){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  clearTimeout(myTimeout);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  	
  slideIndex=idx % slides.length;
  if (slideIndex<0) slideIndex += slides.length;

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block";  
  dots[slideIndex].className += " active";
  myTimeout = setTimeout(nextSlide, 10000); // Change image every 10 seconds
}

