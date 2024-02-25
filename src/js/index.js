
function campoPreenchido() {
    alert("Funciona, carai!!!")

    const campo = document.querySelectorAll(".campo")
    console.log(campo)
    
    campo.forEach( input => {
        input.addEventListener('change', () => {
            if (input.value !== "") {
                input.classList.add("campo-preenchido")
            } else {
                input.classList.remove("campo-preenchido")
            }
        })
    })
}