//A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

//Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
//solution
function isPangram(string) {
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x) {
        return string.indexOf(x) !== -1;
    });
}

//This code does not execute properly. Try to figure out why.
function multiply(a, b) {
    return a * b
}
//A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

//Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}
/*89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers
 */
function digPow(n, p) {
    var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
    return x % n ? -1 : x / n
}
/*Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" */
function solution(string) {
    return string.replace(/([a-z])([A-Z])/g, "$1 $2");
}
/*Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4 */
function points(games) {
    let totalPoint = 0;
    for (let i = 0; i < games.length; i++) {
        const value = games[i];
        const parts = value.split(":");
        const a = parts[0];
        const b = parts[1];
        if (a > b) {
            totalPoint += 3;

        } else if (a === b) {
            totalPoint += 1;
        }
    }
    return totalPoint;
}
/** I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that*/
var humanYearsCatYearsDogYears = function(humanYears) {
        let catage;
        let dogage;
        if (humanYears === 1) {
            return [humanYears, 15, 15];
        }
        if (humanYears === 2) {
            return [humanYears, 24, 24];
        }
        const Eyears = humanYears - 2;
        const ECATyears = Eyears * 4;
        const EDOGyears = Eyears * 5;

        return [humanYears, 24 + ECATyears, 24 + EDOGyears];
    }
    /** The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20*/
function century(year) {
    return Math.ceil(year / 100);

}
/**I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too. */
function arrayPlusArray(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        const Array1Value = arr1[i];
        const Array2Value = arr2[i];
        const Addvalue = Array1Value + Array2Value;
        sum += Addvalue;
    }
    return sum;
}
/** A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return true if yes, false otherwise :)*/
function hero(bullets, dragons) {
    return bullets / dragons >= 2;
}
/**Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6] */
function maps(x) {
    const RESULT = x.map((ArrItem) => {
        return ArrItem * 2;
    });
    return RESULT;
}

/** Write a function that removes the spaces from the string, then return the resultant string.

Examples:

Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"*/
function noSpace(x) {
    const arr = x.split(" ");
    let NewArray = [];
    for (let i = 0; i < arr.length; i++) {
        const trimString = arr[i].trim();
        NewArray.push(trimString);
    }
    const finalString = NewArray.join("");
    return finalString;
}
/**Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello" */
function repeatStr(n, s) {
    let StartString = '';
    for (i = 0; i < n; i++) {
        StartString = StartString + s;
    }
    return StartString;
}
/**Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7 */
function basicOp(operation, value1, value2) {
    const operationString = value1 + operation + value2;
    const result = eval(operationString);
    return result;
}
/**You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. */
function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum = sum + arr[i]
        }
    }
    return sum;
}
/** It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.*/
function removeChar(str) {
    const lengthOfString = str.length;
    return str.substr(1, lengthOfString - 2);

};
/** It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.*/
function getAverage(marks) {
    const Count = marks.length;
    let sum = 0;
    for (let j = 0; j < Count; j++) {
        sum = sum + marks[j]
    }
    const Avg = sum / Count;
    const roundedDown = Math.floor(Avg);
    return roundedDown
}
/**Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8) */
var summation = function(num) {
        let sum = 0;
        for (let i = 1; i <= num; i++) {
            sum = sum + i;
        }
        return sum;
    }
    /** Rock Paper Scissors
    Let's play! You have to return which player won! In case of a draw return Draw!.

    Examples(Input1, Input2 --> Output):

    "scissors", "paper" --> "Player 1 won!"
    "scissors", "rock" --> "Player 2 won!"
    "paper", "paper" --> "Draw!"*/

const rps = (p1, p2) => {
    if (p1 == p2)
        return 'Draw!';

    if (p1 == 'rock' && p2 == 'scissors')
        return 'Player 1 won!'
    else if (p1 == 'scissors' && p2 == 'paper')
        return 'Player 1 won!'
    else if (p1 == 'paper' && p2 == 'rock')
        return 'Player 1 won!'
    else
        return 'Player 2 won!';
};
/** Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.*/
class SmallestIntegerFinder {
    findSmallestInt(arrayofNo) {
        let smallestNo;
        for (let i = 0; i < arrayofNo.length; i++) {


            const arrNo = arrayofNo[i];
            if (i === 0) {
                smallestNo = arrNo;
            }
            if (arrNo < smallestNo) {
                smallestNo = arrNo;
            }
        }
        return smallestNo;
    }
}
/**Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5 */
function isDivisible(n, x, y) {
    const result1 = n / x
    const result2 = n / y
    if (result1 % 1 === 0 && result2 % 1 === 0) {
        return true;
    } else {
        return false;
    }

}
/**Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her? */
function greet(name) {


    if (name === "Johnny")
        return "Hello, my love!";
    return "Hello, " + name + "!";
}
/** Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/
function getCount(str) {
    var vowelsCount = 0;


    const arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'a':
                vowelsCount++;
                break;
            case 'e':
                vowelsCount++;
                break;
            case 'i':
                vowelsCount++;
                break;
            case 'o':
                vowelsCount++;
                break;
            case 'u':
                vowelsCount++;
                break;
        }
    }
}
/** The function is not returning the correct values. Can you figure out why?

Example (Input --> Output ):

3 --> "Earth"*/
function getPlanetName(id) {
    var name;
    switch (id) {
        case 1:
            name = 'Mercury'
            break;
        case 2:
            name = 'Venus'
            break;

        case 3:
            name = 'Earth'
            break;
        case 4:
            name = 'Mars'
            break;
        case 5:
            name = 'Jupiter'
            break;
        case 6:
            name = 'Saturn'
            break;
        case 7:
            name = 'Uranus'
            break;
        case 8:
            name = 'Neptune'
            break;
    }

    return name;
}