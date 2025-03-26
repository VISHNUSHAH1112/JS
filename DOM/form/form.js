const text=document.getElementById('text');
const email=document.getElementById('email');
const password=document.getElementById('password');
const con_password=document.getElementById('con-password')

const submit_button=document.getElementById('submit_button');
let p=document.getElementById('p')

submit_button.addEventListener('click',()=>{
    submit()
})

function submit()
{
    if(text.value=="" || email.value=="" || password.value=="" || con_password.value=="")
    {
        p.innerHTML="field all"
    }
    else if (password.value !== con_password.value) {
        p.innerHTML = "Passwords do not match";
    } 
    else{
        p.innerHTML="Succesfully"
    }
}