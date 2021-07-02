describe("String.filter", function () {
    it("The function accepts an array of strings that specifies a list of banned words. The function returns the string after removing all the banned words",
        function () {
            assert.equal("This house is nice!", "This house is not nice!".filter("not"));
        });
});

describe("Array.BubbleSort", function () {
    it("Write a BubbleSort algorithm on the Array object",
        function () {
            assert.deepEqual([-2,0,1,3,4,6], [6,4,0,3,-2,1].bubbleSort());
        });
});

describe("Class Teacher", function () {
    it("Create an object called Teacher derived from the Person class, and implement a method called teach which receives a string called subject",
        function () {
            assert.deepEqual("Kip Nip is now teaching Modern Programming Language", teacherKip.teach("Modern Programming Language"));
        });
});