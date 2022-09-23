function contar(){  
    var inic = document.getElementById('numi')
    var fim = document.getElementById('numfi')
    var pas = document.getElementById('pas')
    var res = document.getElementById('res')
    if (inic.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('[ERRO] Bota os dado ai fdp')
    } else {
        let i = Number(inic.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if ( p == 0) {
            window.alert('Passo invÃ¡lido, considerando Passo = 1')
            p = 1
        }
        res.innerHTML = 'Contando:'
                if(i < f) {
                    //contagem subindo
                    for (let c = i; c <= f; c += p) {
                    res.innerHTML += `${c} -> `
                } 
                } else {
                    //contagem descendo
                    for (let c = i; c >= f; c -= p) {                   
                    res.innerHTML += `${c} -> `
             }
        }
    }  res.innerHTML += 'FIM'
}
