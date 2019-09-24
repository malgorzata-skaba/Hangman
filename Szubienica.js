var password ="No pain no gain";
password = password.toUpperCase();



var	password_length = password.length;

var hidden_password = "";
var life = 0;
var yes= new Audio("wave/yes.wav");
var no= new Audio("wave/no.wav");

for(var i = 0; i <= password_length-1; i++)
{
	if(password.charAt(i) ==" ")
	{
		hidden_password=hidden_password + " ";
	}
	else
	{
		hidden_password=hidden_password + "-";
	}
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
		document.getElementById("letters").innerHTML = "Yes! Its correct. You won!<br/><br/>"  + password + '<br/><br/><span class="reset" onclick="location.reload()">ONCE AGAIN?<span/>'
	}

	//lose
	if (life >=9)
	{
		document.getElementById("letters").innerHTML = "Oh no! You lose!" + password + '<br/><br/><span class="reset" onclick="location.reload()">ONCE AGAIN?<span/>'
	}

	
}

