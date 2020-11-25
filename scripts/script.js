var display = document.getElementById("display");
var endgame = document.getElementById("endgame");

var duck = document.getElementById("duck");

var hit = 0;
var miss = 0;
var hitdisplay = document.getElementById("hits");
var missdisplay = document.getElementById("misses")

var directions = 
[
	"N",
	"NE",
	"E",
	"SE",
	"S",
	"SW",
	"W",
	"NW"
]

var again = document.getElementById("again");

again.addEventListener("click", function(){
	location.reload();
})

duck.addEventListener("click", function(){
	hit += 1;
	miss -= 1;
	hitdisplay.innerHTML = "HITS: "+hit;
	checkEnd();
})

display.addEventListener("click", function(){
	miss += 1;
	missdisplay.innerHTML = "MISSES: "+miss;
	checkEnd();
})

var posY = 300;
var posX = 600;

function fly(direction)
{
	switch(direction)
	{
		case "N":
			posY -= 75;
			checkBounds();
			duck.style.top = posY+"px";		
			break;
		case "NE":
			posY -= 75;			
			posX += 75;
			checkBounds();
			duck.style.top = posY+"px";	
			duck.style.left = posX+"px";
			break;
		case "E":
			posX += 75;
			checkBounds();
			duck.style.left = posX+"px";
			break;
		case "SE":
			posY += 75;			
			posX += 75;
			checkBounds();
			duck.style.top = posY+"px";
			duck.style.left = posX+"px";
			break;
		case "S":
			posY += 75;
			checkBounds();
			duck.style.top = posY+"px";	
			break;
		case "SW":
			posY += 75;				
			posX -= 75;
			checkBounds();
			duck.style.top = posY+"px";
			duck.style.left = posX+"px";
			break;
		case "W":
			posX -= 75;
			checkBounds();
			duck.style.left = posX+"px";
			break;
		case "NW":
			posY -= 75;			
			posX -= 75;
			checkBounds();
			duck.style.top = posY+"px";	
			duck.style.left = posX+"px";
			break;
	}
}

function checkBounds()
{
	if(posX < 0)
	{
		posX = 1105;
	}
	else if(posX > 1105)
	{
		posX = 0;
	}

	if(posY < 0)
	{
		posY = 600;
	}
	else if(posY > 630)
	{
		posY = 0;
	}
}

var run = setInterval(function(){
	var rand = Math.floor((Math.random() * 8));
	fly(directions[rand]);
}, 500);

function checkEnd()
{
	var temp = hit + miss;
	if(temp == 20)
	{
		clearInterval(run);
		endgame.style.display = "block";
		var score = document.getElementById("score");
		score.innerHTML = "YOU SCORED "+hit+" HITS AND "+miss+" MISSES";
	}
}