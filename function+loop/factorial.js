// wap to print factorial of passed number in udf.

let n=prompt("Enter Your Number ");

function factorial() {
    
    let fact =1;

    for(let i=2; i<=n; i++)
    {
        fact = fact*i;
    }
    document.write(fact);
}
factorial(n)
