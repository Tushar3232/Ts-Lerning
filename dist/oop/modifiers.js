"use strict";
// modifiers = (public, private, protected)
// public = access from anywhere.
// private = access only inside class.
// protected = access only class and subclasse's.
Object.defineProperty(exports, "__esModule", { value: true });
class bankAccount {
    accountName;
    balance;
    accountType;
    constructor(name, ballanec) {
        this.accountName = name;
        this.balance = ballanec;
        this.accountType = "saving";
    }
    showBalance() {
        console.log(`your balance is : ${this.balance}`);
    }
}
const account = new bankAccount("rana", 2233);
account.showBalance();
//# sourceMappingURL=modifiers.js.map