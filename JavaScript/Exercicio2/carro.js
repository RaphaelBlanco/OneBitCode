let carro1 = window.prompt('Velocidade do primeiro veiculo km/h: ')
let carro2 = window.prompt('Velocidade do segundo veiculo km/h: ')

if (carro1 > carro2) {
    alert('O primeiro carro é mais veloz: ' + carro1 + 'km/h')
}
else if (carro2 > carro1) {
    alert('O segundo carro é mais veloz: ' + carro2 + 'km/h')
}
else {
    alert('Os dois carros tem a mesma velocidade')
}