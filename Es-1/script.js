var zucchine = [];
var pesoTotale = 0
for (let i = 1; i < 11; i++) {
    var zucchina = {}
    zucchina['tipo'] = 'tipo' + (i),
    zucchina['peso'] = numGenDecimal(0, 3),
    zucchina['lunghezza'] = numGenDecimal(0, 25) + 'cm'
    zucchine.push(zucchina)
}


console.log('Es.1')

for (let j = 0; j < zucchine.length; j++) {
    var pesoZucchina = parseFloat(zucchine[j]['peso'])
    // console.log(pesoZucchina)
    pesoTotale += pesoZucchina
}
console.log(zucchine)
console.log('Peso Totale = ' + pesoTotale.toFixed(2))

console.log('Es.2')

var zucchineCorte = []
var zucchineLunghe = []

for (let k = 0; k < zucchine.length; k++) {
    var lunghezzaZucchina = parseFloat(zucchine[k]['lunghezza'])
    // console.log(lunghezzaZucchina)
    if (lunghezzaZucchina > 15) {
        zucchineLunghe.push(lunghezzaZucchina)
    } else {
        zucchineCorte.push(lunghezzaZucchina)
    }
}
console.log('Numero di zucchine piu corte di 15cm ' +  zucchineCorte.length)
console.log('Numero di zucchine piu lunghe di 15cm ' +  zucchineLunghe.length)