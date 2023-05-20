export function formatNumberToCurrency(number) {
    if (Number.isNaN(number))
        return "Invalid number";
    var numberString = number.toString().replace(",", ".");
    if (numberString.indexOf(".") !== -1) {
        var parts = numberString.split(".");
        var integerPart = parts[0];
        var decimalPart = parts[1];

        integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        numberString = integerPart + "." + decimalPart;
    } else {
        numberString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return numberString.split('.')[1] <= 9 ? numberString + "0" : numberString
}
