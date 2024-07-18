//chaves se chama desestruturação
// const objeto = require('./moduloA')
// console.log(objeto);
// console.log(objeto.nome);
// console.log(objeto.idade);

// const { nome, idade, soma, areaCirculo, PI } = require('./moduloA')
// console.log(nome);
// console.log(idade);
// console.log(soma(2,7));
// console.log(areaCirculo(2));
// console.log(PI);

// const moduloA = require('./moduloA');

// console.log(moduloA);
// console.log(moduloA.nome);
// console.log(moduloA.idade);
// console.log(moduloA.cidade);

const moduloA = require('./moduloA');
console.log(moduloA);

moduloA.map((item) => {
    console.log(item.time);
})
