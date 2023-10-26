var numero = prompt("Ingrese un número:");

numero = parseInt(numero);

if (isNaN(numero)) {
  alert("Por favor, ingrese un número válido.");
} else {
  var divisores = [];
  
  if (numero % 2 === 0) {
    divisores.push(2);
  }
  
  if (numero % 3 === 0) {
    divisores.push(3);
  }
  
  if (numero % 5 === 0) {
    divisores.push(5);
  }
  
  if (numero % 7 === 0) {
    divisores.push(7);
  }
  
  if (divisores.length === 0) {
    document.write("El número " + numero + " no es divisible por 2, 3, 5 ni 7.");
  } else {
    var mensaje = "El número " + numero + " es divisible por: " + divisores.join(', ');
    document.write(mensaje);
  }
}
