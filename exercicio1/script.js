//aninhamento
console.log("teste 1 aninhado");
const numero = +(prompt("insira um numero"));

if(numero % 2 ===0){

    if (numero % 3 ===0 ){
        console.log(`${numero} é divisivel por 2 e por 3`);

    }else {
        console.log(`${numero} é divisivel por 2 mas não por 3`);
    }

}
else if(numero % 3 ===0 ){console.log(`${numero} é divisivel por 3 mas não por 2`);

}else{
    console.log(`${numero} não é divisivel por 2 e por 3`)};








// //operador logico
// const numero1 = +(prompt("insira um numero"));

// console.log("teste 2 operador logico");

// if(numero1 % 2 ===0 || numero1 % 3 ===0 ){
//     console.log(`${numero1} é divisivel por 2 ou por 3`) 

// }else{
//     console.log(`${numero1} não é divisivel por 2 e por 3`)};


