let entrada1 = prompt('Quantidade de dinheiro no banco: ')
let options = prompt('Ecolha as opções: (Depositar, Retirar, saldo ou encerrar)')
let money = parseFloat(entrada1)

do {
    switch (options) {
        case 'depositar':
            let entrada2 = prompt('Digite o valor que gostaria de depositar')
            let deposito = parseFloat(entrada2)
            money = money + deposito
            break
        case 'retirar':
            let entrada3 = prompt('Digite o valor que gostaria de retirar')
            let retirar = parseFloat(entrada3)
            money = money - retirar
            break
        case 'saldo':
            alert('Saldo: ' + money)
            break
        case 'encerrar':
            break
        default:
            alert('opção incorreta')
    }
    alert('Valor na conta: ' + money)
    options = prompt('Ecolha as opções: (Depositar, Retirar ou encerrar)')
} while (options !== 'encerrar')

alert('Good bye')