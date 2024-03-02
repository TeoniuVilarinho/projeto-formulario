const campo = document.querySelectorAll(".campo")
const campoObrigatorio = document.querySelectorAll(".campo-obrigatorio")
const botao = document.getElementById("btn-enviar")

botao.addEventListener('click', () => {
    campo.forEach(preenchido => {
        if (preenchido.value !== "") {
            preenchido.classList.add("campo-preenchido")
        } else {
            preenchido.classList.remove("campo-preenchido")
        }
    })
    
    campo.forEach(naoPreenchido => {
        if (naoPreenchido.value === "") {
            naoPreenchido.classList.add("campo-nao-preenchido")
        } else {
            naoPreenchido.classList.remove("campo-nao-preenchido")
        }
    })

    campoObrigatorio.forEach(ativo => {
        if (ativo.value === "") {
            ativo.classList.add("ativo")
        } else {
            ativo.classList.remove("ativo")
        }
    })
})
