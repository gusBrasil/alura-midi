function tocaSom(idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const listaTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaTeclas.length) {

    const instrumento = listaTeclas[contador].classList[1];

    listaTeclas[contador].onclick = function () {
        tocaSom('#som_tecla_pom');
    }
    contador++;
}