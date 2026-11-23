let h1=document.querySelector('h1');
let playBtn=document.querySelector('#playBtn');
let resetBtn=document.querySelector('#resetBtn');
let pauseBtn=document.querySelector('#pauseBtn');
let seconds=document.querySelector('#seconds');

let counter=0;
let flag=true;

playBtn.addEventListener('click',()=>{
    flag=true;
    setTimeout(()=>{
        let countdown=setInterval(()=>{
            if(counter<=seconds.value && flag==true){
                h1.innerText=seconds.value-counter;
                counter++;
            }else{
                clearInterval(countdown);
            }
        },1000)
    })
})

resetBtn.addEventListener('click',()=>{
    h1.innerText='';
    counter=0;
    seconds.value='';
})

pauseBtn.addEventListener('click',()=>{
    flag=false;
})