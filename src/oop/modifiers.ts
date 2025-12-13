// modifiers = (public, private, protected)
// public = access from anywhere.
// private = access only inside class.
// protected = access only class and subclasse's.

class bankAccount {
    public accountName: string;
    private balance: number;
    protected accountType: string;

    constructor(name:string,ballanec:number,){
        this.accountName= name;
        this.balance= ballanec;
        this.accountType= "saving";
    }

    showBalance(){
        console.log(`your balance is : ${this.balance}`)
    }

}

const account = new bankAccount("rana",2233)

account.showBalance()
