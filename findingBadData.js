// Problem 4: Finding Bad data

// তোমাকে একটা function দেওয়া হবে called findingBadData().এটা ইনপুট হিসেবে একটা array নিবে।
// array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number(less than zero) ও
// হতে পারে, আবার positive number(greater than or equal to zero) ও হতে পারে।
// কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয়
// সেটাকে আমরা বলব “Good Data”.
// এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং
// সেই নাম্বার টা return করতে হবে।

// Sample Input & Output: -

// Input: [1, 2, 5]
// Output: 0

// Input: [2, -5, -7, -13]
// Output: 3

// Input: [-4, -9, -5, -33, -55]
// Output: 5



/************************************************************************

Problem 4: Finding Bad data

Function Name: findingBadData()

Function Description: This function will take an array as parameter. This array can have positive(greater than or equal to zero) and negative (less than zero) numbers. 
Number with negative value is considered as "Bad Data" and number with positive value is considered as "Good Data".
Here, the task is to count the number of "Bad Data" present in the array and return that number.

Also return an error message if the given argument is something other than an array.

************************************************************************/


function findingBadData(inputNumbers) {
  let badDataCounter = 0;
  if (Array.isArray(inputNumbers) == true) {
    for (i = 0; i < inputNumbers.length; i++) {
      if (typeof (inputNumbers[i]) !== "number") {
        return "Please enter an array with numbers.";
      }
      else if (inputNumbers[i] < 0 && typeof (inputNumbers[i]) == "number") {
        badDataCounter++;
      }
    }
    return badDataCounter;
  }
  else {
    return "Please enter an array with numbers.";
  }
}

const inputNumbers = [10, -12, -11]; /* Enter your desired input here for checking */
// let checkType = typeof(inputNumbers);
// console.log(checkType);

const outputValue = findingBadData(inputNumbers);
console.log(outputValue);



// function findingBadData(inputNumbers) {
//   let badDataCounter = 0;
//   const inputType = Array.isArray(inputNumbers);
//   console.log(inputType);
//   if (Array.isArray(inputNumbers) == true) {
//     for (i = 0; i <= inputNumbers.length; i++) {
//       if (inputNumbers[i] < 0 && typeof (inputNumbers[i]) == "number") {
//         badDataCounter++;
//       }
//       else {

//       }
//     }
//     return badDataCounter;
//   }
//   else {
//     return "Please enter an array with numbers.";
//   }
// }