class Bank{
    static nextNumber;
    constructor(...accounts) {
        this.account = accounts;
    }
    addAccount(account){
        this.account.push(account);
    }
    addSavingsAccount(interest){
        this.addAccount(interest);
    }
    addCheckingAccount(overdraft){
        this.addAccount(overdraft);
    }
    closeAccount(account){
        let newArr = this.account.filter(acc => acc != account);
        this.account = newArr;
    }
    accountReport(){
        return this.account.forEach(num => console.log(num));
    }
    toString() {
        return "Bank account numbers: " + this.account;
    }
}