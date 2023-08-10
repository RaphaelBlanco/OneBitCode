const name1 = prompt('Qual é o seu nome?')

let yn = prompt('Já vizitou alguma cidade? (sim/não)')

let n = 0, citys = ''

while (yn === 'sim') {
    let city = prompt('Qual cidade?')
    alert('Cidade vizitada: ' + city)
    citys += ' - ' + city + '\n'
    yn = prompt('Vizitou mais alguma? (sim/não)')
    n++
}

alert('Nome do turista: ' +
    name1 +
    '\nCidades vizitadas: ' +
    n + '\n' + citys)