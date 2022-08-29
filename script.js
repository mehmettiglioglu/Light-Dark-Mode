let boxDOM=document.querySelector(".box")
let bodyDOM=document.querySelector(".body")
let text=document.querySelector(".row")



boxDOM.addEventListener("click",()=>
{
 if(bodyDOM.classList.contains("background-white"))
 {
    boxDOM.classList.add("slide-animation")
    if(boxDOM.classList.contains("slide-animation")){
        boxDOM.classList.add("box-white")
    }
    bodyDOM.classList.remove("background-white");
    bodyDOM.classList.add("background-dark");
    if(bodyDOM.classList.contains("background-dark")){
        bodyDOM.classList.add("text-color-white")
    }
 }
 else if(bodyDOM.classList.contains("background-dark")){
    boxDOM.classList.remove("slide-animation");
    boxDOM.classList.add("slide-left-animation");
    boxDOM.classList.remove("box-white")
    boxDOM.style="transition:1.2s"
    if(boxDOM.classList.contains("slide-left-animation"))
    {
        bodyDOM.classList.remove("background-dark");
        bodyDOM.classList.remove("text-color-white")
        bodyDOM.classList.add("background-white");
        boxDOM.classList.remove("slide-left-animation")
    }
    
 }
 
})