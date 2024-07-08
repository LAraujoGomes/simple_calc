var txtn1 = document.querySelector('input#txtn1')
var txtn2 = document.querySelector('input#txtn2')
var soma = document.getElementById('#btnsoma')
var subt = document.querySelector('input#btnsub')
var mult = document.querySelector('input#btnmult')
var div = document.querySelector('input#btndiv')
var rs = document.getElementById("res")

/*soma.addEventListener('click', adicao)
subt.addEventListener('click', subtracao)
mult.addEventListener('click', multiplicacao)
div.addEventListener('click', divisao)*/

function adicao(){
    
    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)
    var resultado = n1 + n2
    rs.innerHTML = `${n1} + ${n2} = ${resultado.toFixed(1)}` 
}

function subtracao(){

    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)
    var resultado = n1 - n2
    rs.innerHTML = `${n1} - ${n2} = ${resultado.toFixed(1)}` 
}

function multiplicacao(){

    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)
    var resultado = n1 * n2
    rs.innerHTML = `${n1} X ${n2} = ${resultado.toFixed(1)}` 
}

function divisao(){

    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)
    var resultado = n1 / n2
    rs.innerHTML = `${n1} / ${n2} = ${resultado.toFixed(1)}` 
}