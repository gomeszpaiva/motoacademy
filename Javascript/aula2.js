const pessoas = [
    {
        nome: "Dani",
        idade: 17,
        profissao: "Analista de Sistema"
    },
    {
        nome: "Linton",
        idade: 35,
        profissao: "Analista de Sistema"
    },
    {
        nome: "Francisco",
        idade: 28,
        profissao: "Analista de Sistema"
    },
    {
        nome: "Adriana",
        idade: 20,
        profissao: "Analista de Sistema"
    }
]
//pessoas.length pega a quantidade de orray sem necessidade de sabe o tamanho do array 
for(let contador = 0; contador < pessoas.length; contador++){
    if(pessoas[contador].idade > 22){
        console.log(pessoas[contador]);
    }
}
//for tende a ser um pouco mais rapido, map é uma função com diversas coisas dentro delas
pessoas.map((pessoa) => {
    if(pessoa.idade > 22){
        console.log(pessoa);
    }
})

const testePessoas = pessoas.filter((pessoa) => pessoa.idade > 22);
console.log(testePessoas);

const testePessoas = pessoas.filter((pessoa) => pessoa.nome != "Dani");
console.log(testePessoas);