
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
    // if(n < 3) { n = 1};
}

function showSlides(n){
    var slides = document.getElementsByClassName('producer');
    var btnNext = document.querySelector('.next');
    

    if(n > slides.length) {slidesIndex = 1};
    if(n < 1) {slideIndex = slides.length; console.log(slides.length)};
    if(n > 4){
        n = 1;
    }

    for( let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "flex";
    // console.log(n);
}



var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 5){
        counter = 1;
    }
},4000);


