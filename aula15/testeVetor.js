let valores = [8, 1, 7, 4, 2, 9];

//console.log(valores)

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`);
}

for(let pos in valores){ //forma simplificada do for, essa sintaxe só funciona para objtes(arrais e etc)
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`);
}