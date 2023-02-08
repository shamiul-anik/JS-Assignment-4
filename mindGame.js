// Problem 1: Let’s play a mind game
// তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")

// এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে
// Sample Input & Output
// Input: 5
// Output: 7.5

// Input: 50
// Output: 75

// Input: 33
// Output: 49.5

/************************************************************************

Problem 1: Let’s play a mind game

Function Name: mindGame()

Function Description: This function will take a positive number as input. 
Here, the task is to multiply that number with 3, then add 10 with the result, 
then divide the result by 2 and finally subtract 5 from the result 
and return the output. 
Also return an error message if the given argument is not a positive number.

************************************************************************/

function mindGame (inputNumber) {
  if (inputNumber > 0 && typeof(inputNumber) == 'number') {
    const result = (((inputNumber*3)+10)/2)-5;
    return result;
  }
  else {
    return "Please enter a positive number";
  }
}

const inputNumber = 5; /* Enter your desired input here for checking */
const output = mindGame(inputNumber);
console.log(output);