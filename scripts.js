const botao = document.querySelector(".button-one")

function clicou() {

    const min = Math.ceil(document.querySelector(".input-one").value)

    const max = Math.floor(document.querySelector(".input-two").value)

    const result = document.querySelector(".input-three")

    if (max > min) {

        const resultNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        result.value = resultNumber
    } else {
        alert("O segundo valor precisa ser maior que o primeiro")
    }
    
}

botao.addEventListener("click", clicou)