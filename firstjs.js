const navBar = document.querySelector(".nav-bar");
const body = document.body;      
       const main = document.querySelector(".main");
const hamburger =document.querySelector(".hamburger");

hamburger.addEventListener('click', ()=>{
     navBar.classList.toggle("active");
     hamburger.classList.toggle("active");
     body.classList.toggle("active");
}) 

