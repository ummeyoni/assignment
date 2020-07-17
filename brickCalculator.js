function brickCalculator(floor) {
    i = 1;
    if (i <= 10) {
        floor1 = floor * 15;
        var numOfBricks1 = 1000 * floor1;
        return numOfBricks1;
    } else if (i == 11 && i <= 20) {
        floor2 = (floor - 10) * 12;
        var numOfBricks2 = 1000 * floor2;
        var final2 = 150000 + numOfBricks2;
        return final2;
    } else {
        floor3 = (floor - 20) * 10;
        var numOfBricks3 = 1000 * floor3;
        var final3 = 270000 + numOfBricks3;
        return final3;
    }
}
var result = brickCalculator(11);
console.log(result);