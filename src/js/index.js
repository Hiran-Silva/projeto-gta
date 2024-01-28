const botao = document.querySelector(".btn-plataformas");
const elementoPlataformas = document.querySelector(".btn-plataformas .plataformas");

botao.addEventListener("click", () => {
    const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");

    console.log(botaoEstaAberto);

    if(botaoEstaAberto) {
        elementoPlataformas.classList.remove("ativo");
        
    }else{
            elementoPlataformas.classList.add("ativo");
    }

})