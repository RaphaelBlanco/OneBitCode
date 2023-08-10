//Exemplo de FIFO

const array = ['Mateus', 'Marcos']
console.log(array);

do {
    var menu = prompt('Bem vindo,\nDigite 1: para ver a fila de espera\nDigite 2: para entrar na fila\nOu 3 para sair')

    switch (menu) {
        case '1':
            alert(array)
            break
        case '2':
            var name1 = prompt('Digite seu nome')
            array.push(name1)
            break
        case '3':
            alert('tchau')
            break
        default:
            alert('Comando incorreto')
    }

    emConsulta = array.shift()
    alert('Paciente em consulta agora: ' + emConsulta)
} while (menu !== '3')
