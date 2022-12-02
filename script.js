function tabuada() {
    let numero = document.getElementById('number')  
    let tabuada = document.getElementById('selecao-tabuada')
    if (numero.value.length == 0) {
        window.alert('Por favor, digite um número!') 
        
    }else {
        let num = Number(numero.value)
        let contador = 1
        tabuada.innerHTML = ''
        while (contador <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${contador} = ${num*contador}`
            item.value = `tabuada ${contador}`
            tabuada.appendChild(item)
            contador++
        }
    }
}