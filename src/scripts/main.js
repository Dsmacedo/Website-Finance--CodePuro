// efeito logotipo --------------------------------
window.addEventListener('load', function () {
    var logo = document.querySelector('.logo');
    logo.style.opacity = '1';
    logo.style.transform = 'translateX(0)';
});

AOS.init();

//------------------------------------------------------------

// Função para avançar os slides automaticamente empresas

var count = 1;
var totalSlides = 2; // Altere este valor para o total de imagens no carrossel

setInterval(nextImage, 5000);

function nextImage() {
    count++;
    if (count > totalSlides) {
        count = 1;
        document.getElementById("radio1").checked = true;
    } else {
        document.getElementById("radio" + count).checked = true;
    }
}

//-------------------------------------------------------------------

