let instructions = document.getElementById("instructions")
let myrecords = document.getElementById("myrecords")
let overlay = document.querySelector(".overlay")
let overlaypop = document.querySelector(".overlaypop")
let recordpop = document.querySelector(".recordpop")


instructions.addEventListener("click",function(){
    overlay.style.display="block";
    overlaypop.style.display="block";

})
myrecords.addEventListener("click",function(){
    overlay.style.display="block";
    recordpop.style.display="block";

})

let closebtn = document.getElementById("instclose")
function end(){
    overlay.style.display="none";
    overlaypop.style.display="none";

}
let closebtn1= document.getElementById("end")
function  end1(){
    overlay.style.display="none";
    recordpop.style.display="none";
}




let gobtn = document.getElementById("enter");
let record1=document.getElementById("record1")
let min =1;
let max= 100;
let secretnumber = Math.floor(Math.random()*(max-min))+min;
let result = document.getElementById("result")

let attempts=0;



function run(){
    let userinput= document.getElementById("usrnumber")
    let ip =    Number(userinput.value)
    let record
    

    if(isNaN(ip)){
       result.textContent="Not a valid piece of evidence!"
    }
    
    else if(ip < min || ip > max){
        result.textContent="Doesn't fit the case!"
    }
    else{
        attempts++;
        if(ip>secretnumber){
            result.textContent="Over the mark, detective!"
        }
        else if(ip<secretnumber){
            result.textContent="Too low, recalibrate your compass!"
        }
        else{
            result.textContent=`Mystery cracked in just ${attempts} attempts!`
            let recordhistory = document.createElement("li");
            recordhistory.textContent=`Game won in ${attempts} attempts`
            record1.appendChild(recordhistory)
            
            secretnumber=Math.floor(Math.random()*(max-min))+min;
            attempts=0;
                         
        }
    }
     userinput.value= "";
     userinput.focus()
    
   
 }
