console.log("Welcome to Tic Tac Toe")
let music = new Audio("Adhiya Original.mp3")
let audioturn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;

const  changeturn = ()=>{
    return turn === "X"? "0":"X"
}
const checkwin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let win = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,5,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
     win.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
        document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won" 
        isgameover = true
        document.querySelector('.image').getElementsByTagName('img')[0].style.width="195px"
        
        }
     })
}
let boxes =document.getElementsByClassName("box");

Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click' , ()=>{
        if(boxtext.innerText ===''){
            music.play();
            boxtext.innerText=turn;
            turn=changeturn();
            audioturn.play();
            checkwin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for" +turn;
            }
            
        }
    })
})
//add onclic listner to reset//
reset.addEventListener('click',()=>{
   let boxtext=document.querySelectorAll('.boxtext');
   Array.from(boxtext).forEach(element => {
    element.innerText = ""
   });
   turn="X";
   isgameover=false
   if(!isgameover){
    document.getElementsByClassName("info")[0].innerText = "Turn for" +turn;
    document.querySelector('.image').getElementsByTagName('img')[0].style.width="0px"
}

})