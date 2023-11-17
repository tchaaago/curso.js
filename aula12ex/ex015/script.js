function verificar(){
    let data = new Date();
    let ano = data.getFullYear();
    let formANO = document.getElementById('txtANO');
    let res = document.querySelector('div#res');
    let img = document.createElement('img');
    img.setAttribute('id', 'foto')
    if (formANO.value.length == 0 || Number(formANO.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        let formGEN = document.getElementsByName('radGEN');
        let idade = ano - Number(formANO.value);
        let gênero = '';
        if (formGEN[0].checked){
            gênero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criaça
                img.setAttribute('src', 'criança-f.png');
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-f.png');
            } else if (idade <50){
                //adulto
                img.setAttribute('src', 'adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-f.png')
            }
        } else if (formGEN[1].checked){
            gênero = 'Homem'
            if (idade >=0 && idade < 10){
                //criaça
                img.setAttribute('src', 'criança-m.png');
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-m.png');
            } else if (idade <50){
                //adulto
                img.setAttribute('src', 'adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        } else if (formGEN [2].checked){
            gênero = 'Transgênero'
            if (idade >=0 && idade < 10){
                //criaça
                img.setAttribute('src', 'criança-t.png');
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-t.png');
            } else if (idade <50){
                //adulto
                img.setAttribute('src', 'adulto-t.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-t.png')
            }
        }
        res.innerHTML = `Detectamos você é <strong>${gênero}</strong> com <strong>${idade} anos</strong>.`
        res.appendChild(img)
    }
}