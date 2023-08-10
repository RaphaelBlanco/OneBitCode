function addPlayer() {
    const team = document.getElementById("escalacao")

    const ul = document.createElement('ul')

    const li = document.createElement('li')

    const br1 = document.createElement('br')
    const br2 = document.createElement('br')

    const h3 = document.createElement('h3')
    h3.innerText = 'Jogador: '

    const nome = document.getElementById("nome")
    const valueNome = nome.value

    const numero = document.getElementById("numero")
    const valueNumero = numero.value

    const posicao = document.getElementById("posicao")
    const valuePosicao = posicao.value

    ul.appendChild(li)
    li.append(valueNome, br1, valueNumero, br2, valuePosicao)

    team.append(h3, ul)
}
function removePlayer() {
    const team = document.getElementById("escalacao")

    const h3 = document.getElementsByTagName("h3")

    const ul = document.getElementsByTagName("ul")

    team.removeChild(h3[h3.length - 1])
    team.removeChild(ul[ul.length - 1])
}