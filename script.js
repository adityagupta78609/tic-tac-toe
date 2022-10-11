console.log("welcome to tic tac toe");
let music = new Audio("music.mp3");
let ting = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let iswin = false;
let player1;
let player2;
let player ="";
let isdraw = false;
const submitted = ()=>{

     player1 = document.querySelector('#player1').value;
     player2 = document.querySelector('#player2').value;
     player = player1;
     if(player == ""){
        alert("please enter name of players")
    }else{
         document.querySelector("#info").innerText = player + "\'s turn "  ;
        }
        
}

// function to change the turn
const turnChange = () =>{
    if (turn === "X"){
      turn ="O";
      player = player2;
    }
    else{
        turn = "X";
        player = player1;
    }
}



// function to check win
const checkWin=()=>{
    let boxtext = document.getElementsByClassName("boxtext");
 let wins =[
    // horizontal cases
    [0,1,2],
    [3,4,5],
    [6,7,8],
    //vertical cases
    [0,3,6],
    [1,4,7],
    [2,5,8],
    //diagonal cases
    [0,4,8],
    [2,4,6],
 ]
 wins.forEach(e =>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== ""))
    {   let winner;
        if(boxtext[e[0]].innerText === 'X'){
            winner = player1;
        }else{
            winner = player2;
        }
        
        document.querySelector("#info").innerText = winner + " is winner";
        music.play();
        setTimeout(function(){
            music.pause();
          }, 8000)

          document.querySelector('#gif').style.display = "inline";
        iswin = true;
        isdraw = false;

    }else
    if((boxtext[e[0]].innerText !== boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "") && (boxtext[0].innerText !== "") && (boxtext[1].innerText !== "") && (boxtext[2].innerText !== "") && (boxtext[3].innerText !== "") && (boxtext[4].innerText !== "") && (boxtext[5].innerText !== "") && (boxtext[6].innerText !== "") && (boxtext[7].innerText !== "") && (boxtext[8].innerText !== "") ){
        
        isdraw = true;
    }
    
 })

}


//reset button 
const reset =() =>{
    let boxes2 = document.getElementsByClassName("box");
Array.from(boxes2).forEach(element => {
    let boxtext2 = element.querySelector(".boxtext");
    boxtext2.innerText = "";
    gameover.play();
    music.pause();
    document.querySelector("#info").innerText = "";
    document.querySelector('#player1').value = "";
    document.querySelector('#player2').value = "";
    document.querySelector('#gif').style.display = "none";
    isdraw = false;
    iswin = false;

})}

//play again button
const again = () => {
    let boxes2 = document.getElementsByClassName("box");
Array.from(boxes2).forEach(element => {
    let boxtext2 = element.querySelector(".boxtext");
    boxtext2.innerText = "";
    gameover.play();
    music.pause();
    document.querySelector("#info").innerText = "";
    submitted();
    document.querySelector('#gif').style.display = "none";
    isdraw = false;
    iswin = false;
})}



//game logic



    // gets an array of all divs having class = 'box'
    let boxes = document.getElementsByClassName("box");
    
    // foreach loop for accessing every box element of array 
    Array.from(boxes).forEach(element => {
        
        //storing element with class ="boxtext" inside every box
        let boxtext = element.querySelector(".boxtext");
        
        // eventlistener for click event on boxes 
        boxtext.addEventListener('click',()=>{
            if(boxtext.innerText === ""){
            boxtext.innerText = turn;
            turnChange();
            ting.play();
            checkWin();
            
            if(!iswin ){
            document.querySelector("#info").innerText = player + "\'s turn "  ;
           }
           if(isdraw){
            document.querySelector("#info").innerText = " it's a Draw ";
        }
        }
    })
})

