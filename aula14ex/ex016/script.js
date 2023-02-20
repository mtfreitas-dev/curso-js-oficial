function clicar(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById ('res')

    if(inicio.value.length == 0 || fim.value.lenth == 0 || passo.value.lenth == 0){
        res.innerHTML = 'Impossivel contar!'
        //alert('Verifique os dados')
        
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            alert('Passo invalido! Considerando passo 1')
            p = 1
        }
        if(i < f){
        for(let c = i; c <= f; c += p) {
           res.innerHTML += `${c}  \u{1f449}`
        }
    } else {
        for(let c = i; c >= f; c-= p){
            res.innerHTML += `${c} \u{1f449}`
        }
        }
    }

        res.innerHTML += `\u{1f3c1}`
    }