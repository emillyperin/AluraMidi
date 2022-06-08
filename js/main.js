
function tocaSomPom(){

    document.querySelector('#som_tecla_pom').play();
}

const listaTeclas = document.querySelectorAll('.teclas');
let contador = 0;

//enquanto o contador for menor que 9, que é a quantidade de teclas, ele executará o código, sempre adicionando +1 ao número do contador
while (contador > listaTeclas.length) {
    listaTeclas[0].onclick = tocaSomPom;
    contador++;
}