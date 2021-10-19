"use strict"

const herois = [
    'IronMan - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum maxime, at temporibus ullam pariatur, quibusdam molestiae porro magnam aperiam cum sit! Unde dolor sint obcaecati aliquid sunt, deleniti saepe?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facilis delectus odio tempore dolorum vitae, rem blanditiis.',
    
    'Thanos - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum maxime, at temporibus ullam pariatur, quibusdam molestiae porro magnam aperiam cum sit! Unde dolor sint obcaecati aliquid sunt, deleniti saepe?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facilis delectus odio tempore dolorum vitae, rem blanditiis.',
    
    'SpiderMan - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum maxime, at temporibus ullam pariatur, quibusdam molestiae porro magnam aperiam cum sit! Unde dolor sint obcaecati aliquid sunt, deleniti saepe?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facilis delectus odio tempore dolorum vitae, rem blanditiis.',
    
    'Thor - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum maxime, at temporibus ullam pariatur, quibusdam molestiae porro magnam aperiam cum sit! Unde dolor sint obcaecati aliquid sunt, deleniti saepe?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facilis delectus odio tempore dolorum vitae, rem blanditiis.',
    
    'CaptainAmerica - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum maxime, at temporibus ullam pariatur, quibusdam molestiae porro magnam aperiam cum sit! Unde dolor sint obcaecati aliquid sunt, deleniti saepe?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facilis delectus odio tempore dolorum vitae, rem blanditiis.',
    
    'Wanda Waximoff - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum maxime, at temporibus ullam pariatur, quibusdam molestiae porro magnam aperiam cum sit! Unde dolor sint obcaecati aliquid sunt, deleniti saepe?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facilis delectus odio tempore dolorum vitae, rem blanditiis.'
]

const filtrarTitulo = (elementoTitulo) =>{
    const ultimoTraco = elementoTitulo.lastIndexOf("-")

    return elementoTitulo.substring(0, ultimoTraco)
}

const filtrarTexto = (elementoTexto) => {
    const ultimoTraco = elementoTexto.lastIndexOf("-") + 1
    const ultimoPonto = elementoTexto.lastIndexOf(".") + 1

    return elementoTexto.substring(ultimoTraco, ultimoPonto)
}

const criarCard = (elemento) =>{
    const container = document.querySelector(".card-container")
    const novoCard = document.createElement("div")
    novoCard.classList.add("card")
    novoCard.id = filtrarTitulo(elemento)
    novoCard.innerHTML = `
        <div class="title">
            <h2>${filtrarTitulo(elemento)}</h2>
        </div>
        <div class="text">
            <p>
                ${filtrarTexto(elemento)}
            </p>
        </div>
        <div class="button">
            <button>Saiba Mais</button>
        </div>`
    container.appendChild(novoCard)
}

const carregarCard = (heroisEelemento) => heroisEelemento.forEach(criarCard)

carregarCard(herois)