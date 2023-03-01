let botaoTrabalhos = document.querySelector('.button-trabalhos')
let botaoQualificacoes = document.querySelector('.button-qualificacoes')

let trabalhos = document.querySelector('.trabalhos')
let qualificacoes = document.querySelector('.qualificacoes')

function trocaTrabalho() {
  botaoTrabalhos.addEventListener('click', () => {
    trabalhos.style.display = 'block'
    qualificacoes.style.display = 'none'
  })
}

function trocaQualificacoes() {
  botaoQualificacoes.addEventListener('click', () => {
    qualificacoes.style.display = 'block'
    trabalhos.style.display = 'none'
  })
}
