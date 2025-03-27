// wap to craete a class for employee with attribute like id,name,salary and role, set all attributes
// and get for atleast 3 objects/employee.


class Employee{
    constructor(id,name,salary,role)
    {
        this.id=id;
        this.name= name;
        this.salary=salary;
        this.role=role;

    }

    print()
    {
        document.writeln(this.id);
        document.writeln(this.name);
        document.writeln(this.salary);
        document.writeln(this.role);
    }


}

const emp1=new Employee(1020,"vishal",10500,"intership");
const emp2=new Employee(1050,"Mohit",12500,"uiux");
const emp3=new Employee(1500,"bhupendra",15000,"Web Developer");

emp1.print();
emp2.print();
emp3.print();