class CheckingAccount extends Account{
    constructor(number, overdraftLimit) {
        super(number)
        this.overdraftLimit = overdraftLimit;
    }
    getOverdraftLimit() {
        return this._overdraftLimit;
    }
    setOverdraftLimit(overdraftLimit){
        this._overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if (this.getBalance() <= this._overdraftLimit) {
            //throw new RangeError("Warning, low balance CheckingAccount");
        }
        super.withdraw(amount)

    }
    toString() {
        return "Account " + this.getNumber() + ": balance " + this.getBalance();
    }
}