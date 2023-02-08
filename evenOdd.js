// Problem 2: Finding even or odd

// তোমাকে একটা function দেওয়া হবে called evenOdd().এটা ইনপুট হিসেবে একটা string নিবে।
// এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘even’ অথবা ‘odd’ ।

// Sample Input & Output:

// Input: ‘Phero’
// Output: odd

// Input: ‘Batch7’
// Output: even

// Input: ‘chatgpt’
// Output: odd


/************************************************************************

Problem 2: Finding even or odd

Function Name: evenOdd()

Function Description: This function will take a string as parameter. 
Here, the task is to check the number of characters in the given string and
if the number of characters is even, then return 'even' otherwise return 'odd'.
Also return an error message if the given argument is not a string.

************************************************************************/


function evenOdd(inputString) {
  const strLength = inputString.length;
  const inputType = typeof (inputString);
  if (strLength % 2 === 0 && inputType == 'string') {
    return 'even';
  }
  else if (strLength % 2 !== 0 && inputType == 'string') {
    return 'odd';
  }
  else {
    return "Please enter a string";
  }
}

const inputString = 'false'; /* Enter your desired input here for checking */
const checkEvenOdd = evenOdd(inputString);
console.log(checkEvenOdd);
