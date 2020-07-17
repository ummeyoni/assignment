function feetToMile(feet) {
    if (feet > 0) {
        var mile = feet / 5280;
        return mile;
    }
    return "distance cannot be negative";


}
var resultMile = feetToMile(1000);
console.log(resultMile);