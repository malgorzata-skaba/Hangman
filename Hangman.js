var sentences = new Array (50);
sentences[0] = "Beauty is power. A smile is its sword";
sentences[1] = "Beauty is only skin deep";
sentences[2] = "Beauty is in the eye of the beholder";
sentences[3] = "A beautiful thing is never perfect";
sentences[4] = "Everything has beauty, but not everyone sees it";
sentences[5] = "Two wrongs don't make a right";
sentences[6] = "The pen is mightier than the sword";
sentences[7] = "When in Rome, do as the Romans";
sentences[8] = "When the going gets tough, the tough get going";
sentences[9] = "No man is an island";
sentences[10] = "Fortune favors the bold";
sentences[11] = "People who live in glass houses should not throw stones";
sentences[12] = "Hope for the best, but prepare for the worst";
sentences[13] = "Better late than never";
sentences[14] = "Birds of a feather flock together";
sentences[15] = "A picture is worth a thousand words";
sentences[16] = "There's no such thing as a free lunch";
sentences[17] = "There's no place like home";
sentences[18] = "Discretion is the greater part of valor";
sentences[19] = "The early bird catches the worm";
sentences[20] = "Never look a gift horse in the mouth";
sentences[21] = "You can't make an omelet without breaking a few eggs";
sentences[22] = "God helps those who help themselves";
sentences[23] = "You can't always get what you want";
sentences[24] = "Practice makes perfect";
sentences[25] = "A watched pot never boils";
sentences[26] = "Actions speak louder than words";
sentences[27] = "If it ain't broke, don't fix it";
sentences[28] = "Too many cooks spoil the broth";
sentences[29] = "Easy come, easy go";
sentences[30] = "Don't bite the hand that feeds you";
sentences[31] = "All good things must come to an end";
sentences[32] = "If you can't beat 'em, join 'em";
sentences[33] = "Necessity is the mother of invention";
sentences[34] = "A penny saved is a penny earned";
sentences[35] = "Good things come to those who wait";
sentences[36] = "Don't put all your eggs in one basket";
sentences[37] = "Two heads are better than one";
sentences[38] = "The grass is always greener on the other side of the hill";
sentences[39] = "Honesty is the best policy";
sentences[40] = "You can lead a horse to water, but you can't make him drink";
sentences[41] = "Don't count your chickens before they hatch";
sentences[42] = "If at first you don't succeed, try, try again";
sentences[43] = "If you don't have anything nice to say, don't say anything at all";
sentences[44] = "If you're not part of the solution, you're part of the problem";
sentences[45] = "Rome wasn't built in a day";
sentences[46] = "Strike while the iron is hot";
sentences[47] = "The apple doesn't fall far from the tree";
sentences[48] = "The road to hell is paved with good intentions";
sentences[49] = "What goes up must come down";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var random = getRandomIntInclusive (0,49);
var password = sentences[random];
password = password.toUpperCase();

var	password_length = password.length;

var hidden_password = "";
var life = 0;
var yes = new Audio("wave/yes.wav");
var no = new Audio("wave/no.wav");
var win = new Audio("wave/win.wav");
var lose = new Audio("wave/lose.wav");

for(var i = 0; i <= password_length-1; i++)
{
	switch (password.charAt(i))
	{
		case "'":
			hidden_password=hidden_password + "'";
			break;
		case ".":
			hidden_password=hidden_password + ".";
			break;
		case ",":
			hidden_password=hidden_password + ",";
			break;
		case "!":
			hidden_password=hidden_password + "!";
			break;
		case "?":
			hidden_password=hidden_password + "?";
			break;
		case " ":
			hidden_password=hidden_password + " ";
			break;
		case ";":
			hidden_password=hidden_password + ";";
			break;
		case ":":
			hidden_password=hidden_password + ":";
			break;
		default:
			hidden_password=hidden_password + "_";
	}



	// if(password.charAt(i) ==" ")
	// {
	// 	hidden_password=hidden_password + " ";
	// }
	// if (password.charAt(i)==".") 
	// {
	// 	hidden_password=hidden_password + ".";
	// }
	// else
	// {
	// 	hidden_password=hidden_password + "-";
	// }
}

function write_password()
{
	document.getElementById("board").innerHTML = hidden_password;
}
window.onload = start;

var letter=new Array(30);
letter[0] = "A";
letter[1] = "B";
letter[2] = "C";
letter[3] = "D";
letter[4] = "E";
letter[5] = "F";
letter[6] = "G";
letter[7] = "H";
letter[8] = "I";
letter[9] = "J";
letter[10] = "K";
letter[11] = "L";
letter[12] = "M";
letter[13] = "N";
letter[14] = "O";
letter[15] = "P";
letter[16] = "Q";
letter[17] = "R";
letter[18] = "S";
letter[19] = "T";
letter[20] = "U";
letter[21] = "V";
letter[22] = "W";
letter[23] = "X";
letter[24] = "Y";
letter[25] = "Z";
letter[26] = " ";
letter[27] = " ";
letter[28] = " ";
letter[29] = " ";



function start()
{
	var div_content = "";

	//tworzenie kodu html dla wszystkich liter
	for (i=0;i<=29;i++)
	{
		var element = "let"+i;
		div_content = div_content + '<div class="letter" onclick="check('+i+')" id="' + element +'">' +letter[i]+ '</div>';
		if ((i+1)%6 == 0 )
		{
			div_content= div_content + '<div style="clear:both;"/></div>';
		}
	}

	document.getElementById("letters").innerHTML = div_content;


	write_password();
}



//klasa o nazwie String.prototype.nazwa funkcji = function (dwa argumenty)
String.prototype.setChar = function(position, character){

	if (position>this.length-1)
	{

		return this.toString();
	}
	else {
		
		return this.substr(0, position) + character + this.substr(position+1);
	}
	
};


function check(nr)
{

	var hit = false;
	for(i=0;i<password_length;i++)
	{
		if (password.charAt(i)==letter[nr])
		{
			hidden_password = hidden_password.setChar(i,letter[nr]);
			hit = true;
		}
	}

	if(hit==true)
	{
		yes.play();
		var element = "let"+ nr;
		document.getElementById(element).style.background ="#003300";
		document.getElementById(element).style.color ="#00C000";
		document.getElementById(element).style.border ="2px solid #00C000";
		document.getElementById(element).style.cursor = "default";
		document.getElementById(element).setAttribute("onclick", ";");



		write_password();
	}
	else 
	{

		var element = "let"+ nr;
		document.getElementById(element).style.background ="#330000";
		document.getElementById(element).style.color ="#C00000";
		document.getElementById(element).style.border ="2px solid #C00000";
		document.getElementById(element).style.cursor = "default";
		document.getElementById(element).setAttribute("onclick", ";");

		no.play();

		//life -- 
		life++;
		var image = "img/s"+life+".jpg";
		document.getElementById("gallows").innerHTML = '<img src="'+image+'" alt=""/>';

	}

	//win
	if (password==hidden_password)
	{
		document.getElementById("letters").innerHTML = "Yes! Its correct. You won!<br/><br/>"  + password + '<br/><br/><span class="reset" onclick="location.reload()">ONCE AGAIN?<span/>';
		win.play();
	}

	//lose
	if (life >=9)
	{
			document.getElementById("letters").innerHTML = "Oh no! You lose!<br/><br/>" + password + '<br/><br/><span class="reset" onclick="location.reload()">ONCE AGAIN?<span/>';
			lose.play();

	}

	
}



