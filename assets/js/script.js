const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");


const trilho = document.getElementById("trilho");
const body = document.querySelector("body");

trilho.addEventListener("click",()=>{
    trilho.classList.toggle("dark");
    body.classList.toggle("dark");
  });  

const clock = setInterval(()=>{
    const date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    if(hr < 10) hr='0' + hr;
    if(min < 10) min='0' + min;
    if(sec < 10) sec='0' + sec;
    
    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = sec;

});


