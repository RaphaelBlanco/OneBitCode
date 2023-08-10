const vagasEmprego = []
let menu

do {
    menu = prompt('-Digite 1, para lista de vagas\n-Digite 2, para criar uma nova vaga\n-Digite 3, para visualizar vaga\n-Digite 4, para inscrever um candidato a uma vaga\n-Digite 5, para excluir uma vaga\n-Digite 6, sair')

    let vaga = {}
    let candidato = {}

    switch (menu) {

        case '1':
            for (let i = 0; i < vagasEmprego.length; i++) {
                alert(' Nome: ' + vagasEmprego[i].nome +
                    '\n Descrição: ' + vagasEmprego[i].descricao +
                    '\n Limite de candidatos: ' + vagasEmprego[i].candidatos)
            }
            break

        case '2':
            vaga.nome = prompt('Nome da vaga de emprego')
            vaga.descricao = prompt('Descrição da vaga')
            vaga.candidatos = prompt('Limite de candidatos')
            const salvar = prompt('Deseja salvar as informções? (sim/nao)')
            if (salvar === 'sim') {
                vagasEmprego.push(vaga)
                alert('salvo')
            } else {
                alert('Iformações não gravadas')
            }
            console.log(vagasEmprego)
            break

        case '3':
            const indice = prompt('Nome da vaga?')

            const vagaEspecifica = vagasEmprego.filter(function (busca) {
                return busca.nome === indice
            })
            console.log(vagaEspecifica)
            break

        case '4':
            candidato.nomeCandidato = prompt('Seu Nome?')
            candidato.vagaInteresse = prompt('Qual vaga você está interessado?')
            const gravar = prompt('Deseja salvar as informções? (sim/nao)')
            if (gravar === 'sim') {
                vagasEmprego.push(candidato)
                alert('salvo')
            } else {
                alert('Iformações não gravadas')
            }
            console.log(vagasEmprego)
            break

        case '5':
            const excluir = prompt('Indice da vaga para ser excuida')
            vagasEmprego.splice(excluir, 1)
            alert('vaga excluída')
            break

        case '6':
            alert('Sair')
            break

        default:
            alert('Comando incorreto')
    }
} while (menu !== '6')