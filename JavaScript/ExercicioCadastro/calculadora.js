const btn = document.querySelector('#send2')

btn.addEventListener('click', function (e) {
    e.preventDefault()

    const first = document.querySelector('#first')
    const valueFirst = first.value

    const second = document.querySelector('#second')
    const valueSecond = second.value

    let soma = Number(valueFirst) + Number(valueSecond)
    let subtracao = Number(valueFirst) - Number(valueSecond)
    let multiplicacao = Number(valueFirst) * Number(valueSecond)
    let divisao = Number(valueFirst) / Number(valueSecond)

    window.alert('Soma: ' + soma + ' | Subtração: ' + subtracao + ' | Multiplicação: ' + multiplicacao + ' | Divisão: ' + divisao)
})