/************************************************************************

Problem 1: Let’s play a mind game

Function Name: mindGame()

Function Description: This function will take a positive number as input. 
Here, the task is to multiply that number with 3, then add 10 with the result, 
then divide the result by 2 and finally subtract 5 from the result and finally return it. 
Also return an error message if the given input is not a positive number.

************************************************************************/

function mindGame(inputNumber) {
  if (inputNumber > 0 && typeof (inputNumber) == 'number') {
    const result = (((inputNumber * 3) + 10) / 2) - 5;
    return result;
  }
  else {
    return "Please enter a positive number";
  }
}




/************************************************************************

Problem 2: Finding even or odd

Function Name: evenOdd()

Function Description: This function will take a string as input. 
Here, the task is to check the number of characters in the given string and
if the number of characters (string length) is even, then return 'even' otherwise return 'odd'.
Also return an error message if the given input is not a string.

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





/************************************************************************

Problem 3: Is Less or Greater than seven

Function Name: isLGSeven()

Function Description: This function will take a number as input. 
Here, the task is to check the difference (subtraction result = inputValue - 7) between the input value and 7.
If the difference is less than 7, then return the subtraction result.
Otherwise, return the double of the input value.
Also return an error message if the given input is not a number.

************************************************************************/


function isLGSeven(inputNumber) {
  const differenceValue = inputNumber - 7;
  if (typeof (inputNumber) !== 'number') {
    return "Please enter a number";
  }
  else if (differenceValue < 7) {
    return differenceValue;
  }
  else {
    return inputNumber * 2;
  }
}





/************************************************************************

Problem 4: Finding Bad data

Function Name: findingBadData()

Function Description: This function will take an array as input. This array can have positive(greater than or equal to zero) and negative (less than zero) numbers. 
Number with negative values are considered as "Bad Data" and number with positive values are considered as "Good Data".
Here, the task is to count the number of "Bad Data" present in the array and return that number.
Also return an error message if the given input is not an array.

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





/************************************************************************

Problem 5: Convert your gems into diamond

Function Name: gemsToDiamond()

Function Description: This function will take three numbers as input. 
These numbers refers to the number of gems of three friends.

Given that,
The power of each gems of first friend = 21
The power of each gems of second friend = 32
The power of each gems of third friend = 43

[ Here, the power of gems refers to the ability of converting each gems into diamonds.
So, we can say totalNumberOfDiamonds = (powerOfGems * numberOfGems) ]

Here, the task is to find out and return the total number of diamonds of three friends.
If the number of total diamonds is greater than double of 1000 (1000*2=2000), in that case 2000 should be subtracted from total number of diamonds and then return that value.
Also return an error message if the given inputs are not numbers.

************************************************************************/


function gemsToDiamond(numberOfGemsOfFriend1, numberOfGemsOfFriend2, numberOfGemsOfFriend3) {
  const powerOfGemsOfFriend1 = 21;
  const powerOfGemsOfFriend2 = 32;
  const powerOfGemsOfFriend3 = 43;

  const totalNumberOfDiamonds = (powerOfGemsOfFriend1 * numberOfGemsOfFriend1) + (powerOfGemsOfFriend2 * numberOfGemsOfFriend2) + (powerOfGemsOfFriend3 * numberOfGemsOfFriend3);
  
  if (typeof (numberOfGemsOfFriend1) !== 'number' || typeof (numberOfGemsOfFriend2) !== 'number' || typeof (numberOfGemsOfFriend3) !== 'number') {
    return "Please enter only number as input.";
  }
  else if (totalNumberOfDiamonds > 1000 * 2) {
    const remainingDiamond = totalNumberOfDiamonds - 2000;
    return remainingDiamond;
  }
  else {
    return totalNumberOfDiamonds;
  }
}