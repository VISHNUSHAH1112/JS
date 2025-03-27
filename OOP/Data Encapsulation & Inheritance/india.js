


// perform multilevel inheritance where Indian is parent for class person, person is parent for class employee
// indian class - adharNo,birthPlace
// person - name,age,gender
// emp - id,salary, role
// access all properties of parent by child class only and set and get all values.

class Indian{
    constructor(adharno,birthplace)
    {
        this.adharno=adharno;
        this.birthplace=birthplace;
    }

    Indian_output()
    {
        document.writeln(this.adharno);
        document.writeln(this.birthplace)
    }
}

class Person extends Indian{
    constructor(adharno,birthplace,name,age,gender)
    {
        super(adharno,birthplace)
        this.name=name;
        this.age=age;
        this.gender=gender;
    }

    Person_output()
    {
        super.Indian_output()
        document.writeln(this.name);
        document.writeln(this.age);
        document.writeln(this.gender);
    }
}

class Employee extends Person{
    constructor(adharno,birthplace,name,age,gender,id,salary,role)
    {
        super(adharno,birthplace,name,age,gender)
        this.id=id;
        this.salary=salary;
        this.role=role;
    }

    employee_output()
    {
        super.Person_output()
        document.writeln(this.id);
        document.writeln(this.salary);
        document.writeln(this.role);
    }
}

const em=new Employee(785245201,"surat","vishnu",20,"male",780,15500,"intership");

em.employee_output()












 