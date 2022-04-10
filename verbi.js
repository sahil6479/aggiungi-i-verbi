let level = 0;
let randomNum1 = 0;
let randomNum2 = 0;
let varbi = [];

function levelFacile(){
    document.getElementsByClassName("hide")[0].classList.remove("hide");
    document.getElementsByClassName("show")[0].classList.remove("show");
    randomNum1 = Math.floor(Math.random()*6)+1;
    randomNum2 = Math.floor(Math.random()*30)+1;//change number with verbi number = 1-50
    level = 1;
    toStartGame();
}
function levelMedia(){
    document.getElementsByClassName("hide")[0].classList.remove("hide");
    document.getElementsByClassName("show")[0].classList.remove("show");
    randomNum1 = Math.floor(Math.random()*6)+1;
    randomNum2 = Math.floor(Math.random()*30)+31;//change number with verbi number = 51-100
    level = 2;
    toStartGame();
}
function levelDifficile(){
    document.getElementsByClassName("hide")[0].classList.remove("hide");
    document.getElementsByClassName("show")[0].classList.remove("show");
    randomNum1 = Math.floor(Math.random()*6)+1;
    randomNum2 = Math.floor(Math.random()*20)+61;//change number with verbi number = 101-150
    level = 3;
    toStartGame();
}




