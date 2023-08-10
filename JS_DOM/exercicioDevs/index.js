function addTec() {
    const form = document.getElementById('form')

    const campo = document.createElement('div')
    campo.id = 'campo'
    form.appendChild(campo)

    //let linhas = 0
    //linhas++

    const prog = document.createElement('input')
    prog.id = 'prog'
    const linguagem = document.createElement('label')
    linguagem.innerText = 'Linguagem de programação '
    campo.append(linguagem, prog)
    campo.appendChild(document.createElement('br'))

    const radio2 = document.createElement('input')
    //radio2.setAttribute('type', 'radio')
    radio2.type = 'radio'
    radio2.name = 'experiencia' //+ linhas
    radio2.id = 'radioExperiencia2'
    //radio2.value = '0-2 anos'
    const experiencia2 = document.createElement('label')
    experiencia2.innerHTML = '<label for = "radioExperiencia2">Experiência: 0-2 anos</label>'
    campo.append(radio2, experiencia2)
    campo.appendChild(document.createElement('br'))

    const radio4 = document.createElement('input')
    //radio4.setAttribute('type', 'radio')
    radio4.type = 'radio'
    radio4.name = 'experiencia' //+ linhas
    radio4.id = 'radioExperiencia4'
    //radio4.value = '2-4 anos'
    const experiencia4 = document.createElement('label')
    experiencia4.innerHTML = '<label for = "radioExperiencia4">Experiência: 3-4 anos</label>'
    campo.append(radio4, experiencia4)
    campo.appendChild(document.createElement('br'))

    const radio5 = document.createElement('input')
    //radio5.setAttribute('type', 'radio')
    radio5.type = 'radio'
    radio5.name = 'experiencia' //+ linhas
    radio5.id = 'radioExperiencia5'
    //radio5.value = '5+ anos'
    const experiencia5 = document.createElement('label')
    experiencia5.innerHTML = '<label for = "radioExperiencia5">Experiência: 5+ anos</label>'
    campo.append(radio5, experiencia5)
    campo.appendChild(document.createElement('hr'))

}

function save() {
    const nome = document.getElementById('nome').value
    const prog = document.getElementById('prog').value
    const radio = document.querySelector("input[name='experiencia']").value
    console.log(nome)
    console.log(prog)
    console.log(radio)
}

function remove() {
    const form = document.getElementById('form')
    const campo = document.getElementById('campo')
    form.removeChild(campo)
}