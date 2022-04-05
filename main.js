function tocaSom(idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const listaTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaTeclas.length; contador++) {
    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1];
    //templateString
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    }
}
