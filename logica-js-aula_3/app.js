alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 3 + 1);
//parseInt transforma o número em inteiro, Math.random() gera um número aleatório entre 0 e 1, multiplicamos por 10 para gerar um número entre 0 e 10, e somamos 1 para que o número seja entre 1 e 10 
console.log(numeroSecreto)
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 3');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
       break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        // tentativas = tentativas + 1
        tentativas++
    }
}


let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);



// E vamos exercitar nosso conhecimento com mais uma lista de atividades (não obrigatório) para você praticar e reforçar ainda mais seu aprendizado!


// Desafios finais
// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

// Use um loop while para imprimir os números de 1 a 10 no console.

// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

// Caso precise de ajuda, opções de solução das atividades estarão disponíveis na seção “Opinião da pessoa instrutora”.


// Resolução dos desafios do curso de lógica de programação
// Praticar a lógica de programação, incluindo conceitos como variáveis, condicionais (if-else), loops (while) e interações com o usuário (alert, prompt), é essencial para sua carreira de desenvolvimento de software. Esses fundamentos fornecem a base para resolver problemas de forma estruturada, tomar decisões no código, criar iterações controladas e interagir eficazmente com os usuários.

// Compreender esses conceitos não apenas facilita o aprendizado de novas linguagens e tecnologias, mas também capacita você a criar soluções inovadoras, depurar eficientemente e manter a qualidade ao longo do ciclo de vida do software. Portanto, investir tempo nesses princípios desde cedo é fundamental para construir uma base sólida e bem-sucedida no campo da programação.

// Aquecendo na programação - Respostas
// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
// console.log('Boas vindas');
// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
// let nome = 'Gui Lima';
// console.log(`Olá, ${nome}!`);
// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!".
// let nome = 'Gui Lima';
// alert(`Olá, ${nome}!`);
// Utilize o prompt e faça a seguinte pergunta: Qual  a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
// let linguagemPreferida = prompt('Qual  a linguagem de programação que você mais gosta?');
// console.log(linguagemPreferida);
// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
// let valor1 = 42;
// let valor2 = 8;
// let resultado = valor1 + valor2;

// console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`)
// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
// let valor1 = 10;
// let valor2 = 8;
// let resultado = valor1 - valor2;

// console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);
// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
// let idade = prompt('Digite a sua idade:');
// if (idade > 17) {
//     console.log('Você é maior de idade.');
// } else {
//     console.log('Você é menor de idade.');
// }
// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
// var numero = parseFloat(prompt("Digite um número:"));


// if (numero > 0) {
//     console.log("O número é positivo.");
// } else if (numero < 0) {
//     console.log("O número é negativo.");
// } else {
//     console.log("O número é zero.");
// }
// Use um loop while para imprimir os números de 1 a 10 no console.
// let numero = 1;
// while (numero <= 10) {
//     console.log(numero);
//     numero++;
// }
// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
// let nota = 8; // Substitua pelo valor da nota que deseja testar

// if (nota >= 7) {
//     console.log("Aprovado");
// } else {
//     console.log("Reprovado");
// }
// Use o Math.ramdon para gerar qualquer número aleatório e exiba esse número no console.
// let numeroAleatorio = Math.random();
// console.log(numeroAleatorio);
// Use o Math.ramdon para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
// let numeroInteiroAleatorio = parseInt(Math.random() * 10) + 1;
// console.log(numeroInteiroAleatorio);
// Use o Math.ramdon para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
// let numeroInteiroAleatorio = parseInt(Math.random() * 1000) + 1;
// console.log(numeroInteiroAleatorio);