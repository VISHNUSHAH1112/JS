// 🔹 4. Abstraction (Hiding Implementation Details)
// 👉 Scenario: You are developing a car rental system. The way a car starts (startEngine()) differs based on whether it’s a PetrolCar or ElectricCar, but the main method should remain the same.

// ✅ Task:

// Create an abstract Car class with a method startEngine().
// Implement two subclasses PetrolCar and ElectricCar, each defining startEngine() differently.


class Car{
    startenginer()
    {
        document.writeln("Car Start Ho Raha Hai ")
    }


}

class ElectricCar extends Car
{
    startenginer()
    {
        document.writeln("Electric Car Start Ho Raha Hai")
    }
}
class PetrolCar extends Car{
    startenginer()
    {
        document.writeln("Petrol Car Start Ho Raha Hai");
    }
}


const a1=new ElectricCar();
const a2=new PetrolCar();

a1.startenginer();
document.writeln("<br>")
a2.startenginer();