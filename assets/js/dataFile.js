var totalMonths = finances.length;// calculates total months

var netTotal = 0;

for (var i = 0; i < finances.length; i++) {// adds all the numbers in index 1 of the second array
    netTotal += finances[i][1];
}
console.log("    " + "Financial Analysis \n ----------------------------")
console.log("Total Months: " + totalMonths);
console.log("Total: $" + netTotal);
