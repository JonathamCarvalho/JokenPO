const result = document.querySelector(".result")
const HumanScore = document.querySelector(".human-score")
const iaScore = document.querySelector("#ia-score")
const resultIa = document.querySelector("#result-ia")

let playerScore = 0
let MachineScore = 0

const GAME_OPTIONS = {
    PEDRA: 'pedra', 
    PAPEL: 'papel', 
    TESOURA: 'tesoura'
}

function playHuman(humanChoice) {
   
    playTheGame(humanChoice, playIA())

}

function playIA(iaChoice) {

    const choices = ['pedra', 'papel', 'tesoura']

    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}


function playTheGame(human, ia){
    console.log("Humano:" + human + "Ia:" + ia)


    if(human === ia){
        
        result.innerHTML = "Empatou &#x1F605"
    }
    else if(human === 'papel' && ia === 'pedra' || 
            human === 'pedra' && ia === 'tesoura' ||
            human === 'tesoura' && ia === 'papel' ){
        
        playerScore++
        HumanScore.innerHTML = playerScore      

        result.innerHTML = "Você ganhou &#x1F60E"

       
    }
    else{

        MachineScore++
        iaScore.innerHTML = MachineScore

         result.innerHTML = "IA ganhou &#x1F62D"
    }

    resultIa.innerHTML = ia 

}





