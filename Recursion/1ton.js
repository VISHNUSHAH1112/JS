function sumton(n) {
    if(n==1)
    {
        return 1;
    }
    else{
        let sum=n+sumton(n-1);
        return sum;
    }
    
}
document.write(sumton(5))