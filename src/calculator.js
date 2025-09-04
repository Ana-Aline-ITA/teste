// Este arquivo contém problemas para serem detectados pelo SonarQube

// PROBLEMA 1: CODE SMELL - Código duplicado
function add(a, b) {
  // Esta lógica é complexa sem necessidade para um exemplo
  console.log("Realizando uma soma...");
  const result = a + b;
  console.log(`O resultado é ${result}`);
  return result;
}

function addWithExtraLogging(a, b) {
  // Esta função é quase idêntica à de cima, o que é um code smell de duplicação.
  console.log("Realizando uma soma com log extra...");
  const result = a + b;
  console.log(`O resultado final da operação é ${result}`);
  return result;
}

// PROBLEMA 2: BUG - Lógica incorreta
function subtract(a, b) {
  // A função deveria subtrair, mas está somando. Isto é um bug.
  return a + b;
}

// PROBLEMA 2: BUG - Lógica incorreta
function a(a, b) {
  // A função deveria subtrair, mas está somando. Isto é um bug.
  return a + b;
}

// PROBLEMA 2: BUG - Lógica incorreta
function b(a, b) {
  // A função deveria subtrair, mas está somando. Isto é um bug.
  return a + b;
}

// PROBLEMA 2: BUG - Lógica incorreta
function c(a, b) {
  // A função deveria subtrair, mas está somando. Isto é um bug.
  return a + b;
}

// PROBLEMA 2: BUG - Lógica incorreta
function d(a, b) {
  // A função deveria subtrair, mas está somando. Isto é um bug.
  return a + b;
}

// PROBLEMA 2: BUG - Lógica incorreta
function e(a, b) {
  // A função deveria subtrair, mas está somando. Isto é um bug.
  return a + b;
}

// PROBLEMA 2: BUG - Lógica incorreta
function f(a, b) {
  // A função deveria subtrair, mas está somando. Isto é um bug.
  return a + b;
}
// PROBLEMA 2: BUG - Lógica incorreta
function g(a, b) {
  // A função deveria subtrair, mas está somando. Isto é um bug.
  return a + b;
}
// PROBLEMA 2: BUG - Lógica incorreta
function h(a, b) {
  // A função deveria subtrair, mas está somando. Isto é um bug.
  return a + b;
}
// PROBLEMA 2: BUG - Lógica incorreta
function i(a, b) {
  // A função deveria subtrair, mas está somando. Isto é um bug.
  return a + b;
}
// PROBLEMA 2: BUG - Lógica incorreta
function j(a, b) {
  // A função deveria subtrair, mas está somando. Isto é um bug.
  return a + b;
}
// PROBLEMA 2: BUG - Lógica incorreta
function k(a, b) {
  // A função deveria subtrair, mas está somando. Isto é um bug.
  return a + b;
}
// PROBLEMA 2: BUG - Lógica incorreta
function l(a, b) {
  // A função deveria subtrair, mas está somando. Isto é um bug.
  return a + b;
}
// PROBLEMA 2: BUG - Lógica incorreta
function m(a, b) {
  // A função deveria subtrair, mas está somando. Isto é um bug.
  return a + b;
}
// PROBLEMA 2: BUG - Lógica incorreta
function n(a, b) {
  // A função deveria subtrair, mas está somando. Isto é um bug.
  return a + b;
}
// PROBLEMA 2: BUG - Lógica incorreta
function o(a, b) {
  // A função deveria subtrair, mas está somando. Isto é um bug.
  return a + b;
}

module.exports = { add, addWithExtraLogging, subtract };