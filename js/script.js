let luker = document.querySelectorAll(".luke")
let today = new Date();

for(let luke of luker){
    luke.addEventListener("click", apneLuke);
}

function apneLuke(){
    if (today.getDate() >= this.value){
        this.innerHTML = "Velkommen til advent!";
    }
    else{
        this.innerHTML = "Du kan ikke åpne denne luken enda";
    }
}



/*
let luke1Btn = document.querySelector("#luke1");
let luke2Btn = document.querySelector("#luke2");
let luke3Btn = document.querySelector("#luke3");
let luke4Btn = document.querySelector("#luke4");

let luke8Btn = document.querySelector("#luke8");


let today = new Date();

console.log(today);
console.log(luke1Btn.id);

luke1Btn.addEventListener("click", apneLuke);
luke2Btn.addEventListener("click", apneLuke);
luke3Btn.addEventListener("click", apneLuke);
luke4Btn.addEventListener("click", apneLuke);

luke8Btn.addEventListener("click", apneLuke);



function apneLuke(){
    if (today.getDate() >= this.value){
        this.innerHTML = "Velkommen til advent!";
    }
    else{
        this.innerHTML = "Du kan ikke åpne denne luken enda";
    }

}
*/

/*
luke1Btn.onclick = () => {

    if(today.getDate() >= 1){
        luke1Btn.innerHTML = "Velkommen til advent!";
    }
    else{
        luke1Btn.innerHTML = "Du kan ikke åpne denne luken enda";
    }
}

luke2Btn.onclick = () => {

    if(today.getDate() >= 2){
        luke2Btn.innerHTML = "Velkommen til advent!";
    }
    else{
        luke2Btn.innerHTML = "Du kan ikke åpne denne luken enda";
    }
}

luke3Btn.onclick = () => {

    if(today.getDate() >= 3){
        luke3Btn.innerHTML = "Velkommen til advent!";
    }
    else{
        luke3Btn.innerHTML = "Du kan ikke åpne denne luken enda";
    }
}

luke4Btn.onclick = () => {

    if(today.getDate() >= 4){
        luke4Btn.innerHTML = "Velkommen til advent!";
    }
    else{
        luke4Btn.innerHTML = "Du kan ikke åpne denne luken enda";
    }
}

luke8Btn.onclick = () => {

    if(today.getDate() >= 8){
        luke8Btn.innerHTML = "Velkommen til advent!";
    }
    else{
        luke8Btn.innerHTML = "Du kan ikke åpne denne luken enda";
    }
}
*/