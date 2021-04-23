function numGen(min, max) {
    return num = Math.floor(Math.random() * (max - min)) + 1;
}
function numGenDecimal(min, max) {
    return num = (Math.random() * (max - min) + 1).toFixed(2);
}

function checkInserimentoNum(numero) {
    num = parseInt(numero)
    if (isNaN(num)) {
        return check = false
    } else {
        check = true
        return num
    }
}

function checkInserimentoString(text) {
    num = parseInt(text)
    space = text
    console.log(num)
    if (isNaN(num)) {
        if (space == '') {
            check = false
        } else {
            check = true   
        }
    } else {
        check = false
    }
}