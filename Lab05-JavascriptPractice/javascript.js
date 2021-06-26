
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
    return words.filter(word => word.length > i);
}

function computeSumOfSquares(numbers, ) {
    return numbers.reduce((x, y) => x + Math.pow(y, 2));
}

function printOddNumbersOnly(numbers) {
    return numbers.filter(num => num % 2 !== 0);
}

function computeSumOfSquaresOfEvensOnly(numbers) {
    return numbers
        .filter(num => num % 2 === 0)
        .reduce((x, y) => x + Math.pow(y, 2));
}

function sumWithReduce(numbers) {
    return numbers.reduce((x, y) => x + y);
}

function multipliesWithReduce(numbers) {
    return numbers.reduce((x, y) => x * y);
}

function findSecondBiggest(numbers) {
    let first = second = Number.MIN_VALUE;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > first) {
            second = first;
            first = numbers[i];
        } else if (numbers[i] !== first && numbers[i] > second) {
            second = numbers[i];
        }
    }

    return second;
}

function printFibo(n, a, b) {
    let x = a, y = b, count = n, temp, fibo = [];
    while (count > 0) {
        temp = x;
        x = x + y;
        y = temp;
        fibo.push(y);
        count--;
    }
    console.log(fibo)
}

function test() {
    printResults('1. max(4,5)', 5, max(4, 5))
    printResults('2. maxOfThree(8,26, 27)', 27, maxOfThree(8,26, 27))
    printResults('3. isVowel("a")', 'true', isVowel('a'))
    printResults('4.1. sum([45,5,6,7])', 63, sum([45,5,6,7]))
    printResults('4.2. multiplies([45,5,6,7])', 9450, multiply([45,5,6,7]))
    printResults('5. reverse("ratset gaj test")', "tset jag testar", reverse("ratset gaj test"))
    printResults('6. findLongestWord(["love", "thrut", "Tim", "Today is a good time"])', 20, findLongestWord(["love", "thrut", "Tim", "Today is a good time"]))
    printResults('7. filterLongWords(["John", "Pedro", "Lanjahet", "Bart", "Kamala"], 4)', ["Pedro","Lanjahet","Kamala"], filterLongWords(["John", "Pedro", "Lanjahet", "Bart", "Kamala"], 4))
}

function printResults(no, expected, results) {
    console.log('------------------\n ' + no)
    console.log('Expected value: ' + expected)
    console.log('Result: ' + results)
}