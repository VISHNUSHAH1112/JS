// 🔹 1. Encapsulation (Data Hiding)
// 👉 Scenario: You are building an ATM system where a user has a bank account. The balance should not be directly accessible but can be checked via a method.

// ✅ Task:

// Create a BankAccount class with a private #balance property.
// Implement deposit(amount) and withdraw(amount) methods.
// Add a getBalance() method to return the balance.


class BankAccount{
    #deposit;
    #withdraw;
    constructor(deposit,withdraw)
    {
        this.#deposit=deposit;
        this.#withdraw=withdraw
    }

    getbalance()
    {
        document.writeln("Deposit = " + this.#deposit);
        document.writeln("<br>")
        document.writeln("<br>")
        document.writeln("Withdraw = " +  this.#withdraw);

    }

}

const a1=new BankAccount(4200,200)
a1.getbalance()