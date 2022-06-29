function tocaSom(idElementAudio) {
    elemento = document.querySelector(idElementAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else{
        console.log("Elemento não encontrado.");
    }
};

const listaTeclas = document.querySelectorAll('.tecla');

// for: cria a variavel contador, enquanto o nºdo contador for menor que a lista, ele add +1 ao contador
for (let contador = 0; contador < listaTeclas.length; contador++) {
    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1]; //final da classe, que é igual aos IDs dos áudios
    const idAudio = `#som_${instrumento}`; //template string

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
