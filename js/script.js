let luke1Btn = document.querySelector("#luke1");
let today = new Date();
console.log(today);
console.log(luke1Btn.id)


luke1Btn.onclick = () => {

    if(today.getDate() >= 1){
        luke1Btn.innerHTML = "Velkommen til advent!";
    }
    else{
        luke1Btn.innerHTML = "Du kan ikke åpne denne luken enda";
    }

    


}