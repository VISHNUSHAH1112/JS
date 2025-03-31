// 🔹 5. Constructor & Object Creation
// 👉 Scenario: You are building a food delivery app where each restaurant has a name, cuisine type, and rating.

// ✅ Task:

// Create a Restaurant class with properties: name, cuisineType, and rating.
// Instantiate 3 restaurant objects with different values.



class Restaurant1{
    constructor(name,cuisinetype,rating)
    {
        this.name=name;
        this.cuisinetype=cuisinetype;
        this.rating=rating;
    }

    print()
    {
        document.writeln("Restaurant Name   "+ this.name)
        document.writeln("<br>")
        document.writeln("Place Of Restaurant  "+this.cuisinetype)
        document.writeln("<br>")
        document.writeln("Restaurant Rating  "+this.rating)
    }
}

class Restaurant2 extends Restaurant1{
    constructor(name,cuisinetype,rating)
    {
        super(name,cuisinetype,rating)
        this.name=name;
        this.cuisinetype=cuisinetype;
        this.rating=rating;
    }

    print1()
    {
        super.print
        document.writeln("Restaurant Name  "+this.name)
        document.writeln("<br>")
        document.writeln("Place Of Restaurant  "+this.cuisinetype)
        document.writeln("<br>")
        document.writeln("Restaurant Rating "+this.rating)
        document.writeln("<br>")
    }
}

const r1=new Restaurant1("The Taj ","India",5);

const r2=new Restaurant2("5 Star","India",4.5);


r1.print();
document.writeln("<br>")
r2.print1();
