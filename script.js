// const numero = 5
// for(i=0; i<numero; i++) {
//     console.log(i)    
// }

// let contador = 0
// while (contador < 10) {
//     console.log(contador)
//     contador = contador + 1
// }

// let i = 1
// numero = 5
// while(i<=numero) {
//     console.log(i)
//     i = i + 1
// }

// let valor = prompt("Seu nome:")

// function saudacao(nome) {
//     alert('Meu nome é ' + nome + ' !')
// }

// saudacao(valor)

const adicionar = (a, b) => {
    return a + b
}

const subtrair = (a, b) => {
    return a - b
}

const dividir = (a, b) => {
    return a / b
}

const multiplicar = (a, b) => {
    return a * b
}

function calcularValores() {
    const input1 = parseInt(document.querySelector('#txtValor1').value, 10)
    const input2 = parseInt(document.querySelector('#txtValor2').value, 10)
    if(document.querySelector('#cbxOperacao').value == '+'){
        const result = adicionar(input1, input2)
        document.querySelector('#txtResultado').innerText = result
    }else if(document.querySelector('#cbxOperacao').value == '-'){
        const result = subtrair(input1, input2)
        document.querySelector('#txtResultado').innerText = result
    }else if(document.querySelector('#cbxOperacao').value == '/'){
        const result = dividir(input1, input2)
        document.querySelector('#txtResultado').innerText = result
    }else if(document.querySelector('#cbxOperacao').value == '*'){
        const result = multiplicar(input1, input2)
        document.querySelector('#txtResultado').innerText = result
    }
}