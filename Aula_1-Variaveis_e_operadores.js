convertButton.onclick = function () {
    let valor = prompt("Digite o valor em reais:");
    valor = parseFloat(valor);

    if (isNaN(valor)) {
        alert("Por favor, digite um número válido.");
        return;
    }

    const conversionRate = 5.49;
    let valorConvertido = valor / conversionRate;

    alert("O valor em USD é: $" + valorConvertido.toFixed(2));
};
