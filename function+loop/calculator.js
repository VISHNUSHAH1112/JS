function Sum(a,b)   
{
    document.write("Addtion of " + a + "+" + b + "= " + (a+b));    
}
function Sub(a,b)   
{
    document.write("Substraction of " + a + "-" + b + "= " + (a-b));    
}
function Multi(a,b)   
{
    document.write("Multiply of " + a + "x" + b + "= " + (a*b));    
}
function Div(a,b)   
{
    document.write("Divsion of " + a + "/" + b + "= " + (a/b));    
}
function Mod(a,b)   
{
    document.write("Module of " + a + "%" + b + "= " + (a%b));    
}

let a=prompt("Enter Your FIrst Value");
let choice=prompt("Enter Your Symbol +,-,*,/,%");
let b=prompt("ENter Your Second Number");

switch (choice)
{
    case "+":
    {
        document.write = Sum(a,b);
        break;
    }
    case "-":
    {
        document.write = Sub(a,b);
        break;
    }
    case "*":
    {
        document.write = Multi(a,b);
        break;
    }
    case "/":
    {
        document.write = Div(a,b);
        break;
    }
    case "%":
    {
    document.write = Mod(a,b);
    break;
    }

}