function verbAdder(){//change number below with verbi 
    if(randomNum2 == 1){
    // verbi facile
        verbi = ["parlare", "parlo", "parli", "parla", "parliamo", "parlate", "parlano"];
    } else if (randomNum2 == 2){
        verbi = ["comprare", "compro", "compri", "compra", "compriamo", "comprate", "comprano"];
    } else if (randomNum2 == 3){
        verbi = ["andare", "vado", "vai", "va", "andiamo", "andate", "vanno"];
    } else if (randomNum2 == 4){
        verbi = ["essere", "sono", "sei", "è", "siamo", "siete", "sono"];
    } else if (randomNum2 == 5){
        verbi = ["avere", "ho", "hai", "ha", "abbiamo", "avete", "hanno"];
    } else if (randomNum2 == 6){
        verbi = ["potere", "posso", "puoi", "può", "possiamo", "potete", "possono"];
    }  else if (randomNum2 == 7){
        verbi = ["fare", "faccio", "fai", "fa", "facciamo", "fate", "fanno"];
    } else if (randomNum2 == 8){
        verbi = ["dire", "dico", "dici", "dice", "diciamo", "dite", "dicono"];
    } else if (randomNum2 == 9){
        verbi = ["venire", "vengo", "vieni", "viene", "veniamo", "venite", "vengono"];
    } else if (randomNum2 == 10){
        verbi = ["dovere", "devo", "devi", "deve", "dobbiamo", "dovete", "devono"];
    } else if (randomNum2 == 11){
        verbi = ["dare", "do", "dai", "dà", "diamo", "date", "dànno"];
    } else if (randomNum2 == 12){
        verbi = ["vedere", "vedo", "vedi", "vede", "vediamo", "vedete", "vedono"];
    } else if (randomNum2 == 13){
        verbi = ["pensare", "penso", "pensi", "pensa", "pensiamo", "pensate", "pensano"];
    } else if (randomNum2 == 14){
        verbi = ["trovare", "trovo", "trovi", "trova", "troviamo", "trovate", "trovano"];
    } else if (randomNum2 == 15){
        verbi = ["mangiare", "mangio", "mangi", "mangia", "mangiamo", "mangiate", "mangiano"];
    } else if (randomNum2 == 16){
        verbi = ["partire", "parto", "parti", "parte", "partiamo", "partite", "partono"];
    } else if (randomNum2 == 17){
        verbi = ["mettere", "metto", "metti", "mette", "mettiamo", "mettete", "mettono"];
    } else if (randomNum2 == 18){
        verbi = ["prendere", "prendo", "prendi", "prende", "prendiamo", "prendete", "prendono"];
    } else if (randomNum2 == 19){
        verbi = ["vivere", "vivo", "vivi", "vive", "viviamo", "vivete", "vivono"];
    } else if (randomNum2 == 20){
        verbi = ["ricordarsi", "mi ricordo", "ti ricordi", "si ricorda", "ci ricordiamo", "vi ricordate", "si ricordano"];
    } else if (randomNum2 == 21){
        verbi = ["passare", "passo", "passi", "passa", "passiamo", "passate", "passano"];
    } else if (randomNum2 == 22){
        verbi = ["credere", "credo", "credi", "crede", "crediamo", "credete", "credono"];
    } else if (randomNum2 == 23){
        verbi = ["guardare", "guardo", "guardi", "guarda", "guardiamo", "guardate", "guardano"];
    } else if (randomNum2 == 24){
        verbi = ["tenere", "tengo", "tieni", "tiene", "teniamo", "tenete", "tengono"];
    } else if (randomNum2 == 25){
        verbi = ["rispondere", "rispondo", "rispondi", "risponde", "rispondiamo", "rispondete", "rispondono"];
    } else if (randomNum2 == 26){
        verbi = ["cercare", "cerco", "cerchi", "cerca", "cerchiamo", "cercate", "cercano"];
    } else if (randomNum2 == 27){
        verbi = ["pagare", "pago", "paghi", "paga", "paghiamo", "pagate", "pagano"];
    } else if (randomNum2 == 28){
        verbi = ["arrivare", "arrivo", "arrivi", "arriva", "arriviamo", "arrivate", "arrivano"];
    } else if (randomNum2 == 29){
        verbi = ["lavorare", "lavoro", "lavori", "lavora", "lavoriamo", "lavorate", "lavorano"];
    } else if (randomNum2 == 30){
        verbi = ["volere", "voglio", "vuoi", "vuole", "vogliamo", "volete", "vogliono"];
    }





    // verbi media
     else if (randomNum2 == 31){
        verbi = ["diventare", "divento", "diventi", "diventa", "diventiamo", "diventate", "diventato"];
    } else if (randomNum2 == 32){
        verbi = ["lasciare", "lascio", "lasci", "lascia", "lasciamo", "lasciate", "lasciano"];
    } else if (randomNum2 == 33){
        verbi = ["chiedere", "chiedo", "chiedi", "chiede", "chiediamo", "chiedete", "chiedono"];
    } else if (randomNum2 == 34){
        verbi = ["uscire", "esco", "esci", "esce", "usciamo", "uscite", "escono"];
    } else if (randomNum2 == 35){
        verbi = ["usare", "uso", "usi", "usa", "usiamo", "usate", "usano"];
    } else if (randomNum2 == 36){
        verbi = ["continuare", "continuo", "continui", "continua", "continuiamo", "continuate", "continuano"];
    } else if (randomNum2 == 37){
        verbi = ["tornare", "torno", "torni", "torna", "torniamo", "tornate", "tornano"];
    } else if (randomNum2 == 38){
        verbi = ["perdere", "perdo", "perdi", "perde", "perdiamo", "perdete", "perdono"];
    } else if (randomNum2 == 39){
        verbi = ["rimanere", "rimango", "rimani", "rimane", "rimaniamo", "rimanete", "rimangono"];
    } else if (randomNum2 == 40){
        verbi = ["offrire", "offro", "offri", "offre", "offriamo", "offrite", "offrono"];
    } else if (randomNum2 == 41){
        verbi = ["raggiungere", "raggiungo", "raggiungi", "raggiunge", "raggiungiamo", "raggiungete", "raggiungono"];
    } else if (randomNum2 == 42){
        verbi = ["chiamare", "chiamo", "chiami", "chiama", "chiamiamo", "chiamate", "chiamano"];
    } else if (randomNum2 == 43){
        verbi = ["provare", "provo", "provi", "prova", "proviamo", "provate", "provano"];
    } else if (randomNum2 == 44){
        verbi = ["cominciare", "comincio", "cominci", "comincia", "cominciamo", "cominciate", "cominciano"];
    } else if (randomNum2 == 45){
        verbi = ["decidere", "decido", "decidi", "decide", "decidiamo", "decidete", "decidono"];
    } else if (randomNum2 == 46){
        verbi = ["dimenticare", "dimentico", "dimentichi", "dimentica", "dimentichiamo", "dimenticate", "dimenticano"];
    } else if (randomNum2 == 47){
        verbi = ["stare", "sto", "stai", "sta", "stiamo", "state", "stanno"];
    } else if (randomNum2 == 48){
        verbi = ["ripetere", "ripeto", "ripeti", "ripete", "ripetiamo", "ripetete", "ripetono"];
    } else if (randomNum2 == 49){
        verbi = ["aprire", "apro", "apri", "apre", "apriamo", "aprite", "aprono"];
    } else if (randomNum2 == 50){
        verbi = ["cambiare", "cambio", "cambi", "cambia", "cambiamo", "cambiate", "cambiano"];
    } else if (randomNum2 == 51){
        verbi = ["ritornare", "ritorno", "ritorni", "ritorna", "ritorniamo", "ritornate", "ritornano"];
    } else if (randomNum2 == 52){
        verbi = ["vincere", "vinco", "vinci", "vince", "vinciamo", "vincete", "vincono"];
    } else if (randomNum2 == 53){
        verbi = ["preparare", "preparo", "prepari", "prepara", "prepariamo", "preparate", "preparano"];
    } else if (randomNum2 == 54){
        verbi = ["ottenere", "ottengo", "ottieni", "ottiene", "otteniamo", "ottenete", "ottengono"];
    } else if (randomNum2 == 55){
        verbi = ["correre", "corro", "corri", "corre", "corriamo", "correte", "corrono"];
    } else if (randomNum2 == 56){
        verbi = ["piacere", "piaccio", "piaci", "piace", "piacciamo", "piacete", "piaccion"];
    } else if (randomNum2 == 57){
        verbi = ["amare", "amo", "ami", "ama", "amiamo", "amate", "amano"];
    } else if (randomNum2 == 58){
        verbi = ["aspettare", "aspetto", "aspetti", "aspetta", "aspettiamo", "aspettate", "aspettano"];
    } else if (randomNum2 == 59){
        verbi = ["mandare", "mando", "mandi", "manda", "mandiamo", "mandate", "mandano"];
    } else if (randomNum2 == 60){
        verbi = ["aiutare", "aiuto", "aiuti", "aiuta", "aiutiamo", "aiutate", "aiutano"];
    }







    // verbi Difficile
     else if (randomNum2 == 61){
        verbi = ["accettare", "accetto", "accetti", "accetta", "accettiamo", "accettate", "accettano"];
    } else if (randomNum2 == 62){
        verbi = ["presentare", "presento", "presenti", "presenta", "presentiamo", "presentate", "presetano"];
    } else if (randomNum2 == 63){
        verbi = ["parere", "paio", "pari", "pare", "paiamo", "parete", "paiono"];
    } else if (randomNum2 == 64){
        verbi = ["cogliere", "colgo", "cogli", "coglie", "cogliamo", "cogliete", "colgono"];
    } else if (randomNum2 == 65){
        verbi = ["condurre", "conduco", "conduci", "conduce", "conduciamo", "conducete", "conducono"];
    } else if (randomNum2 == 66){
        verbi = ["valere", "valgo", "vali", "vale", "valiamo", "valete", "valgono"];
    } else if (randomNum2 == 67){
        verbi = ["tarre", "traggo", "trai", "trae", "traiamo", "traete", "traggono"];
    } else if (randomNum2 == 68){
        verbi = ["togliere", "tolgo", "togli", "toglie", "togliamo", "togliete", "tolgono"];
    } else if (randomNum2 == 69){
        verbi = ["crescere", "cresco", "cresci", "cresce", "cresciamo", "crescete", "crescono"];
    } else if (randomNum2 == 70){
        verbi = ["mancare", "manco", "manchi", "manca", "manchiamo", "mancate", "mancano"];
    } else if (randomNum2 == 71){
        verbi = ["temere", "temo", "temi", "teme", "temiamo", "temete", "temono"];
    } else if (randomNum2 == 72){
        verbi = ["muovere", "muovo", "muovi", "muove", "muoviamo", "muovete", "muovono"];
    } else if (randomNum2 == 73){
        verbi = ["correggere", "correggo", "correggi", "corregge", "correggiamo", "corregget", "correggono"];
    } else if (randomNum2 == 74){
        verbi = ["coprire", "copro", "copri", "copre", "copriamo", "coprite", "coprono"];
    } else if (randomNum2 == 75){
        verbi = ["rompere", "rompo", "rompi", "rompe", "rompiamo", "rompete", "rompono"];
    } else if (randomNum2 == 76){
        verbi = ["iscrivere", "iscrivo", "iscrivi", "iscrive", "iscriviamo", "iscrivete", "iscrivono"];
    } else if (randomNum2 == 77){
        verbi = ["inviare", "invio", "invii", "invia", "inviamo", "inviate", "inviano"];
    } else if (randomNum2 == 78){
        verbi = ["dividere", "divido", "dividi", "divide", "dividiamo", "dividete", "dividono"];
    } else if (randomNum2 == 79){
        verbi = ["camminare", "cammino", "cammini", "cammina", "camminiamo", "camminate", "camminano"];
    } else if (randomNum2 == 80){
        verbi = ["guadagnare", "guadagno", "guadagni", "guadagna", "guadagniamo", "guadagnate", "guadagnano"];
    }
}
verbAdder();
