document.addEventListener("DOMContentLoaded", function(){
    
    let myButton = document.querySelector("#toggle-button");
    let img = document .querySelector("img");
    let body = document.querySelector("body");

    myButton.addEventListener("click", function(){

        if(myButton.innerHTML === "Allumer la lumiere" ){
            img. src = "assets/img/on.png";
            body.style.backgroundColor = "#edd37c";
            myButton. innerHTML = "Eteindre la lumiere";
        }else{
            myButton. innerHTML = "Allumer la lumiere";
            img.src = "assets/img/off.png";
            body.style.backgroundColor = "rgba(128, 128, 128, 0.753)";
        }
    })
})

    
