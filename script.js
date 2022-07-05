console.log("welcome to tic tac toc")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gemeover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false

//function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//function to check for a win
const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, -13, 5, 0],
        [3, 4, 5, -13, 15, 0],
        [6, 7, 8, -13, 25, 0],
        [0, 3, 6, -23.5, 14, 90],
        [1, 4, 7, -13.5, 14, 90],
        [2, 5, 8, -3.5, 14, 90],
        [2, 4, 6, -12, 13, 134],
        [0, 4, 8, -14, 14, 47],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.line').style.width = "30vw";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

// Game logic
music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkwin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
            }
        }
    })
});
// Add anclick listener to reset button
reset.addEventListener('click', (e) => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"
    isgameover = false
    document.querySelector('.line').style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})