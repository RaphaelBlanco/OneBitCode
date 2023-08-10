const imobiliaria = []
let menu

do {
    menu = prompt('Digite 1: para ver os imóveis cadastrado\nDigite 2: para cadastra um novo imóvel\nDigite 3: para encerrar')

    let imovel = {}

    switch (menu) {
        case '1':
            for (let i = 0; i < imobiliaria.length; i++)
                alert('Proprietario: ' + imobiliaria[i].nome +
                    '\nQuantidade de quartos: ' + imobiliaria[i].quartos +
                    '\nQuantidade de banheiros: ' + imobiliaria[i].banheiro +
                    '\nGaragem: ' + imobiliaria[i].garagem)
            console.log(imobiliaria)
            break
        case '2':
            imovel.nome = prompt('Digite o nome do proprietário')
            imovel.quartos = prompt('Digite a quantidade de quartos')
            imovel.banheiro = prompt('Digite a quantidade de banheiros')
            imovel.garagem = prompt('possui garagem?')

            imobiliaria.push(imovel)
            break
        case '3':
            alert('tchau')
            break
        default:
            alert('comando incorreto')
    }

} while (menu !== '3')