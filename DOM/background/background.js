const btn =document.querySelector('#btn');

btn.addEventListener('click',()=>{
    background();
})

function background()
{
    const color1=Math.floor(Math.random()*256)
    const color2=Math.floor(Math.random()*256)
    const color3=Math.floor(Math.random()*256)
    const color=`rgb(${color1},${color2},${color3})`

    document.body.style.background=color;


    btn.textContent = color;



}