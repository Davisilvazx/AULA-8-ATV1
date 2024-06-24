function getValue() {
    var inputElement = document.getElementById('inputValue');

    if (inputElement) {
        var value = inputElement.value;

        console.log('Valor do input:', value);
    } else {
        console.error('Elemento input não encontrado.');
    }
}
