let playerText = document.getElementById("playerText")
let restartBtn = document.getElementById("restartBtn")
let boxes = Array.from(document.getElementsByClassName("box"))


let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')
console.log(boxes)

const X_TEXT = "X"
const O_TEXT = "O"

let currentPlayer = X_TEXT
let spaces =Array(9).fill(null)

const startgame = ()=> {

    boxes.forEach( box => box.addEventListener('click', boxclicked))

}

//Se vencer mais de duas vezes nao foi falha
function boxclicked (e){
    const id = e.target.id

    if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        if(playerHaswon() !== false){

            playerText = `${currentPlayer} venceu!` 
            let winnig_blocks = playerHaswon();

            winnig_blocks.map(box => boxes[box].style.backgroundColor = winnerIndicator)
        }

        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT

    }

}

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

]
// Verifica se as posições a, b
//  e c têm o mesmo valor 
// (significa que um jogador ganhou).
function playerHaswon(){
    for (const condition of winningCombos) {
        let [a,b,c] = condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])){
            return [a,b,c]

        }
    }
    return false
}

restartBtn.addEventListener("click", restart)

//fazer um restart que a cada vez que restart ele conta as vezes jogas

function restart(){

    spaces.fill(null)

    boxes.forEach( box => {
        box.innerText = ''
        box.style.backgroundColor = ''
    })

    playerText = 'TIC TAC TOE'
    currentPlayer = X_TEXT


}

startgame()

