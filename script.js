
let verbiEl = document.getElementById("verbi-el");
let ioEl = document.getElementById("io-el");
let resultEl = document.getElementById("result-el");
let msgOfResultEl = document.getElementById("msg-of-result-el");
let submitDisplay = document.getElementById("submit");
let newWordBtn = document.getElementById("new-word-btn");
let resultBtn = document.getElementById("result-btn");
let message;









let io = "";
function ioAdder(){
    if(randomNum1 == 1){
        io = "io";
    } else if(randomNum1 == 2){
        io = "tu";
    } else if(randomNum1 == 3){
        io = "lei/lui";
    } else if(randomNum1 == 4){
        io = "noi";
    } else if(randomNum1 == 5){
        io = "voi";
    } else if(randomNum1 == 6){
        io = "loro";
    } else{
        io = "Error:"
    }
}
function toStartGame(){
    verbAdder();
    ioAdder();
    textAdder();
}

function textAdder(){
    verbiEl.textContent = (verbi[0]);
    ioEl.textContent = (io);
}




 function checkAnswer(){
    if((resultEl.value).toLowerCase() == verbi[randomNum1]){
        message = "La risposta è giusta.";
        submitDisplay.style.display = "none";
        newWordBtn.style.display = "initial";
        resultBtn.style.display = "none";
    } else {
        message = "La risposta è sbagliato.";
        newWordBtn.style.display = "initial";
        resultBtn.style.display = "initial";
    }
    msgOfResultEl.textContent = message;
 }
function newWord(){
    if(level == 1){
        randomNum2 = Math.floor(Math.random()*30)+1;
        randomNum1 = Math.floor(Math.random()*6)+1;
        toStartGame();
    } else if(level == 2){
        randomNum2 = Math.floor(Math.random()*30)+31;
        randomNum1 = Math.floor(Math.random()*6)+1;
        toStartGame();
    } else if(level == 3){
        randomNum2 = Math.floor(Math.random()*20)+61;
        randomNum1 = Math.floor(Math.random()*6)+1;
        toStartGame();
    }
    submitDisplay.style.display = "initial";
    newWordBtn.style.display = "none";
    resultBtn.style.display = "none";
    resultEl.value = "";
    msgOfResultEl.textContent = "";
}

function result(){
    // resultEl.value = "";
    msgOfResultEl.textContent = "Result is: " + verbi[randomNum1];
    submitDisplay.style.display = "initial";
    resultBtn.style.display = "none";
}





