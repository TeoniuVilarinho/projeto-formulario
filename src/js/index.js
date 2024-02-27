const campo = document.querySelectorAll(".campo")
const campoObrigatorio = document.querySelectorAll(".campo-obrigatorio")
const botao = document.getElementById("btn-enviar")

botao.addEventListener('click', () => {
    
    campo.forEach( input => {
        if (input.value !== "") {
            input.classList.toggle("campo-preenchido")
        }
    })

    campo.forEach( input => {
        if (input.value === "") {
            input.classList.toggle("campo-nao-preenchido")
        }
    })

    campoObrigatorio.forEach( ativo => {
        ativo.classList.toggle("ativo")
    })
})