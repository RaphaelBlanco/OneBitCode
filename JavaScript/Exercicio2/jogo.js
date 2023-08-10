let entrada1 = prompt('Digite os pontos de vida do primeiro personagem: ')
let entrada2 = prompt('Digite o poder de ataque do primeiro personagem: ')

let entrada3 = prompt('Digite os pontos de vida do segundo personagem: ')
let entrada4 = prompt('Digite o poder de ataque do segundo personagem: ')

let life1 = parseFloat(entrada1)
let attack1 = parseFloat(entrada2)

let life2 = parseFloat(entrada3)
let attack2 = parseFloat(entrada4)

if (attack1 >= life2) {
    alert('O segundo persogem foi de base')
} else {
    life2 = life2 - attack1
    alert('Pontos de vida do segundo personagem: ' + life2)
}
if (attack2 >= life1) {
    alert('O primeiro persogem foi de base')
} else {
    life1 = life1 - attack2
    alert('Pontos de vida do primeiro personagem: ' + life1)
}

attack1 = prompt('Digite o poder do novo ataque do primeiro personagem: ')

attack2 = prompt('Digite o poder do novo ataque do segundo personagem: ')

if (attack1 >= life2) {
    alert('O segundo persogem foi de base')
}
else if (attack2 >= life1) {
    alert('O primeiro persogem foi de base')
}
else {
    life2 = life2 - attack1
    life1 = life1 - attack2
    alert('Impate!\nvida do primeiro personagem: ' + life1 + '\nvida do segundo personagem: ' + life2)
}

