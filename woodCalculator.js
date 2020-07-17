function woodCalculator(chair, table, bed) {
    var numberOfWoodForChair = 1 * chair;
    var numberOfWoodForTable = 3 * table;
    var numberOfWoodForBed = 5 * bed;
    var sum = numberOfWoodForChair + numberOfWoodForTable + numberOfWoodForBed;
    return sum;

}
var finalWoodNumber = woodcalculator(5, 7, 2);
console.log(finalWoodNumber);