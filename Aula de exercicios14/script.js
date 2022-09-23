function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas.`
    if (hora >= 5 && hora < 12) {
        //BOM DIA!
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#F5DEB3'

    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'fototarde.jpg'
        document.body.style.background = '#F4A460'
    } else if (hora >= 18 && hora < 0) {
        // BOA NOITE!
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#4F4F4F'
    } else {
        //Boa Madrugada!
        img.src = 'fotomadrugada.jpg'
        document.body.style.background = '#4B0082'
    }





}
