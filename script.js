
var playerStats = []; // Life, Name, Infect, Energy, Experience, CD1, CD2, CD3

function createGame(life, players) {
    console.log(life);
    console.log(players);
    document.getElementById("createGame").remove()
    var body = document.body,
    html = document.documentElement;

    var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    var width = document.body.clientWidth;
    let downPx = height/2;
    if (players<3){ downPx *= 2;}
    createPlayer(0, "red", "padding-bottom:"+downPx+"px",height, life, "rgb(255, 70, 70)"); 
    createPlayer(1, "blue", "left:50%; padding-bottom:"+downPx+"px",height, life, "rgb(60, 60, 235)");
    if (players>2){createPlayer(2, "green", "top:50%; padding-bottom:"+downPx+"px",height, life, "rgb(40, 155, 40)")}; 
    if (players>3){createPlayer(3, "yellow", "left:50%; top:50%; padding-bottom:"+downPx+"px",height, life, "rgb(255, 255, 170)")};
    playerStats = [];
    for (var i=0; i<players; i++) {
        let player = [
            parseInt(life), "player"+i, 0, 0, 0, 0, 0, 0
        ];
        playerStats[i]=player;
    }
}

function createResetButton() {
    var btn = document.createElement("button");
    btn.innerHTML = "Restart";
    btn.addEventListener("click", refresh);
    document.body.append(btn);
}

function createPlayer(index, col, extracss="", height=1, life=40, secCol =col) {
    var rect = document.createElement("div");
    rect.style = "background-color:"+col+"; padding-left:25%; padding-right:25%; display: unset; position:absolute; "+extracss;
   
    var btn1 = document.createElement("button");
    btn1.style = "width:40%; left:0px; position:absolute; height:"+height/2.2+"px; border:none;"+"background-color:"+secCol+";";
    btn1.addEventListener("click", function() {
        changePlayerStat(index,0,1);
    });
    rect.append(btn1);
    
    var lifeTotal = document.createElement("p");
    lifeTotal.innerHTML = life;
    lifeTotal.id = "playerLife"+index;
    lifeTotal.style = "position: absolute; left:40%; width:20%; vertical-align:middle; text-align: center; font-size:40px; bottom:35%;";
    rect.append(lifeTotal);

    var btn2 = document.createElement("button");
    btn2.style = "width:40%; left:55%; position:absolute; height:"+height/2.2+"px; border:none;"+"background-color:"+secCol+";";
    btn2.addEventListener("click", function() {
        changePlayerStat(index,0,-1);
    });
    rect.append(btn2);

    document.body.append(rect);
}

function changePlayerStat(playerIndex, statIndex, change) {
    playerStats[playerIndex][statIndex] += parseInt(change);
    document.getElementById("playerLife"+playerIndex).innerHTML = parseInt(document.getElementById("playerLife"+playerIndex).innerHTML)+change;
}

function refresh() {
    location.reload();
}

 