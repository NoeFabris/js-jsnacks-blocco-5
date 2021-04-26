console.log('Es.1')

var zucchine = [];
var pesoTotale = 0
for (let i = 1; i < 11; i++) {
    var zucchina = {}
    zucchina['tipo'] = 'tipo' + (i),
    zucchina['peso'] = numGenDecimal(0, 3),
    zucchina['lunghezza'] = numGenDecimal(0, 25) + 'cm'
    zucchine.push(zucchina)
}


for (let j = 0; j < zucchine.length; j++) {
    var pesoZucchina = parseFloat(zucchine[j]['peso'])
    // console.log(pesoZucchina)
    pesoTotale += pesoZucchina
}
console.log(zucchine)
console.log('Peso Totale = ' + pesoTotale.toFixed(2))
