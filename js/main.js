
var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("my-slides");
    
    if (n < 1) {
        slideIndex = slides.length;
    }

    if (n > slides.length) {
        slideIndex = 1;
    }

    var dotContainer = document.getElementById("dotcontainer");
    htmlDots = '<div style="text-align:center">';
    for(i=0; i<slides.length; i++) {
        slides[i].style.display = "none";
        htmlDots += '<span class="dot" onclick="currentSlide(' + slideIndex +')"></span>';
       
    }
    htmlDots += '</div>';
    dotContainer.innerHTML = htmlDots;

    slides[slideIndex-1].style.display = "block";

    var dots = document.getElementsByClassName("dot");

    for(i=0; i<dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    dots[slideIndex - 1].className += " active";
}


showSlides(slideIndex);