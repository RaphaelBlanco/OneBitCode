const btn = document.querySelector('#send')

btn.addEventListener('click', function (e) {
    e.preventDefault()

    const name = document.querySelector('#name')
    const valueName = name.value

    const lastName = document.querySelector('#lastName')
    const valueLastName = lastName.value

    const study = document.querySelector('#study')
    const valueStudy = study.value

    const birthday = document.querySelector('#birthday')
    const valueBirthday = birthday.value

    window.alert('Nome completo: ' + valueName + ' ' +
        valueLastName + ', campo de estudo: ' +
        valueStudy + ', idade: ' + (2023 - valueBirthday))
})