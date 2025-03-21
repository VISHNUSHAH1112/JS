const one=document.getElementById('one')
const two=document.getElementById('two')

const plus=document.getElementById('plus')
const minus=document.getElementById('minus')
const multiply=document.getElementById('multiply')
const divsion=document.getElementById('division')

let ans=document.getElementById('ans')

plus.addEventListener('click',()=>{
    let o=parseInt(one.value);
    let t=parseInt(two.value);

    let sum=(o + t);

    ans.innerHTML="Sum of " + o + " & " + t + " = " + sum;    

})

minus.addEventListener('click',()=>{
    let o=parseInt(one.value);
    let t=parseInt(two.value);

    let minus=(o - t);

    ans.innerHTML="minus of " +  o +" & "+ t + " = " +minus;
})

multiply.addEventListener('click',()=>{
    let o=parseInt(one.value);
    let t=parseInt(two.value);

    let multiply=(o * t);

    ans.innerHTML="multiply of " + o + " & " + t + " = " + multiply;
})

division.addEventListener('click',()=>{
    let o=parseInt(one.value);
    let t=parseInt(two.value);

    let divsion=(o / t);

    ans.innerHTML="Division of " + o + " & " + t + " = " + divsion;
})
