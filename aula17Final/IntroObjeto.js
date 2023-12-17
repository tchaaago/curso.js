let amigo = {nome: 'José', gênero: 'M', peso: 83.6, ganharPeso(p){
    console.log('Engordou');
    this.peso += p;
}}

amigo.ganharPeso(2);
console.log(`${amigo.nome} pesa ${amigo.peso}kg.`);