function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('idade')
    var res = document.getElementById('res')


    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERRO] verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('ig', 'foto')
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebehomi.jpg')

            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'preadohomi.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homi.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'veio.jpg')
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebemuie.jpg')

            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'preadomuie.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'muie.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'veia.jpg')
            }
        }


    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)

}