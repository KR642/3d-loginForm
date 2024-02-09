const checkStatus = document.getElementById("toggle");
document.getElementById("toggleTxt").innerHTML = "Switch to Register";
checkStatus.addEventListener('change',(e)=>{
    if(e.currentTarget.checked){
        document.querySelector(".loginSignUp").classList.toggle("flip");
        document.getElementById("toggleTxt").innerHTML = "Switch to Login";
    }
    else{
        document.querySelector(".loginSignUp").classList.toggle("flip");
        document.getElementById("toggleTxt").innerHTML = "Switch to Register";
    }
})