module.exports = function reverse(number) {
    number = Math.abs(number);
    numberToString = number.toString();
    result = numberToString.split("").reverse().join("");
    stringToNumber = Number(result);
    return stringToNumber;
};
