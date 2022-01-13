const selection = document.getElementsByClassName('btn-select');;
const img = document.querySelectorAll('#btnPlayer img');
const informationGame = document.getElementById('information');
const endGame = document.getElementById("endGame")
const span = document.getElementsByClassName("close")[0];
const mensajeEnd = document.getElementById("mensajeEnd");
const result = document.getElementById("result");
let round = 0;
let total = 0;
let game = 1;
// let punto = 0;
    const selecComputer = new Array();
    selecComputer[0] = "img/right-st.jpg";
    selecComputer[1] = "img/right-pp.jpg";
    selecComputer[2] = "img/right-sc.jpg";
    
    const selecPlayer = new Array();
    selecPlayer[0] = "img/left-st.jpg"; 
    selecPlayer[1] = "img/left-pp.jpg";
    selecPlayer[2] = "img/left-sc.jpg";

    const totalList = new Array();

window.addEventListener('DOMContentLoaded',function(){
    const resultLis = localStorage.getItem('resultado')
    result.innerHTML = resultLis;
})  

function clearHis(){
    localStorage.clear();
    result.innerHTML = '';
}

for(let i = 0; i < selection.length; i++){
    selection[i].addEventListener('click', gamer);
}

function gamer(){
    const random = Math.floor(Math.random() * selecComputer.length);
    let ia = selecComputer[random] 
     if(this.id  === 'bst'){
         document.getElementById('player').src = selecPlayer[0];
         document.getElementById('computer').src = ia;
         let player = selecPlayer.indexOf(selecPlayer[0])
         let computer = selecComputer.indexOf(ia)
         puntaje(player, computer)
     }else if(this.id  === 'bpp'){
         document.getElementById('player').src = selecPlayer[1];
         document.getElementById('computer').src = selecComputer[ia];
         document.getElementById('computer').src = ia;
         let player = selecPlayer.indexOf(selecPlayer[1])
         let computer = selecComputer.indexOf(ia)
         puntaje(player, computer)
     }else{
         document.getElementById('player').src = selecPlayer[2];
         document.getElementById('computer').src = selecComputer[ia];
         document.getElementById('computer').src = ia;
         let player = selecPlayer.indexOf(selecPlayer[2])
         let computer = selecComputer.indexOf(ia)
         puntaje(player, computer)
     }
}

function puntaje(player, computer){
    let punto = 0;
     if(player === computer){
         punto = punto + 0
     }else if (player !== computer){
         if((player === 0 && computer === 1) | (player === 1 && computer === 2) | (player === 2 && computer === 0)){
             punto = punto - 30
         }else if((player === 0 && computer === 2) | (player === 1 && computer === 0) | (player === 2 && computer === 1)){
             punto = punto + 100
         }
     }
        total = total + punto
        round++
        informationGame.innerHTML = `N° Juego: <b>${game}</b>| 
        N° Ronda: <b>${round}/10</b>|
        Puntaje:  <b>${punto}</b>
        `;
        rounds()
        informationGame.innerHTML = `N° Juego: <b>${game}</b>| 
        N° Ronda: <b>${round}/10</b>|
        Puntaje:  <b>${punto}</b>
        `;
}

function rounds(){
if(round === 10){
    round = 0
    game++
    if(total<0){
        total = 0
    }
    result.innerHTML += `<h5>${total}</h5>`;
    localStorage.setItem('resultado', result.innerHTML);
    endGame.style.display = "block";
    mensajeEnd.innerHTML = `FIN DEL JUEGO
    <br>
    Obtuviste un puntaje de: <b>${total}</b> 
    `;
    total = 0
    document.getElementById('player').src = "img/Player.png";
    document.getElementById('computer').src = "img/ia.png";
    }
}

span.onclick = function (){
    endGame.style.display = "none";
}

function closeGame(){
   location.reload()
}

