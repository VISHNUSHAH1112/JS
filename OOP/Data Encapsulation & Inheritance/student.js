// create a class named student with private attributes roll_no,name,age,std and percentage, initialize
// all attributes by parameterized constructor(private attributes need to declare in global scope in class)
// and print all details for 3 students.


class Student{

    #roll_no;
    #name;
    #age;
    #std
    #percentage;

    constructor(roll_no,name,age,std,percentage)
    {
        this.#roll_no=roll_no;
        this.#name=name;
        this.#age=age;
        this.#std=std;
        this.#percentage=percentage;
    }

    output()
    {
        document.writeln(this.#roll_no);
        document.writeln("<br>")
        document.writeln(this.#name);
        document.writeln("<br>")

        document.writeln(this.#age);
        document.writeln("<br>")
        

        document.writeln(this.#std);
        document.writeln("<br>")

        document.writeln(this.#percentage);
        document.writeln("<br>")
        document.writeln("<br>")


    }


}

const s1=new Student(21,"krishna",18,10,72.65);
const s2=new Student(1,"ram",19,11,92.25);
const s3=new Student(2,"sita",20,12,82.65);

s1.output()
s2.output()
s3.output()