function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    let horaAtual = new Date();
    let horas = horaAtual.getHours();
    let minutos = String(horaAtual.getMinutes()).padStart(2, "0");
    msg.innerHTML = `Agora são <strong>${horas}h${minutos}min</strong>.`;
    if (horas >= 0 && horas < 12){
        img.src = 'bomdia.png';
        document.body.style.background = '#22B9DD';
    } else if (horas >= 12 && horas < 18){
        img.src = 'boatarde.png';
        document.body.style.background = '#FF8C45';
    } else {
        img.src = 'boanoite.png';
        document.body.style.background = '#0F0235';
    }

}