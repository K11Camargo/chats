'use strict'


const funcionarios = [{
    nome: "Gabigol",
    tempo: "Há 10 minutos",
    cargo: "Que nojo",
    imagem: "gabigol.jpg"
},
{
    nome: "Gerson",
    tempo: "Há 20 minutos",
    cargo: "Vapo",
    imagem: "gerson.jpg"    
},
{
    nome: "Roger Guedes",
    tempo: "Há 20 minutos",
    cargo: "Irmão to pensando....",
    imagem: "roger.jpg"

},
{
    nome: "Yuri Alberto",
    tempo: "Há 47 minutos",
    cargo: "To dormindo incomo...",
    imagem: "yuri.jpg"

}

]

function criarCards(funcionario){
    const container = document.getElementById('card-container')
    
    const card = document.createElement('div')
    card.classList.add('card')

    const imagem = document.createElement('img')
    imagem.src = `./img/${funcionario.imagem}`
    imagem.alt = funcionario.nome

    const divContainer = document.createElement('div')

    const nome = document.createElement('h2')
    nome.textContent = funcionario.nome
    
    const tempo = document.createElement('h6')
    tempo.textContent = funcionario.tempo  

    const cargo = document.createElement('p')
    cargo.textContent = funcionario.cargo  

    divContainer.replaceChildren(nome, tempo, cargo)
    card.replaceChildren(imagem, divContainer)

    container.appendChild(card)
}


funcionarios.forEach(criarCards)

//JS ON