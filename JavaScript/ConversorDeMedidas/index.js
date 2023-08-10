let metros = parseFloat(prompt('Digite o valor em metros:'))
const valor = prompt('Digite para qual medida será convertido:\nmm\ncm\ndm\ndam\nhm\nkm')

switch (valor) {
    case 'mm':
        metros *= 1000
        alert('Valor em milímetro (mm): ' + metros)
        break
    case 'cm':
        metros *= 100
        alert('valor em centímetro (cm): ' + metros)
        break
    case 'dm':
        metros *= 10
        alert('valor em decímetro (dm): ' + metros)
        break
    case 'dam':
        metros /= 10
        alert('valor em decâmetro (dam): ' + metros)
        break
    case 'hr':
        metros /= 100
        alert('valor em hectômetro (hm): ' + metros)
        break
    case 'km':
        metros /= 1000
        alert('valor em quilômetro (km): ' + metros)
        break
    default:
        alert('valor invalido')
}