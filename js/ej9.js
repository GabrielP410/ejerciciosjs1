var frase = prompt("Ingrese una frase:");
function esVocal(caracter) {
    caracter = caracter.toLowerCase();
    return (caracter == 'a' || caracter === 'e' || caracter == 'i' || caracter == 'o' || caracter == 'u');
}
for (var i = 0; i < frase.length; i++) {
    var caracterActual = frase.charAt(i);

    if (esVocal(caracterActual)) {
        document.write(caracterActual);
    }
}