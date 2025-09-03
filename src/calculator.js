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
function subtract(a, b) {
  // A função deveria subtrair, mas está somando. Isto é um bug.
  return a + b;
}

// PROBLEMA 2: BUG - Lógica incorreta
function subtract(a, b) {
  // A função deveria subtrair, mas está somando. Isto é um bug.
  return a + b;
}

// PROBLEMA 2: BUG - Lógica incorreta
function subtract(a, b) {
  // A função deveria subtrair, mas está somando. Isto é um bug.
  return a + b;
}

// PROBLEMA 2: BUG - Lógica incorreta
function subtract(a, b) {
  // A função deveria subtrair, mas está somando. Isto é um bug.
  return a + b;
}

// PROBLEMA 2: BUG - Lógica incorreta
function subtract(a, b) {
  // A função deveria subtrair, mas está somando. Isto é um bug.
  return a + b;
}

// PROBLEMA 2: BUG - Lógica incorreta
function subtract(a, b) {
  // A função deveria subtrair, mas está somando. Isto é um bug.
  return a + b;
}

// PROBLEMA 2: BUG - Lógica incorreta
function subtract(a, b) {
  // A função deveria subtrair, mas está somando. Isto é um bug.
  return a + b;
}

module.exports = { add, addWithExtraLogging, subtract };