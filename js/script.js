/* FUNZIONE CHE GENERA UN NUMERO CASUALE */
function generateUniqueNumber(){
    return Math.floor(Math.random()* 100 + 1);
}

/* FUNZIONE CHE PUSHA I NUMERI IN UN ARRAY E CONTROLLA CHE NON VI SIANO NUMERI DOPPIONI */
function arrayRandomNumber(){
    let n_memory = [];
    while (n_memory.length<5){
        let randomNum = generateUniqueNumber();
        
        if (!n_memory.includes(randomNum)){
            n_memory.push(randomNum)
        }
    }
    return n_memory
}

/* FUNZIONE CHE MOSTRA IL GIOCO NEL DOM */
function printNumbers(){
    let numDom = arrayRandomNumber()
    let showNum = document.getElementById(`showNum`)
    showNum.innerText = `I numeri sono ${numDom.join(`, `)}`
  
    /* TIMEOUT PER FAR SPARIRE I NUMERI DEL MEMORY */
    setTimeout(function(){
        showNum.innerText = ``
       
        
    },30000) 
    
    /* TIMEOUT PER DARE ALL'UTENTE IL TEMPO DI INSERIRE I NUMERI CHE HA VISTO */
    setTimeout(function(){
    
        let userChoice = []
        let count = 0;
        let correct = []
        let error = []
        let count_error = 0
        /* CICLO FOR PER CONTROLLARE I NUMERI INSERITI DALL'UTENTE */
        for (let i=0; i<5; i++){
            let numUtente = parseInt(prompt("Inserisci i numeri che hai visto"))
            userChoice.push(numUtente)
     
            if(numDom.includes(numUtente)){
                count++
                correct.push(numUtente)
            }else{
                count_error++
                error.push(numUtente)
            }
            
        }
        /* VARIABILE NUMERI AZZECCATI E VISUALIZZAZIONE NEL DOM */
        let azzeccati = document.getElementById("numeri_azzeccati")
        azzeccati.innerText = `Hai azzeccato ${count} numeri! ${correct.join(`, `)}`

        /* VARIABILE NUMERI SBAGLIATI E VISUALIZZAZIONE NEL DOM */
        let errori = document.getElementById("sbagliati")
        errori.innerText = `Hai sbagliato ${count_error} numeri! ${error.join(`, `)}`
        console.log(correct)
        console.log(userChoice)

        /* VARIABILE CHE RIMOSTRA I NUMERI INIZIALI DEL MEMORY PER CONFRONTARLI CON QUELLI INSERITI */
        let numeriIniziali = document.getElementById("gioco");
        numeriIniziali.innerText = `I numeri erano ${numDom.join(`, `)}`
    },35000)
  

}
console.log(printNumbers())

