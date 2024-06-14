const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

//passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
btnAvancar.addEventListener("click", function(){
    console.log(cartaoAtual);
    console.log(cartoes.length - 1);
    if (cartaoAtual === cartoes.length - 1) return;

    //passo 4 - buscar o cartão que esta selecionado e esconder
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

    //passo 3 - fazer aparecer o próximo cartão da lista, colocando a classe selecionado nele
cartaoAtual++;
cartoes[cartaoAtual].classList.add("selecionado");

    


});

btnVoltar.addEventListener("click", function(){
    console.log(cartaoAtual);
    console.log(cartoes.length - 1);
    if (cartaoAtual === cartoes.length - 1) return;

    //passo 4 - buscar o cartão que esta selecionado e esconder
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

    //passo 3 - fazer aparecer o próximo cartão da lista, colocando a classe selecionado nele
cartaoAtual++;
cartoes[cartaoAtual].classList.add("selecionado");

});