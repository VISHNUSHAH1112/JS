// 🔹 3. Polymorphism (Method Overriding & Overloading)
// 👉 Scenario: You are creating a payment gateway that supports multiple payment methods like CreditCard and PayPal. Each method has a pay(amount) function, but the implementation is different.

// ✅ Task:

// Create a base class Payment with a pay(amount) method.
// Extend it into CreditCard and PayPal, overriding pay() to print different messages.
// Implement method overloading by adding a pay() method that either:
// Takes only an amount, or
// Takes an amount and currency (e.g., pay(100, "USD")).
// 💡 Tip: Since JavaScript does not support traditional method overloading, use default parameters or checking arguments length inside the method.


class Payment{
    pay(amount,currency = "USD")
    {
        this.amount=amount;
        this.currency=currency;
        // this.currency=currency
    }

    print1()
    {
        document.writeln( "paid = " +this.amount)
    }
}

class CreditCard extends Payment{
    pay(amount,currency= "USD")
    {
        super.pay
        this.amount=amount;
        this.currency=currency
        // this.currency=currency;
    }
    print2()
    {
        document.writeln( this.amount +" "+  this.currency+" Paid By Credit Card" )

    }
}

class PayPal extends Payment{
    pay(amount,currency = "USD")
    {
        super.pay
        this.amount=amount;
        this.currency=currency
        // this.currency=currency;
    }
    print3()
    {
        document.writeln("<br>")
        document.writeln(  this.amount +" "+ this.currency + " Amount by PayPal" )

    }
}

const cc=new CreditCard()
cc.pay(450)
cc.print2()


const pp=new PayPal()
pp.pay(450)
pp.print3()





