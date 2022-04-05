function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null) {
        alert('Elemento não encontrado');
    }

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
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

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}