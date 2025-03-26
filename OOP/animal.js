// wap to craete a class for animal with attribute like name,type,gender and age, make these all
// attribute private to secure direct access of the users, perform input and output for 3 defferent
// animals.

class Animal{
    #name;
    #type;
    #gender
    #age
    constructor(name,type,gender,age)
    {
        this.#name=name;
        this.#type=type;
        this.#gender=gender
        this.#age=age;

    }

    print()
    {
        document.writeln(this.#name);
        document.writeln(this.#type);
        document.writeln(this.#gender);
        document.writeln(this.#age);
    }


}

const a1=new Animal("bella","cow","female",4);
const a2=new Animal("coco","rabbit","male",2);
const a3=new Animal("oliver","tortoise","male",10);

a1.print()
a2.print()
a3.print()