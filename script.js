
let inputTxt = document.querySelector(".inputFeild");
let qrImg = document.querySelector(".qrImg");
let displayFeild = document.querySelector(".displayFeild");
let btn = document.querySelector(".btn");
let logo = document.querySelector("h2");
let year = document.querySelector(".year").textContent = new Date().getFullYear();

let api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

btn.addEventListener("click", ()=>{
    if(inputTxt.value.length > 0){
        qrImg.src = api + inputTxt.value;
        displayFeild.classList.add("show-img");
        logo.classList.add("sth2");
    }else{
        inputTxt.classList.add("error");

        setTimeout(()=>{
            inputTxt.classList.remove("error")
        },1000)
    }
    
})