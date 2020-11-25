var display = document.getElementById("display");
var endgame = document.getElementById("endgame");

var duck = document.getElementById("duck");
var duckSpeed = 500;

var hit = 0;
var miss = 0;
var hitdisplay = document.getElementById("hits");
var missdisplay = document.getElementById("misses")

var easy = document.getElementById("easy");
var medium = document.getElementById("medium");
var hard = document.getElementById("hard");

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
			duck.style.top = posY+"px";	
			if(!checkBounds("Y"))
			{
				posY += 150;
				duck.style.top = posY+"px";
			}	
			break;
		case "NE":
			posY -= 75;			
			posX += 75;
			duck.style.top = posY+"px";	
			if(!checkBounds("Y"))
			{
				posY += 150;
				duck.style.top = posY+"px";
			}	
			duck.style.left = posX+"px";
			if(!checkBounds("X"))
			{
				posX -= 150;
				duck.style.left = posX+"px";
			}
			break;
		case "E":
			posX += 75;
			duck.style.left = posX+"px";
			if(!checkBounds("X"))
			{
				posX -= 150;
				duck.style.left = posX+"px";
			}
			break;
		case "SE":
			posY += 75;			
			posX += 75;
			duck.style.top = posY+"px";	
			if(!checkBounds("Y"))
			{
				posY -= 150;
				duck.style.top = posY+"px";
			}
			duck.style.left = posX+"px";
			if(!checkBounds("X"))
			{
				posX -= 150;
				duck.style.left = posX+"px";
			}
			break;
		case "S":
			posY += 75;
			duck.style.top = posY+"px";	
			if(!checkBounds("Y"))
			{
				posY -= 150;
				duck.style.top = posY+"px";
			}
			break;
		case "SW":
			posY += 75;				
			posX -= 75;
			duck.style.top = posY+"px";	
			if(!checkBounds("Y"))
			{
				posY -= 150;
				duck.style.top = posY+"px";
			}
			duck.style.left = posX+"px";
			if(!checkBounds("X"))
			{
				posX += 150;
				duck.style.left = posX+"px";
			}
			break;
		case "W":
			posX -= 75;
			duck.style.left = posX+"px";
			if(!checkBounds("X"))
			{
				posX += 150;
				duck.style.left = posX+"px";
			}
			break;
		case "NW":
			posY -= 75;			
			posX -= 75;
			duck.style.top = posY+"px";	
			if(!checkBounds("Y"))
			{
				posY += 150;
				duck.style.top = posY+"px";
			}	
			duck.style.left = posX+"px";
			if(!checkBounds("X"))
			{
				posX += 150;
				duck.style.left = posX+"px";
			}
			break;
	}
}

function checkBounds(bound)
{
	if(bound == "X")
	{
		if(posX > 0 && posX < 1105)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	else if(bound == "Y")
	{
		if(posY > -100 && posY < 630)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}

var run = setInterval(function(){
	var rand = Math.floor((Math.random() * 8));
	fly(directions[rand]);
}, duckSpeed);

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

easy.addEventListener("click", function(){
	miss -= 1;
	duckSpeed = 700;
	clearInterval(run);
	run = setInterval(function(){
		var rand = Math.floor((Math.random() * 8));
		fly(directions[rand]);
	}, duckSpeed);
})

medium.addEventListener("click", function(){
	miss -= 1;
	duckSpeed = 500;
	clearInterval(run);
	run = setInterval(function(){
		var rand = Math.floor((Math.random() * 8));
		fly(directions[rand]);
	}, duckSpeed);
})

hard.addEventListener("click", function(){
	miss -= 1;
	duckSpeed = 300;
	clearInterval(run);
	run = setInterval(function(){
		var rand = Math.floor((Math.random() * 8));
		fly(directions[rand]);
	}, duckSpeed);
})