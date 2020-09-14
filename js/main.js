
var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("my-slides");
    var dots = document.getElementsByClassName("dots");

    if (n < 1) {
        slideIndex = slides.length;
    }

    if (n > slides.length) {
        slideIndex = 1;
    }

   

    for(i=0; i<slides.length; i++) {
        slides[i].style.display = "none";
       
    }

    htmlBuilder = '<div style="text-align:center">';
    htmlBuilder += '<span class="dot" onclick="currentSlide(1)"></span>';
    htmlBuilder += '<span class="dot" onclick="currentSlide(2)"></span>';
    htmlBuilder += '<span class="dot" onclick="currentSlide(3)"></span>';
    htmlBuilder += '</div>';


    for(i=0; i<dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }


    slides[slideIndex-1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


showSlides(slideIndex);