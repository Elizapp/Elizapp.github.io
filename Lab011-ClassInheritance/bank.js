class Bank{
    static nextNumber;
    constructor(...accounts) {
        this.account = accounts;
    }
    addAccount(number){
        this.account.push(number);
    }
    addSavingsAccount(interest){
        this.addAccount(interest);
    }
    addCheckingAccount(overdraft){
        this.addAccount(overdraft);
    }
    closeAccount(number){
        let newArr = this.account.filter(acc => acc != number);
        this.account = newArr;
    }
    accountReport(){
        return this.account.forEach(num => console.log(num));
    }
    toString() {
        return "Bank account numbers: " + this.account;
    }
}