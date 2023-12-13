let slideAtual = 0;
exibirSlide(slideAtual);

function mudarSlide(n) {
    exibirSlide(slideAtual += n);
}

function exibirSlide(n) {
    const slides = document.getElementsByClassName("imagem-slide");
    if (n >= slides.length) { slideAtual = 0; }
    if (n < 0) { slideAtual = slides.length - 1; }
    
    for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    slides[slideAtual].style.display = "block";
}

setInterval(function() {
    mudarSlide(1);
}, 3000);

document.write("ok");