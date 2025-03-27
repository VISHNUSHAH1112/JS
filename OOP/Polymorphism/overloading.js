// wap to perform method overloading to find sum of 2 to 4 arguments.
// ex. sum(10,20), sum(10,20,30), sum(_....4)


class Add{
    sum(a,b,c,d)
    {
        if(a==undefined || b==undefined)
        {
            document.writeln("Enter atleast 2 digit " );
        }
        else if(c==undefined && d==undefined)
        {
            document.writeln("sum :" + (a+b) );
        }
        else if(d==undefined)
        {
            document.writeln("sum :" + (a+b+c) );
        }
        else{
            document.writeln("sum :" + (a+b+c+d) );
        }
    }
}

const a1= new Add()

a1.sum(2,3,4,1)