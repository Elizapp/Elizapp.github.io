describe("Class Account", function () {
    it("Let's create a new Account. Account has been the first class give to us for being the assignment.",
        function () {
            assert.equal("Account 1001: balance 102.5", new Account(1001));
        });
});

let savinAccount = new SavingsAccount(1001);
savinAccount.setInteres(2);
savinAccount.addInterest();

describe("Class SavingsAccount", function () {
    it("SavingsAccount should have an interest variable, which is set in the constructor and has a getter and a setter mehtod.",
        function () {
            assert.equal("Account 1001: balance 104.55", savinAccount.toString());
        });
});

let checkingAccount = new CheckingAccount(1001);
checkingAccount.setOverdraftLimit(500);
checkingAccount.withdraw(3);

describe("Class CheckingAccount", function () {
    it("This should have an overdraft limit variable. The overdraft amount indicates how much a person is allowed to temporarily withdraw beyond what they have.",
        function () {
            assert.equal("Account 1001: balance 99.5", checkingAccount.toString());
        });
});

let bank = new Bank(235);
bank.addAccount(250);
bank.addAccount(237);
bank.closeAccount(250)
bank.accountReport();
describe("Class Bank", function () {
    it("Bank object should have an array of Account objects",
        function () {
            assert.equal("Bank account numbers: 235,237", bank.toString());
        });
});