var numero = parseFloat(prompt("Ingrese un número:"));

if (numero % 2 === 0) {
    document.write(`${numero} es divisible por 2.`);
} else {
    document.write(`${numero} no es divisible por 2.`);
}