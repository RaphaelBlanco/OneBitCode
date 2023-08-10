//Exemplo de LIFO

const array = ['7 de paus', '2 ouros', 'Dama de copas', 'Rei de espadas']
console.log(array)

do {
    var menu = prompt('Digite 1: Acrescentar carta \nDigite 2: Puxar carta \nDigite 3: Encerrar jogo')

    switch (menu) {
        case '1':
            const carta = prompt('Qual Carta você vai adicionar?')
            array.unshift(carta)
            alert('Baralho: \n' + array)
            break
        case '2':
            const cartaPuxada = array.shift()
            alert('Você puxou: ' + cartaPuxada)
            break
        case '3':
            alert('Jogo encerrado')
            break
        default:
            alert('Comando incorreto')
    }

    console.log(array)
} while (menu !== '3')