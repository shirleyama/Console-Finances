/////////////////////////////////////////////////////////////////////////
//The total number of months included in the dataset.

var totalMonths = finances.length;// calculates total number of months


//////////////////////////////////////////////////////////////////////////
//The net total amount of Profit/Losses over the entire period.

var netTotal = 0;
for (var i = 0; i < finances.length; i++) {// adds all the numbers in index 1 ie the second array
    netTotal += finances[i][1];
    arrAmounts = finances[i];
    // console.log(i + "finances" + arrAmounts);//lists months and correspondong amounts
    //   console.log("finances[i][1]" + finances[i][1]);//  lists the amounts in the array, index 1 position
}
//console.log("    " + "Financial Analysis \n ----------------------------")
//console.log("Total Months: " + totalMonths);
//console.log("Total: $" + netTotal);



////////////////////////////////////////////////////////////////////////////////
//Logic for tracking what the total changes in profits are from month to month

var netChange = 0;
var n = finances.length;
var changePerMonth = 0; //stores the change per month
var changeArray = [];
for (var i = 0; i < n - 1; i++) {
    changePerMonth = (finances[i][1] - finances[i + 1][1]); // difference between consecutive numbers
    // console.log(finances[i][1] + " minus " + finances[i + 1][1] + " equals " + changePerMonth);
    //  console.log("finances[i][1]" + finances[i][1])
    netChange += changePerMonth; //find the total changes in profits from month to month
    // console.log(finances[i][0] + " Change per month: $" + netChange);
    changeArray.push(finances[i][1] - finances[i + 1][1]); //create an array from the changes obtained for each month
    //console.log(i + " Change array: $" + changeArray);
    // console.log(" Change Array: $" + changeArray[i]);

    //console.log(" Change Array inside for: $" + changeArray[i]);  
}

//console.log(changeArray);

////////////////////////////////////////////////////////////////////////////////////////////
//The average of the **changes** in Profit/Losses over the entire period.

var avgChange = 0;//average net change is total net change divided by total months


avgChange = netChange / totalMonths;//average net change is total net change divided by total number of months
//console.log(netChange + " divided by " + totalMonths + " equals Total net change: $" + avgChange);

avgChange = avgChange.toFixed(2);//rounds the output to 2 decimal places
//console.log (avgChange)

//console.log(netChange + " divided by " + totalMonths + " equals Total net change: $" + avgChange);

//console.log("Average Change: $" + avgChange);



///////////////////////////////////////////////////////////////////////////////////////////
//The greatest increase in profits (date and amount) over the entire period.

var maxIncrease = Math.max(...changeArray);//calculates the greatest increase
//console.log("Greatest increase: $" + maxIncrease);

var indexMax = changeArray.indexOf(maxIncrease);//Finds the index of the greatest increase
//console.log(indexMax);
var greatestMonthIncrease = finances[indexMax][0];//Finds the date corresponding with the index of the greatest increase

//console.log("Greatest increase: " + greatestMonthIncrease + ": $" + maxIncrease);

///////////////////////////////////////////////////////////////////////////////////////////
//The greatest increase in profits (date and amount) over the entire period.

var maxDecrease = Math.min(...changeArray);
//console.log("Greatest decrease: $ " + maxDecrease);//calculates the greatest decrease

var indexMin = changeArray.indexOf(maxDecrease);//Finds the index of the greatest decrease
//console.log(indexMin);

var greatestMonthDecrease = finances[indexMin][0];//Finds the date corresponding with the index of the greatest decrease

//console.log("Greatest decrease: " + greatestMonthDecrease + ": $" + maxDecrease);


//////////////////////////////////////////////////////////////////////////////////
// Final output to console

console.log("    " + "Financial Analysis \n ----------------------------")
console.log("Total Months: " + totalMonths);
console.log("Total: $" + netTotal);
console.log("Average Change: $" + avgChange);
console.log("Greatest increase: " + greatestMonthIncrease + ": $" + maxIncrease);
console.log("Greatest decrease: " + greatestMonthDecrease + ": $" + maxDecrease);








