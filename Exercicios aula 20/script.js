let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}
function inLista(n, l) {

    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar() {

    if (isNumero(num.value) && !inLista(num.value, valores)) {
        //coloar os valores no vetor//
        valores.push(Number(num.value))

        //Colocar para aparecer na lista os valores//
        let item = document.createElement('option')
        item.text = `valor ${num.value} adcionado`
        lista.appendChild(item)


    } else {
        window.alert('Valor invalido ou já encontrado na lista.')
    }
    //Apagar o valor assim que adicionar na lista//
    num.value = ''
    num.focus()
}
function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores para finalizar!')

    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        
        for(let pos in valores){
            
            
            //soma todos os valores.//
            soma += valores[pos]
            //Vai analisar todos os valores para ver qual o menor e qual o maior//
            if (valores[pos] > maior)
                    maior = valores [pos]
            if (valores[pos] < menor)
                    menor = valores [pos]
        }
        //vai fazer a media de todos os valores.
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p> O maior valor informado foi ${menor}. </p>`
        res.innerHTML += `<p> A soma de todos os valores é ${soma}.</p>`
        res.innerHTML += `<p> A media de todos os valores é ${media}.</p>`
    }
}