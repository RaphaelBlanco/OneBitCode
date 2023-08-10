const word = prompt('Digite a palavra')
let rightWord = ''

for (let i = word.length - 1; i >= 0; i--) {
    rightWord += word[i]
    console.log(rightWord)
}

if (word === rightWord) {
    alert('É um palindromo')
} else {
    alert('Não é um palindromo')
}