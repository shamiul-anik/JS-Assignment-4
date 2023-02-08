// Problem 3: Is Less or Greater than seven

// তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।
// এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে।
// যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input।
// মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।

// Input: 6
// Output: -1

// Input: -15
// Output: -22

// Input: 15
// Output: 30

/************************************************************************

Problem 3: Is Less or Greater than seven

Function Name: isLGSeven()

Function Description: This function will take a number as parameter. 
Here, the task is to check the difference (subtraction result = inputValue - 7) between the input value and 7.
If the difference is less than 7, then return the subtraction result.
Otherwise, return the double of the input value.
Also return an error message if the given argument is not a number.

************************************************************************/


function isLGSeven(inputNumber){
  const differenceValue = inputNumber - 7;
  if (typeof (inputNumber) !== 'number') {
    return "Please enter a number";
  }
  else if (differenceValue < 7) {
    return differenceValue;
  }
  else {
    return inputNumber*2;
  }
}

const inputNumber = -15; /* Enter your desired input here for checking */
const outputValue = isLGSeven(inputNumber);
console.log(outputValue);
