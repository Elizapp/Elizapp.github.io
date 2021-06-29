
    const max = (num1,num2) => Math.max(num1,num2);
    const maxOfThree = (x, y, z) => max(max(x, y), z);
    const isVowel = str => (/[aeiou]/.test(str)) ? true : false;
    const sum = arr => arr.reduce((sum, result)=>sum + result, 0);
    const multiply = arr => arr.reduce((multiplication, result) => multiplication * result, 1);
    const reverseSrt = str => str.split("").reverse().join("");
    const findLongestWord = arr => arr.reduce((r, c) => r.length >= c.length ? r.length : c.length);
    const filterLongWords = (words, i) =>words.filter(word => word.length > i).join(",");
    const multipliesWithReduce = numbers => numbers.reduce((x, y) => x * y);

