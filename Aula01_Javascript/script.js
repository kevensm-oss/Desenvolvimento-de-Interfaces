/* =========================================================
   AULA 01 – JavaScript | CEUB ADS
   Os resultados dos Laboratórios 1 e dos exercícios de
   fixação aparecem no Console (F12 > Console).
   ========================================================= */

/* ---------- Laboratório 1: Cadastro simples de usuário ---------- */
const nomeUsuario = "Lucas Ferreira";
const email = "lucas@email.com";
let idadeUsuario = 24;
let usuarioAtivo = true;

console.log("DADOS DO USUÁRIO");
console.log("Nome:", nomeUsuario);
console.log("E-mail:", email);
console.log("Idade:", idadeUsuario);
console.log("Usuário ativo:", usuarioAtivo);

// Tarefa 4: ano de nascimento e idade estimada (referência 2026)
const anoNascimento = 2002;
const idadeEstimada = 2026 - anoNascimento;
console.log("Idade estimada:", idadeEstimada, "(pode variar conforme o aniversário)");

/* ---------- Exercícios de fixação ---------- */
console.log("---------- EXERCÍCIOS DE FIXAÇÃO ----------");

// 1. Cadastro de estudante
const nomeEstudante = "Ana Souza";
const matricula = "20261234";
const curso = "ADS";
let periodo = 1;
let situacaoAcademica = "Matriculado";
console.log("1.", nomeEstudante, matricula, curso, periodo, situacaoAcademica);

// 2. Compra
const preco = 150.00;
const quantidade = 3;
const valorTotal = preco * quantidade;
console.log("2. Valor total: R$", valorTotal); // 450

// 3. Desconto
const precoOriginal = 200.00;
const desconto = precoOriginal * 0.15;       // 30
const precoFinal = precoOriginal - desconto; // 170
console.log("3. Desconto: R$", desconto, "| Preço final: R$", precoFinal);

// 4. Comparação
const idade = 22;
console.log("4. idade > 18:", idade > 18);
console.log("4. idade < 18:", idade < 18);
console.log("4. idade === 18:", idade === 18);
console.log("4. idade >= 18:", idade >= 18);

// 5. Operadores lógicos
const possuiCadastro = true;
const contaAtiva = true;
console.log("5. idade mínima E cadastro:", idade >= 18 && possuiCadastro);
console.log("5. conta ativa OU cadastro:", contaAtiva || possuiCadastro);
console.log("5. conta NÃO ativa:", !contaAtiva);

// 6. Par ou ímpar
const numeroTeste = 7;
console.log("6.", numeroTeste, "é", numeroTeste % 2 === 0 ? "par" : "ímpar");

/* ---------- Laboratório 2: Calculadora de operações ---------- */
const botaoCalcular = document.getElementById("btnCalcular");

botaoCalcular.addEventListener("click", function () {
  const campo1 = document.getElementById("numero1");
  const campo2 = document.getElementById("numero2");
  const resultado = document.getElementById("resultado");

  if (campo1.value === "" || campo2.value === "") {
    resultado.innerHTML = '<span class="erro">Preencha os dois números.</span>';
    return;
  }

  const numero1 = Number(campo1.value);
  const numero2 = Number(campo2.value);

  const soma = numero1 + numero2;
  const subtracao = numero1 - numero2;
  const multiplicacao = numero1 * numero2;
  const divisao = numero2 === 0
    ? "Não é possível dividir por zero."
    : numero1 / numero2;

  resultado.innerHTML = `
    <p>Soma: ${soma}</p>
    <p>Subtração: ${subtracao}</p>
    <p>Multiplicação: ${multiplicacao}</p>
    <p>Divisão: ${divisao}</p>
  `;
});

/* ---------- Laboratório 3: Calculadora de média ---------- */
const botaoMedia = document.getElementById("calcular");

botaoMedia.addEventListener("click", function () {
  const campos = [
    document.getElementById("nota1"),
    document.getElementById("nota2"),
    document.getElementById("nota3")
  ];
  const saida = document.getElementById("resultadoMedia");

  // Rejeita campos vazios (Number("") daria 0, por isso checamos antes)
  if (campos.some(campo => campo.value === "")) {
    saida.innerHTML = '<span class="erro">Preencha as três notas.</span>';
    return;
  }

  const notas = campos.map(campo => Number(campo.value));

  // Notas somente entre 0 e 10
  if (notas.some(nota => nota < 0 || nota > 10)) {
    saida.innerHTML = '<span class="erro">As notas devem estar entre 0 e 10.</span>';
    return;
  }

  const media = (notas[0] + notas[1] + notas[2]) / 3;
  saida.innerHTML = `<span class="sucesso">Média: ${Number(media.toFixed(2))}</span>`;
});
