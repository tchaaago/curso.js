function contar(){
    let ini = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let res = document.getElementById('res');

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //window.alert('[ERROR] Faltam dados!') 
        res.innerHTML = 'Num vai pular não, amore!';
    } else {
        res.innerHTML = 'Contando: <br>';
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (i < f) {
            //essa sintaxe é para contagem crescente
            for (let c = i; c <= f; c += p) { // utilizando o for para que o contador comece no inicio (o numero indicado na caixa) enquanto ele for menor ou igual ao fim ele vai receber o valor indicado nele mesmo, mais o passo (valor que foi indicado)
                res.innerHTML += `\u{1F30A} ${c} `; // vai ser o que ele já tem mais a string formatada
            } 
        } else {
            //essa sintaxe é para contagem descrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `\u{1F30A} ${c} `;
            }
        }
        res.innerHTML += ` \u{1F386}`;
    }
}