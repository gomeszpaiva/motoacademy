// const arra = ["a", "b", "c", "d"];
// console.log(arra.slice(1,2));

// const arra2 = ["a", "b", "c", "d"];
// console.log(arra2.slice(1,2));

var arr = ["1", "2", "3","4", "5"]

//array push - adiciona mais um elementro à array
// console.log(arr.push("Aula4"))
// console.log(arr);


//array pop - apaga o último elemento da array
// console.log(arr.pop()); 
// console.log(arr);

//array shift - apaga o primeiro elemento da array
// console.log(arr.shift());
// console.log(arr);

//array sort - ordena os numeros do menor para o maior e tambem em orde alfabetica
// arr.sort();
// console.log(arr);

//array fill - substitui os elementos por outro elemento que eu quero
// console.log(arr.fill('A',2));

const found = arr.find((e) => e <= 3);
console.log(found);