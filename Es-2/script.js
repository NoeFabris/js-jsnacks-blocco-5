console.log('Es.2')

var zucchine = [];
var pesoTotale = 0
for (let i = 1; i < 11; i++) {
    var zucchina = {}
    zucchina['tipo'] = 'tipo' + (i),
    zucchina['peso'] = numGenDecimal(0, 3),
    zucchina['lunghezza'] = numGenDecimal(0, 25)
    zucchine.push(zucchina)
}

var zucchineCorte = []
var zucchineCortePeso = 0
var zucchineLunghe = []
var zucchineLunghePeso = 0

for (let k = 0; k < zucchine.length; k++) {
    var lunghezzaZucchina = zucchine[k]
    console.log(lunghezzaZucchina)
    if (lunghezzaZucchina['lunghezza'] > 15) {
        zucchineLunghe.push(lunghezzaZucchina)
        zucchineLunghePeso += parseFloat(lunghezzaZucchina['peso']) 
    } else {
        zucchineCorte.push(lunghezzaZucchina)
        zucchineCortePeso += parseFloat(lunghezzaZucchina['peso'])
    } 
}
console.log(`Numero di zucchine piu corte di 15cm ${zucchineCorte.length} ed il loro peso è: ${zucchineCortePeso}`)
console.log(`Numero di zucchine piu corte di 15cm ${zucchineLunghe.length} ed il loro peso è: ${zucchineLunghePeso}`)
