// wap to perform method overriding to display student details.
// school(name,year) -> student(name,std,school,year)
// display() <- override this method

class School{
    constructor(schoolname,schoolyear)
    {
        this.schoolname=schoolname;
        this.schoolyear=schoolyear;
    }

    display()
    {
        document.writeln(this.schoolname);
        document.writeln(this.schoolyear);
    }
}

class Student extends School
{
    constructor(studentname,std,school,year)
    {
        super(school,year);
        this.studentname=studentname;
        this.std=std;

    }

    display()
    {
        document.writeln("Student Name = "+(this.studentname));
        document.writeln("<br>")
        document.writeln("Student Std = "+(this.std));
        document.writeln("<br>")

        document.writeln("School Name = "+(this.schoolname));
        document.writeln("<br>")

        document.writeln("School Name = "+(this.schoolyear));
        document.writeln("<br>")

    }
}

const student1=new Student("Vishnu",12,"abcd",2005)

student1.display()