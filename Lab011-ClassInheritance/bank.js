class Bank{
    static nextNumber;
    constructor(...accounts) {
        this.account = accounts;
    }
    addAccount(account){
        let newAcc = new Account(account)
        this.account.push(newAcc);
    }
    addSavingsAccount(interest){
        this.addAccount(interest);
    }
    addCheckingAccount(overdraft){
        this.addAccount(overdraft);
    }
    closeAccount(account){
        let newArr = this.account.filter(acc => acc.getNumber() != account);
        this.account = newArr;
    }
    accountReport(){
        return this.account.forEach(acc => console.log(acc));
    }
    toString() {
        return "Bank account numbers: " + this.account;
    }
}

