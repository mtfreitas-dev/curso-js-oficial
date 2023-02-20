var valor = document.getElementById('num')
var  lista = document.getElementById('flista')
var res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >=1 && Number(n) <=100){
        return true 
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) !=-1) {
        return true 
    } else {
        return false
    }
}


function adicionar() {
    if(isNumero(num.value) && !inlista(num.value, valores)){
       
    } else {
        window.alert('Valor inválido')
    }
}