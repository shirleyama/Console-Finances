//The total number of months included in the dataset.
var totalMonths = finances.length;// calculates total number of months

//The net total amount of Profit/Losses over the entire period.
var netTotal = 0;
for (var i = 0; i < finances.length; i++) {// adds all the numbers in index 1 ie the second array
    netTotal += finances[i][1];
    //arrAmounts = finances[i];
    //   console.log("finances arrAmounts" + arrAmounts);//lists months and correspondong amounts
    //   console.log("finances[i][1]" + finances[i][1]);//  lists the amounts in the array, index 1 position
}
//console.log("    " + "Financial Analysis \n ----------------------------")
//console.log("Total Months: " + totalMonths);
//console.log("Total: $" + netTotal);



/////////////////////////////////////////////////////////////////////////
//The average of the **changes** in Profit/Losses over the entire period.

var netChange = 0;
var n = finances.length;
var changePerMonth = 0; //stores the change per month
var changeArray = [];
for (var i = 0; i < n-1; i++) {
    changePerMonth = (finances[i][1] - finances[i + 1][1]); // difference between consecutive numbers
    // console.log(finances[i][1] + " minus " + finances[i + 1][1] + " equals " + changePerMonth);
    //  console.log("finances[i][1]" + finances[i][1])
    netChange += changePerMonth; //find the sum of the changes
    console.log(finances[i][0] + " Change per month: $" + netChange);
    changeArray.push(finances[i][1] - finances[i + 1][1]);
    //console.log(i + " Change array: $" + changeArray);
   // console.log(" Change Array: $" + changeArray[i]);
   
   //console.log(" Change Array inside for: $" + changeArray[i]);  
}


//console.log(changeArray);

var maxIncrease = Math.max(...changeArray);//calculates the greatest increase
//console.log(i + "Greatest increase: $" + maxIncrease);

var maxDecrease = Math.min(...changeArray);
////console.log(i + "Greatest decrease: $ " + maxDecrease);//calculates the greatest decrease


//average net change is total net change divided by total months
var avgChange = 0;

//average net change is total net change divided by total month

avgChange = netChange / totalMonths;
//console.log(netChange + " divided by " + totalMonths + " equals Total net change: $" + avgChange);

avgChange = avgChange.toFixed(2);
//console.log (avgChange)

//console.log(netChange + " divided by " + totalMonths + " equals Total net change: $" + avgChange);

//console.log("Average Change: $" + avgChange);


/////////////////////////////////////////////////////////////////////////////
console.log("    " + "Financial Analysis \n ----------------------------")
console.log("Total Months: " + totalMonths);
console.log("Total: $" + netTotal);
console.log("Average Change: $" + avgChange);
console.log("Greatest increase: $" + maxIncrease);
console.log("Greatest decrease: $" + maxDecrease);








