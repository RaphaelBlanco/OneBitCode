function calculadoraGeometrica(baseMaior, altura = baseMaior, baseMenor = 0) {

    return (baseMaior + baseMenor) * altura
}

let n1, n2, n3, resultado

do {

    var menu = prompt('Digite:\n1. para area do triangulo\n2. para area do retangulo\n3. para area do quadrado\n4. para area do trapezio\n5. para area do circulo\n6. para sair')

    switch (menu) {
        case '1':
            n1 = parseFloat(prompt('base:'))
            n2 = parseFloat(prompt('altura:'))
            resultado = calculadoraGeometrica(n1, n2) / 2
            alert('area do triangulo: ' + resultado)
            break
        case '2':
            n1 = parseFloat(prompt('base:'))
            n2 = parseFloat(prompt('altura:'))
            resultado = calculadoraGeometrica(n1, n2)
            alert('area do retangulo: ' + resultado)
            break
        case '3':
            n1 = parseFloat(prompt('base:'))
            resultado = calculadoraGeometrica(n1)
            alert('area do quadrado: ' + resultado)
            break
        case '4':
            n1 = parseFloat(prompt('base maior:'))
            n2 = parseFloat(prompt('base menor:'))
            n3 = parseFloat(prompt('altura:'))
            resultado = calculadoraGeometrica(n1, n3, n2) / 2
            alert('area do trapezio: ' + resultado)
            break
        case '5':
            n1 = parseFloat(prompt('raio:'))
            resultado = 3.14 * calculadoraGeometrica(n1)
            alert('area do circulo: ' + resultado)
            break
        case '6':
            alert('Exit')
            break
        default:
            alert('comando invalido')
    }
} while (menu !== '6')