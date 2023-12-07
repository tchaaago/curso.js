let num = [3, 4, 5, 9, 2];
num.push(1);
num.sort();
console.log(num);
console.log(`O vetor tem ${num.length} posiçoes.`);
console.log(`O primeiro valor do vetor é ${num[0]}.`);
let pos = num.indexOf(6)
if (pos == -1){
    console.log('O valor nao foi encontrado!');
} else {
    console.log(`O valor 3 está na posiçao ${pos}`);
}

/*
num[5] = 0
num.push(7)
num.length
num.sort()
num.indexOf(7)
*/