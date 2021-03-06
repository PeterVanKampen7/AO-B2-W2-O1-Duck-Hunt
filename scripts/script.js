var display = document.getElementById("display");
var endgame = document.getElementById("endgame");

var duck = {
	html:document.getElementById("duck"),
	X:600,
	Y:300,
	run: "null"
}
var duck2 = {
	html:document.getElementById("duck2"),
	X:300,
	Y:300,
	run: "null"
}
var duck3 = {
	html:document.getElementById("duck3"),
	X:900,
	Y:300,
	run: "null"
}
var duckSpeed = 500;

var hit = 0;
var miss = 0;
var hitdisplay = document.getElementById("hits");
var missdisplay = document.getElementById("misses")

var easy = document.getElementById("easy");
var medium = document.getElementById("medium");
medium.style.backgroundColor = "lightblue";
var hard = document.getElementById("hard");

var one = document.getElementById("one");
one.style.backgroundColor = "lightblue";
var two = document.getElementById("two");
var three = document.getElementById("three");

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

duck.html.addEventListener("click", function(){
	hit += 1;
	miss -= 1;
	hitdisplay.innerHTML = "HITS: "+hit;
	checkEnd();
	resetDuck(duck);
})

duck2.html.addEventListener("click", function(){
	hit += 1;
	miss -= 1;
	hitdisplay.innerHTML = "HITS: "+hit;
	checkEnd();
	resetDuck(duck2);
})

duck3.html.addEventListener("click", function(){
	hit += 1;
	miss -= 1;
	hitdisplay.innerHTML = "HITS: "+hit;
	checkEnd();
	resetDuck(duck3);
})

display.addEventListener("click", function(){
	miss += 1;
	missdisplay.innerHTML = "MISSES: "+miss;
	checkEnd();
})

function resetDuck(duck)
{
	clearInterval(duck.run);
	duck.html.style.display = "none";
	duck.X = 600;
	duck.Y = 300;	
	duck.html.style.left = duck.X+"px";
	duck.html.style.top = duck.Y+"px";
	setTimeout(function(){		
		duck.html.style.display = "inline";
		startInterval(duck);
	}, 1000);
}

function fly(direction, duck)
{
	switch(direction)
	{
		case "N":
			duck.Y -= 75;
			duck.html.style.top = duck.Y+"px";	
			if(!checkBounds("Y", duck))
			{
				duck.Y += 150;
				duck.html.style.top = duck.Y+"px";
			}	
			break;
		case "NE":
			duck.Y -= 75;			
			duck.X += 75;
			duck.html.style.top = duck.Y+"px";	
			if(!checkBounds("Y", duck))
			{
				duck.Y += 150;
				duck.html.style.top = duck.Y+"px";
			}	
			duck.html.style.left = duck.X+"px";
			if(!checkBounds("X", duck))
			{
				duck.X -= 150;
				duck.html.style.left = duck.X+"px";
			}
			break;
		case "E":
			duck.X += 75;
			duck.html.style.left = duck.X+"px";
			if(!checkBounds("X", duck))
			{
				duck.X -= 150;
				duck.html.style.left = duck.X+"px";
			}
			break;
		case "SE":
			duck.Y += 75;			
			duck.X += 75;
			duck.html.style.top = duck.Y+"px";	
			if(!checkBounds("Y", duck))
			{
				duck.Y -= 150;
				duck.html.style.top = duck.Y+"px";
			}
			duck.html.style.left = duck.X+"px";
			if(!checkBounds("X", duck))
			{
				duck.X -= 150;
				duck.html.style.left = duck.X+"px";
			}
			break;
		case "S":
			duck.Y += 75;
			duck.html.style.top = duck.Y+"px";	
			if(!checkBounds("Y", duck))
			{
				duck.Y -= 150;
				duck.html.style.top = duck.Y+"px";
			}
			break;
		case "SW":
			duck.Y += 75;				
			duck.X -= 75;
			duck.html.style.top = duck.Y+"px";	
			if(!checkBounds("Y", duck))
			{
				duck.Y -= 150;
				duck.html.style.top = duck.Y+"px";
			}
			duck.html.style.left = duck.X+"px";
			if(!checkBounds("X", duck))
			{
				duck.X += 150;
				duck.html.style.left = duck.X+"px";
			}
			break;
		case "W":
			duck.X -= 75;
			duck.html.style.left = duck.X+"px";
			if(!checkBounds("X", duck))
			{
				duck.X += 150;
				duck.html.style.left = duck.X+"px";
			}
			break;
		case "NW":
			duck.Y -= 75;			
			duck.X -= 75;
			duck.html.style.top = duck.Y+"px";	
			if(!checkBounds("Y", duck))
			{
				duck.Y += 150;
				duck.html.style.top = duck.Y+"px";
			}	
			duck.html.style.left = duck.X+"px";
			if(!checkBounds("X", duck))
			{
				duck.X += 150;
				duck.html.style.left = duck.X+"px";
			}
			break;
	}
}

function checkBounds(bound, duck)
{
	if(bound == "X")
	{
		if(duck.X > 0 && duck.X < 1105)
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
		if(duck.Y > -100 && duck.Y < 630)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}

var run;
function startInterval(duck)
{
	duck.run = setInterval(function(){
		var rand = Math.floor((Math.random() * 8));
		fly(directions[rand], duck);
	}, duckSpeed);
}

function startAll()
{
	startInterval(duck);
	startInterval(duck2);
	startInterval(duck3);
}
startAll();

function stopAll()
{
	clearInterval(duck.run);
	clearInterval(duck2.run);
	clearInterval(duck3.run);
}

function checkEnd()
{
	var temp = hit + miss;
	if(temp == 20)
	{
		stopAll();
		endgame.style.display = "block";
		var score = document.getElementById("score");
		score.innerHTML = "YOU SCORED "+hit+" HITS AND "+miss+" MISSES";
	}
}

easy.addEventListener("click", function(){
	easy.style.backgroundColor = "lightblue";
	medium.style.backgroundColor = "lightgreen";
	hard.style.backgroundColor = "lightgreen";
	miss -= 1;
	duckSpeed = 700;
	stopAll();
	startAll();
})

medium.addEventListener("click", function(){
	easy.style.backgroundColor = "lightgreen";
	medium.style.backgroundColor = "lightblue";
	hard.style.backgroundColor = "lightgreen";
	miss -= 1;
	duckSpeed = 500;
	stopAll();
	startAll();
})

hard.addEventListener("click", function(){
	easy.style.backgroundColor = "lightgreen";
	medium.style.backgroundColor = "lightgreen";
	hard.style.backgroundColor = "lightblue";
	miss -= 1;
	duckSpeed = 300;
	stopAll();
	startAll();
})

one.addEventListener("click", function(){
	duck2.html.style.display = "none";
	duck3.html.style.display = "none";
	miss -= 1;
	one.style.backgroundColor = "lightblue";
	two.style.backgroundColor = "lightgreen";
	three.style.backgroundColor = "lightgreen";
})

two.addEventListener("click", function(){
	duck2.html.style.display = "inline";
	duck3.html.style.display = "none";
	miss -= 1;
	one.style.backgroundColor = "lightgreen";
	two.style.backgroundColor = "lightblue";
	three.style.backgroundColor = "lightgreen";
})

three.addEventListener("click", function(){
	duck2.html.style.display = "inline";
	duck3.html.style.display = "inline";
	miss -= 1;
	one.style.backgroundColor = "lightgreen";
	two.style.backgroundColor = "lightgreen";
	three.style.backgroundColor = "lightblue";
})

