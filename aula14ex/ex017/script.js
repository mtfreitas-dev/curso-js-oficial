function calcular(){
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('tabuada')
    if(num.value.length == 0){
        alert('Favor, informe um número')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''

        while(c <=10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}