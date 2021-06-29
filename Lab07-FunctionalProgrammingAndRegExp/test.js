
describe("max", function () {
    it("Define a function max() that takes two numbers as arguments and returns the largest of them",
        function () {
            assert.equal(5, max(4, 5));
        });
});

describe("maxOfThree", function () {
    it("Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them",
        function () {
            assert.equal(27, maxOfThree(8,26, 27));
        });
});

describe("isVowel", function () {
    it("Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise",
        function () {
            assert.equal(true, isVowel("a"));
        });
});

describe("sum", function () {
    it("Function that sums all the numbers in an array of numbers",
        function () {
            assert.equal(63, sum([45,5,6,7]));
        });
});

describe("multiply", function () {
    it("Function that multiplies all the numbers in an array of numbers",
        function () {
            assert.equal(9450, multiply([45,5,6,7]));
        });
});

describe("reverse", function () {
    it("Define a function reverse() that computes the reversal of a string",
        function () {
            assert.equal("ratset gaj test", reverseSrt("tset jag testar"));
        });
});

describe("findLongestWord", function () {
    it("Write a function findLongestWord() that takes an array of words and returns the length of the longest one",
        function () {
            assert.equal(20, findLongestWord(["love", "thrut", "Tim", "Today is a good time"]));
        });
});

describe("filterLongWords", function () {
    it("Write a function filterLongWords() that takes an array of words and an integer i and returns a new array containing only those words that were longer than i characters",
        function () {
            assert.equal("Pedro,Lanjahet,Kamala", filterLongWords(["John", "Pedro", "Lanjahet", "Bart", "Kamala"], 4));
        });
});
