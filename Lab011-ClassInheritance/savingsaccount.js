class SavingsAccount extends Account{
    constructor(number, interes) {
        super(number)
        this.interes = interes;
    }
    getInteres() {
        return this._interes;
    }
    setInteres(interes){
        this._interes = interes;
    }
    addInterest(){
        let tempBal =this.getBalance() * (this.getInteres() / 100);
        super.deposit(tempBal);
    }

    toString() {
        return "Account " + this.getNumber() + ": balance " +this.getBalance();
    }
}