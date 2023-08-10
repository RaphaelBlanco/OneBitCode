let option = prompt('Escolha a opção desejada: (1, 2, 3, 4, Encerrar)')

do {
    switch (option) {
        case '1':
            alert('opção 1 escolida')
            break
        case '2':
            alert('opção 2 escolida')
            break
        case '3':
            alert('opção 3 escolida')
            break
        case '4':
            alert('opção 4 escolida')
            break
        case 'encerrar':
            alert('opção Encerrar escolida')
            break
        default:
            alert('opção invalida')
    }
    option = prompt('Escolha a opção desejada: (1, 2, 3, 4, Encerrar)')
} while (option !== 'encerrar')

alert('Fim')