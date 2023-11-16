let s: string = 'Javascript';
console.log('Eu estou aprendendo', s);
console.log('Eu estou aprendendo ' + s);
console.log(`Eu estou aprendendo ${s}`);

console.log(s.length);
s = s.toUpperCase();{
    console.log(s);
}
s = s.toLowerCase(); {
    console.log(s);
}

let n1: number = 1678.4
let n2 = n1.toFixed(4); {
    console.log(n2);
}

let aluno: string = 'Leandrinha';
let idade: number = 32;
let nota: number = 3.2;
    console.log("A aluna " + aluno + " com " + idade + " anos, tirou a nota: " + nota);
    console.log(`A aluna ${aluno} com ${idade} anos, tirou a nota ${nota}`);

let salário: number = 1350.6; {
    console.log(salário.toLocaleString('pt-Br', {style: 'currency', currency:'BRL'}));
    console.log(salário.toLocaleString('pt-Br', {style: 'currency', currency:'EUR'}));
    console.log(salário.toLocaleString('pt-Br', {style: 'currency', currency:'USD'}));

}
