function tocaSom(idElementAudio){
    document.querySelector(idElementAudio).play();
};

const listaTeclas = document.querySelectorAll('.tecla');
let contador = 0;

//enquanto o contador for menor que 9, que é a quantidade de teclas, ele executará o código, sempre adicionando +1 ao número do contador
while (contador < listaTeclas.length) {

    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1]; //final da classe, que é igual aos IDs dos áudios

    //template string -> precisa ser com crase
    const idAudio = `#som_${instrumento}`; //início do id dos audios e personaliza conforme o final da classe de cada elemento

    tecla.onclick = function(){
        tocaSom(idAudio);
    };
    contador++;
}; 