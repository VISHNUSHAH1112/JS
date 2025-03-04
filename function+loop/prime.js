// wap to check passed number in udf prime or not.

let n=prompt("Enter Your Number");

n=parseInt(n);
function prime() {
let isPrime = true;
for(let i=2; i<n; i++)
{
    if(n%i==0 && (n!=i))
        {
            isPrime = false;
            break;
        }
        
}

if(isPrime)
{
    document.write("num is prime")
}
else{
    document.write("num is not prime")
}
}
prime(n)