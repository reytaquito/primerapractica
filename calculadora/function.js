


const suma = () => {
    const number1 = parseInt(document.getElementById("number1").value)
    const number2 = parseInt(document.getElementById("number2").value)
    document.getElementById("resultado").value = number1 + number2
}

const resta = () => {
    const number1 = parseInt(document.getElementById("number1").value)
    const number2 = parseInt(document.getElementById("number2").value)
    document.getElementById("resultado").value = number1 - number2
}

const multi = () => {
    const number1 = parseInt(document.getElementById("number1").value)
    const number2 = parseInt(document.getElementById("number2").value)
    document.getElementById("resultado").value = number1 * number2
}


const div = () => {
    const number1 = parseInt(document.getElementById("number1").value)
    const number2 = parseInt(document.getElementById("number2").value)
    document.getElementById("resultado").value =  number1 / number2
}