// Vamos recriar o exercício Nacionalidade da aula de condicionais I, utilizando switch-case. No arquivo `script.js` existe uma versão do código já escrita, mas você pode colar o exercício que você fez na última prática!

// -> Relembrando o enunciado.

// Crie uma função que receba do usuário sua nacionalidade, utilize um prompt que diga: "Escreva aqui sua nacionalidade" e guarde o valor da resposta em uma const nacionalidade.

// Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:

// - brasileira;
// - argentina;
// - uruguaia;
// - chilena;
// - colombiana;

// Crie uma estrutura com o switch-case que verifique se a nacionalidade guardada na const nacionalidade, é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O programa deve imprimir "nacionalidade não encontrada" caso o valor de nacionalidade não corresponda a nenhum dos valores.
console.log("teste 2")

let nacionalidade = +(prompt(`digite aqui a nacionalidade
-1: brasileira;
-2: argentina;
-3: uruguaia;
-4: chilena;
-5: colombiana;`));

function naci(){
    if(nacionalidade ){
    
    switch (nacionalidade) {
            case 1:            
                console.log("Resposta: brasileira");
                console.log("Você é do Brasil!");
             
             break;
            case 2:  
                
                console.log("Você é da Argentina!");
                console.log("Resposta: argentina");
                break;
            case 3:  
    
                console.log("Resposta: uruguaia");
                console.log("Você é do Uruguai!");
                break;
            case 4:
                
                console.log("Resposta: chilena");
                console.log("Você é do Chile!");
                break;
            case 5:
                
                console.log("Resposta: colombiana");
                console.log("Você é da Colômbia!");
                break;
        
            default:
                console.log("nacionalidade não encontrada")
               
                break;
    }
    
    }
}

naci(nacionalidade)





