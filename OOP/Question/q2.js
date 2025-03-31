// 🔹 2. Inheritance (Tricky Question with All Types)
// 👉 Scenario: You are working on a vehicle rental system. Different types of vehicles share some common properties, but there are multiple levels and categories of vehicles.

// ✅ Task:

// Create a Vehicle class with properties brand and year.
// Create a Car class that extends Vehicle and adds a fuelType property.
// Create a Bike class that extends Vehicle and adds a hasGear property.
// Add another class ElectricCar that extends Car and adds a batteryCapacity property.
// Implement a getDetails() method in Vehicle and override it in different subclasses.


class Vehicle{
    #brand;
    #year;

    constructor(brand,year)
    {
        this.#brand=brand;
        this.#year=year;
    }

    print1()
    {
        document.writeln("Vehical brand = " + this.#brand);
        document.writeln("<br>")
        document.writeln("Vehical year = " +this.#year);
        document.writeln("<br>")

    }

    
}

class Car extends Vehicle{
    #fueltype;

    constructor(brand,year,fueltype)
    {
        super(brand,year);
        this.#fueltype=fueltype;
    }

    print2()
    {
        super.print1();
        document.writeln("Vehicle fuletype = " + this.#fueltype);
        document.writeln("<br>")
    }
}

class ElectricCar extends Car
{
    #batterycapacity;

    constructor(brand,year,fueltype,batterycapacity)
    {
        super(brand,year,fueltype)
        this.#batterycapacity=batterycapacity;
    }

    print3()
    {
        super.print2()
        
        document.writeln("Vehicle BatterCapacity = " + this.#batterycapacity);
    }
}

const a1=new Vehicle("Mustang",1998)
a1.print1()

const a2=new Car("Toyoto",1998,"petrol")
a2.print2()

const a3=new ElectricCar("Tesla",2024,"Electric",75)
a3.print3()