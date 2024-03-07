// alert('Boas vindas ao jogo do número secreto');
// let numeroSecreto = 5;
// console.log(numeroSecreto);
// let chute;
// let tentativas = 1

// // enquanto o chute nao for igual ao n.s.

// while (chute != numeroSecreto) {
//     chute = prompt('Escolha um número entre 1 e 10.');
//     if (chute == numeroSecreto) {
//         alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}com ${tentativas} tentativas`);
//     } else {
//         if (chute > numeroSecreto) {
//             alert(`O número secreto é menor que ${chute}`);
//         } else {
//             alert(`O número secreto é maior que ${chute}`);
//         }
//         // tentativas = tentativas + 1;
//         tentativas++;
//     }
// }




// // código omitido

//     // se chute for igual ao número secreto
//     if (chute == numeroSecreto) {
//         alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
//     } else {
//         if (chute > numeroSecreto) {
//             alert(`O número secreto é menor que ${chute}`);
//         } else {
//             alert(`O número secreto é maior que ${chute}`);
//         }
//         tentativas = tentativas + 1;
//     }

// // código omitido

// else {
//     alert('Você errou :(')
// }

//enquanto while (enquanto o chute nao for ...)



// alert('Boas vindas ao jogo do número secreto');
// let numeroSecreto = 9;
// console.log(numeroSecreto)
// let chute = prompt('Escolha um número entre 1 e 10');

// // se chute for igual ao número secreto


// while

// if (chute == numeroSecreto) {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
// }  if (chute > numeroSecreto) {
//     alert(`O número secreto é menor que o ${chute}`);
// }  if (chute < numeroSecreto) {
//     alert(`O número secreto é maior que o ${chute}`);
// }  
// // else {
// //     alert('Você errou :(')
// // }

// //enquanto while (enquanto o chute nao for ...)




// let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
// let soma = 0;
// let contador = qtdNumeros;

// while(contador > 0){
//     let numero = parseInt(prompt('Digite o numero:'));
//     soma += numero;
//     contador--;
// }

// let media = soma / qtdNumeros;

// console.log(media);


// let qtdNumeros = parseInt(prompt('Digite a quantidade de números para o cálculo da média:'));
// let soma = 0;
// let contador = qtdNumeros;

// while (contador > 0) {
//     let numero = parseInt(prompt('Digite o numero:'));
//     soma += numero;
//     contador--;  // Decrementa o contador para eventualmente sair do loop
// }

// let media = soma / qtdNumeros;

// console.log(media);

DESAFIO PRATICO

// Chegamos em mais uma lista de atividades (não obrigatórias) para você praticar e reforçar ainda mais seu aprendizado.Bora?!


// Desafios
// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

// Caso precise de ajuda, opções de solução das atividades estarão disponíveis na seção “Opinião da pessoa instrutora”.


Resolução dos desafios do curso de lógica de programação
// Praticar a lógica de programação, incluindo conceitos como variáveis, condicionais (if-else), loops (while) e interações com o usuário (alert, prompt), é essencial para sua carreira de desenvolvimento de software. Esses fundamentos fornecem a base para resolver problemas de forma estruturada, tomar decisões no código, criar iterações controladas e interagir eficazmente com os usuários.

// Compreender esses conceitos não apenas facilita o aprendizado de novas linguagens e tecnologias, mas também capacita você a criar soluções inovadoras, depurar eficientemente e manter a qualidade ao longo do ciclo de vida do software. Portanto, investir tempo nesses princípios desde cedo é fundamental para construir uma base sólida e bem-sucedida no campo da programação.

// Desafios - Respostas
// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
// let contador = 1;
// while (contador <= 10) {
//     console.log(contador);
//     contador++;
// }
// Crie um contador que comece em 10 e vá até 0 usando um loop while. Mostre cada número.
// let contador = 10;
// while (contador >= 0) {
//     console.log(contador);
//     contador--;
// }
// Crie um programa de contagem regressiva. Peça um número ao usuario e conte deste número até 0, usando um loop while no console do navegador.
// let numeroMaximo = prompt("Digite um número para a contagem regressiva:");

// while (numeroMaximo >= 0) {
//     console.log(numeroMaximo);
//     numeroMaximo--;
// }
// Crie um programa de contagem progressiva. Peça um número ao usuario e conte de 0 até esté número, usando um loop while no console do navegador.
// let numeroMaximo = prompt("Digite um número para a contagem progregressiva:");;
// let contador = 0;

// while (contador <= numeroMaximo) {
//     console.log(contador);
//     contador++
// }