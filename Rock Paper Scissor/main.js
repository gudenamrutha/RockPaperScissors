var won_img = [
	'images/laughing-rock.jpg',
	'images/laughing-paper.png',
	'images/laughing-scissors.png'
];
var loose_img = [
	'images/crying-rock.jpg',
	'images/crying-paper.jpg',
	'images/crying-scissors.jpg'
];
var choose=[
	'rock',
	'paper',
	'scissors'
];

function play()
{
	var choosed = choose[Math.floor(Math.random()* choose.length)] ;
	
	if(document.getElementById('rock').checked)
	{
		if(choosed === 'rock')
		{
			document.getElementById('result').innerHTML = "Draw";
			document.getElementById('result').style.color = "orange";
		}
		else if(choosed === 'paper')
		{
			document.getElementById('result').innerHTML = "You loose";
			document.getElementById('result').style.color = "red";
		}
		else if(choosed === 'scissors')
		{
			document.getElementById('result').innerHTML = "You win";
			document.getElementById('result').style.color = "green";
		}
	}
	else if(document.getElementById('paper').checked)
	{
			if(choosed === 'paper')
			{
					document.getElementById('result').innerHTML = "Draw";
					document.getElementById('result').style.color = "orange";
			}
			else if(choosed === 'rock')
			{
				document.getElementById('result').innerHTML = "You win";
				document.getElementById('result').style.color = "green";
			}
			else if(choosed === 'scissors')
			{
				document.getElementById('result').innerHTML = "You Loose";
				document.getElementById('result').style.color = "red";
			}
	}
	else if(document.getElementById('scissors').checked)
	{
			if(choosed === 'scissors')
			{
					document.getElementById('result').innerHTML = "Draw";
					document.getElementById('result').style.color = "orange";
			}
			else if(choosed === 'paper')
			{
				document.getElementById('result').innerHTML = "You win";
				document.getElementById('result').style.color = "green";
			}
			else if(choosed === 'rock')
			{
				document.getElementById('result').innerHTML = "You Loose";
				document.getElementById('result').style.color = "red";
			}
	}
}