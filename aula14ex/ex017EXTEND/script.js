function tabuada() {
    let num = document.getElementById('txtn').value;
    let tab1 = document.getElementById('seltabSoma');
    let tab2 = document.getElementById('seltabSub');
    let tab3 = document.getElementById('seltabMult');
    let tab4 = document.getElementById('seltabDiv');

    if (num.length == 0) {
        window.alert('Por favor, digite um número!');
    } else {
        num = Number(num);
        tab1.innerHTML = '';
        tab2.innerHTML = '';
        tab3.innerHTML = '';
        tab4.innerHTML = '';

        for (let c = 1; c <= 10; c++) { // o uso do for nessa situaçao simplifica o código, colocando ele no topo a condiçao determinada vai ser utilizada para o restante do código
            // somar
            let item1 = document.createElement('option');
            item1.text = `${num} + ${c} = ${num + c}`;
            tab1.appendChild(item1);

            // subtrair
            let item2 = document.createElement('option');
            item2.text = `${num} - ${c} = ${num - c}`;
            tab2.appendChild(item2);

            // multiplicar
            let item3 = document.createElement('option');
            item3.text = `${num} * ${c} = ${num * c}`;
            tab3.appendChild(item3);

            // dividir
            let item4 = document.createElement('option');
            item4.text = `${num} / ${c} = ${num / c}`;
            tab4.appendChild(item4);
        }
    }
}