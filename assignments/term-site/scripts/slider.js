
var slideIndex = 1;
showSlides(slideIndex);

function slideButton(g) {
    showSlides(slideIndex += g);
}

function activeSlide(g) {
    showSlides(slideIndex = g);
}

function showSlides(g) {

    var i;
    var slides = document.getElementsByClassName("salesSlides");
    var dots = document.getElementsByClassName("dot");

    if (g > slides.length) {slideIndex = 1}

    if (g < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}