var totalMonths = 0;
var netTotal = 0;
var totalChange = 0;
var avgChange = 0;
var maxIncreaseDate = "";
var maxIncreaseAmount = 0;
var maxDecreaseDate = "";
var maxDecreaseAmount = 0;

//adding the profit or loss for each month to the netTotal
for (var i = 0; i < finances.length; i++) {
  totalMonths++;
  netTotal += finances[i][1];

  //calculates the change in profit or loss from one month to the next
  if (i > 0) {
    var change = finances[i][1] - finances[i - 1][1];
    totalChange += change;
    //changes in profit/loss updated below
    if (change > maxIncreaseAmount) {
      maxIncreaseDate = finances[i][0];
      maxIncreaseAmount = change;
    }
    if (change < maxDecreaseAmount) {
      maxDecreaseDate = finances[i][0];
      maxDecreaseAmount = change;
    }
  }
}
//the average change
avgChange = totalChange / (totalMonths - 1);
//console.log(totalChange);

console.log("    " + "Financial Analysis \n ----------------------------");
console.log("Total Months: " + totalMonths);
console.log("Total: $" + netTotal);
console.log("Average Change: $" + avgChange);
console.log(
  "Greatest increase: " + maxIncreaseDate + ": $" + maxIncreaseAmount
);
console.log(
  "Greatest decrease: " + maxDecreaseDate + ": $" + maxDecreaseAmount
);
