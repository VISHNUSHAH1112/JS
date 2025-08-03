// wap to print only even numbers from Array.
let a=[1,2,3,4,5,6,7,8,9,10]
for(i=0; i<a.length; i++)
{
    if(i%2==0)
        {
        document.write("Given Number Is Even" + "  ")
        // document.write("<br>")
        document.write([i] + " ")
    }
}