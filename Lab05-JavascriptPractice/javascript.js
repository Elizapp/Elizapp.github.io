
function max(num1,num2) {
    if (parseFloat(num1) > parseFloat(num2)) {
        return  num1;
    } else {
        return  num2;
    }
}
function testMax(){
    let num1 = document.getElementById("number1").value;
    let num2 =  document.getElementById("number2").value;
    let maxNumber = max(num1,num2);
    document.getElementById("twoNumberMaxResult").innerHTML = maxNumber;
}
function maxOfThree(x, y, z) {
    let max = x > y ? x : y;
    max = max > z ? max : z;

    return max;
}
function testMaxOfThree(){
    let num1 = document.getElementById("num1").value;
    let num2 =  document.getElementById("num2").value;
    let num3 =  document.getElementById("num3").value;
    let maxOfTh = maxOfThree(num1,num2,num3);
    document.getElementById("twoNumberMaxOfThreeResult").innerHTML = maxOfTh;
}
function isVowel(letter) {
    let vowels = 'aeiou';
    return vowels.indexOf(letter.toLowerCase()) > -1;
}
function testIsVowel(){
    let vowel = document.getElementById("vowel").value;
    let isV = isVowel(vowel);
    document.getElementById("isVowelResult").innerHTML = isV;
}
function sum(numArry) {
    let sum = 0;
    for (let i = 0; i < numArry.length; i++) {
        sum += numArry[i];
    }
    return sum;
}
function multiply(numArry) {
    let result = 1;
    for (let i = 0; i < numArry.length; i++) {
        result *= numArry[i];
    }
    return result;
}
function testSumAndMulti(){
    let stringNuns = document.getElementById("arrayNums").value;
    let arrayNuns =stringNuns.split`,`.map(x=>+x)
    let sumResult = sum(arrayNuns);
    let multiplicationResult = multiply(arrayNuns);
    document.getElementById("sum").innerHTML = sumResult;
    document.getElementById("multiplication").innerHTML = multiplicationResult;
}
function reverse(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result
}
function testReverse(){
    let stringW = document.getElementById("string").value;
    let reverseResult = reverse(stringW);
    document.getElementById("reverseResult").innerHTML = reverseResult;
}

function findLongestWord(words) {
    let maxLength = 0;
    for (let i = 0; i < words.length; i++) {
        if (maxLength < words[i].length) {
            maxLength = words[i].length;
        }
    }
    return maxLength;
}

function filterLongWords(words, i) {
    return "" + words.filter(word => word.length > i);
}

function multipliesWithReduce(numbers) {
    return numbers.reduce((x, y) => x * y);
}



/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree2(a, b, c) {
    return max(max(a, b), c);

}



function testAll() {
    console.log(
    "Expected output of  " + myFunctionTest(' max(4,5)', 5, max(4, 5))
   + "\nExpected output of  " + myFunctionTest(' maxOfThree(8,26, 27)', 27, maxOfThree(8,26, 27))
   + "\nExpected output of  " + myFunctionTest(' isVowel("a")', true, isVowel('a'))
   + "\nExpected output of  " + myFunctionTest(' sum([45,5,6,7])', 63, sum([45,5,6,7]))
   + "\nExpected output of  " + myFunctionTest(' multiply([45,5,6,7])', 9450, multiply([45,5,6,7]))
   + "\nExpected output of  " + myFunctionTest(' reverse("ratset gaj test")', "tset jag testar", reverse("ratset gaj test"))
   + "\nExpected output of  " + myFunctionTest(' findLongestWord(["love", "thrut", "Tim", "Today is a good time"])', 20, findLongestWord(["love", "thrut", "Tim", "Today is a good time"]))
   + "\nExpected output of  " + myFunctionTest(' filterLongWords(["John", "Pedro", "Lanjahet", "Bart", "Kamala"], 4)', ["Pedro", "Lanjahet", "Kamala"], filterLongWords(["John", "Pedro", "Lanjahet", "Bart", "Kamala"], 4))
  // + "Expected output of  " + multipliesWithReduce(' multipliesWithReduce([45,5,6,7])', 5, multipliesWithReduce([45,5,6,7]))
    );
}

function myFunctionTest(no, expected, results) {

    if (expected === results) {
        return no + " is "  + expected + " TEST SUCCEEDED";
    } else {
        return no + " is "  + expected + " TEST FAILED.  Expected " + expected + " found " + results;
    }
}
console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest("",44, maxOfThree2(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest("",55, maxOfThree2(55, 4, 44)));

console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest("",4, maxOfThree2(55, 4, 44)));