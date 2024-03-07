**Desafios - Loops e Tentativas**



Esses foram os códigos que eu tentei criar para os desafios propostos:

Desafio 1: Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

```bash
let contador = 1;
while (contador <=10){
  alert (contador);
  contador ++
}
COPIAR CÓDIGO
```

Desafio 2: Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

```javascript
let contador = 10;
while (contador =>0){
  alert (contador)
  contador--
}
COPIAR CÓDIGO
```

Desafio 3: Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

```bash
let numero = prompt ("Digite um número para Contagem Regressiva")
while (numero >=0) {
  alert (numero)
  numero--
}
COPIAR CÓDIGO
```

Desafio 4: Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

```bash
let numero = prompt ("Digite um número para Contagem Progressiva")
while (numero <=10) {
  alert (numero)
  numero++ 
}
COPIAR CÓDIGO
```



Excelentes códigos, parabéns pela elaboração! A prática é essencial para consolidarmos o nosso aprendizado e nesse processo caso haja alguma dúvida pode contar aqui com a gente no fórum, estou à disposição e ficarei super feliz em poder ajudar!

Deixo apenas uma sugestão de melhoria no Desafio 2, onde usamos o operador '=>' ao invés de '>=', o que pode estar causando um comportamento inesperado. Devemos deixar, então, o nosso código da seguinte maneira:

```javascript
let contador = 10;
while (contador >= 0){
  alert (contador);
  contador--;
}
```