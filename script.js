const sessaoPrincipal = document.getElementById("sessaoPrincipal")
const Esquerda = document.getElementById("Esquerda")
const Direita = document.getElementById("Direita")

let paraLado = 700

Esquerda.addEventListener("click", () => {
    sessaoPrincipal.scrollLeft -= paraLado
})

Direita.addEventListener("click", () => {
    sessaoPrincipal.scrollLeft += paraLado
})
