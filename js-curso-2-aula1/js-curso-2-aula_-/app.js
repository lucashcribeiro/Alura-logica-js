let numeroSecreto = gerarNumeroAleatorio();


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10.');  

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    console.log(numeroSecreto);
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10.';






// Em uma carreira de desenvolvimento de software, a prática consistente da lógica de programação desempenha um papel fundamental na construção de bases sólidas.

// A lógica de programação não apenas permite a criação de algoritmos eficientes e soluções elegantes, mas também desenvolve a capacidade de pensar de forma estruturada e analítica.Essa habilidade é essencial para enfrentar desafios complexos e transformar problemas abstratos em implementações tangíveis.

// Pensando nisso, criamos uma lista de atividades (não obrigatórias) focada em prática para melhorar ainda mais sua experiência de aprendizagem. Bora praticar então?

// Desafios
// Faça o download de outro projeto clicando neste link e abra no Visual Studio Code.

// Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

// Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

// Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.

// Caso precise de ajuda, opções de solução das atividades estarão disponíveis na seção “Opinião da pessoa instrutora”.


// Path: js-curso-2-aula_-/app.js O arquivo foi baixado na pasta da ALURA


// Resolução dos desafios 1
// Em uma carreira de desenvolvimento de software, a prática consistente da lógica de programação desempenha um papel fundamental na construção de bases sólidas. A lógica de programação não apenas permite a criação de algoritmos eficientes e soluções elegantes, mas também desenvolve a capacidade de pensar de forma estruturada e analítica. Essa habilidade é essencial para enfrentar desafios complexos e transformar problemas abstratos em implementações tangíveis.

// Pensando nisso, criamos uma lista de atividades (não obrigatórias) focada em prática para melhorar ainda mais sua experiência de aprendizagem.

// Sugestões de respostas
// Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio:
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Hora do Desafio';
// Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado:
// No index.html, adicionamos no onclick o seguinte código:

// <button onclick="exibirMensagemNoConsole()" class="button">Console</button>
// Já no app.js:
// function exibirMensagemNoConsole() {
//     console.log('O botão foi clicado!')
// }
// Crie uma função que exiba um alerta com a mensagem: Eu amo Js, sempre que o botão Alerta for pressionado:
// No index.html, adicionamos no onclick o seguinte código:

// <button onclick="exibirAlerta()" class="button">Alert</button>
// Já no app.js:
// function exibirAlerta() {
//     alert('Eu amo Js')
// }
// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você:
// No index.html, adicionamos no onclick o seguinte código:

// <button onclick="exibirPrompt()" class="button">Prompt</button>
// Já no app.js:
// function exibirPrompt() {
//     let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito:')
//     alert(`Estive em ${nomeDaCidade} e lembrei de você`)
// }
// Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.
// No index.html, adicionamos no onclick o seguinte código:

//  <button onclick="somandoDoisNumeros()" class="button">Soma</button>
// Já no app.js:
// function somandoDoisNumeros() {
//     let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
//     let segundoNumero = parseInt(prompt('Digite o segundo número'));
//     let resultado = primeiroNumero + segundoNumero;
//     alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
// }