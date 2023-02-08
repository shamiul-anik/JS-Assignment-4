// Problem 5: Convert your gems into diamond

// তোমাকে একটা function দেওয়া হবে called gemsToDiamond().
// এটা ইনপুট হিসেবে তিনটা number(তোমাদের ৩ বন্ধুর gems এর সংখ্যা) নিবে।

// ১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
// ২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
// ৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43

// [gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]
// এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে।
// total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে
// 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।

// Sample Input & Output: -

// Input: 1, 1, 1
// Output: 96

// Input: 20, 200, 50
// Output: 6970

// Input: 100, 5, 1
// Output: 303



/************************************************************************

Problem 5: Convert your gems into diamond

Function Name: gemsToDiamond()

Function Description: This function will take three numbers as parameters. 
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
  else if( totalNumberOfDiamonds > 1000*2 ) {
    const remainingDiamond = totalNumberOfDiamonds - 2000;
    return remainingDiamond;
  }
  else {
    return totalNumberOfDiamonds;
  }
}

const gemsOfFriend1 = 20;
const gemsOfFriend2 = 200;
const gemsOfFriend3 = 50;

const outputValue = gemsToDiamond(gemsOfFriend1, gemsOfFriend2, gemsOfFriend3);
console.log(outputValue);