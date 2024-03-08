const formulario = document.getElementById('formulario')
const campos = document.querySelectorAll('.input')

formulario.addEventListener('submit', (e) => {
  e.preventDefault()

  checkInput()
})

function checkInput() {
  campos.forEach((input) => {
    if (input.value === "") {
      naoPreenchido(input, "*campo obrigatório.")
    } else {
      preenchido(input)
    }
  }
)}

function naoPreenchido(input, message) {
  const campo = input.parentElement
  const small = campo.querySelector('small')

  small.innerText = message
  campo.className = "campo nao-preenchido"
}

function preenchido(input) {
  const campo = input.parentElement

  campo.className = "campo preenchido"
}