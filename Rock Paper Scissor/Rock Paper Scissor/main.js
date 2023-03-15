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
	console.log(choosed)
	if(choosed== 'rock')
	{
		document.getElementById('crock').style.border = " 5px solid red";
		window.setTimeout(border,3000);
		function border(){
			document.getElementById('crock').style.border = " 5px solid black";
		}
	}
	else if(choosed == 'paper')
	{
		document.getElementById('cpaper').style.border = " 5px solid red";
		window.setTimeout(border,3000);
		function border()
		{
			document.getElementById('cpaper').style.border = " 5px solid black";
		}
	}
	else if(choosed == 'scissors')
	{
		document.getElementById('cscissors').style.border = " 5px solid red";
		window.setTimeout(border,3000)
		function border(){
			document.getElementById('cscissors').style.border = " 5px solid black";
		}
	}
	
	if(document.getElementById('rock').checked)
	{
		if(choosed === 'rock')
		{
			document.getElementById('result').innerHTML = "Draw";
			document.getElementById('result').style.color = "orange";
			document.getElementById('float-div').style.display="block";
			document.getElementById('float-div').style.backgroundColor="orange";
			document.getElementById('float-img').src='images/draw-rock.png';
			window.setTimeout(div,5000);
			function div(){
				document.getElementById('float-div').style.display="none";	
			}
		}
		else if(choosed === 'paper')
		{
			document.getElementById('result').innerHTML = "You loose";
			document.getElementById('result').style.color = "red";
			document.getElementById('float-div').style.display="block";
			document.getElementById('float-div').style.backgroundColor="red";
			document.getElementById('float-img').src=loose_img[0];
			window.setTimeout(div,5000);
			function div(){
				document.getElementById('float-div').style.display="none";	
			}
		}
		else if(choosed === 'scissors')
		{
			document.getElementById('result').innerHTML = "You win";
			document.getElementById('result').style.color = "green";
			document.getElementById('float-div').style.display="block";
			document.getElementById('float-div').style.backgroundColor="green";
			document.getElementById('float-img').src=won_img[0];
			window.setTimeout(div,5000);
			function div(){
				document.getElementById('float-div').style.display="none";	
			}
		}
	}
	else if(document.getElementById('paper').checked)
	{
			if(choosed === 'paper')
			{
					document.getElementById('result').innerHTML = "Draw";
					document.getElementById('result').style.color = "orange";
					document.getElementById('float-div').style.display="block";
					document.getElementById('float-div').style.backgroundColor="orange";
					document.getElementById('float-img').src='images/draw-paper.jpg';
					window.setTimeout(div,5000);
					function div(){
						document.getElementById('float-div').style.display="none";	
					}
			}
			else if(choosed === 'rock')
			{
				document.getElementById('result').innerHTML = "You win";
				document.getElementById('result').style.color = "green";
				document.getElementById('float-div').style.display="block";
				document.getElementById('float-div').style.backgroundColor="green";
				document.getElementById('float-img').src=won_img[1];
				window.setTimeout(div,5000);
				function div(){
					document.getElementById('float-div').style.display="none";	
				}
			}
			else if(choosed === 'scissors')
			{
				document.getElementById('result').innerHTML = "You Loose";
				document.getElementById('result').style.color = "red";
				document.getElementById('float-div').style.display="block";
				document.getElementById('float-div').style.backgroundColor="red";
				document.getElementById('float-img').src=loose_img[1];
				window.setTimeout(div,5000);
				function div(){
					document.getElementById('float-div').style.display="none";	
				}
			}
	}
	else if(document.getElementById('scissors').checked)
	{
			if(choosed === 'scissors')
			{
					document.getElementById('result').innerHTML = "Draw";
					document.getElementById('result').style.color = "orange";
					document.getElementById('float-div').style.display="block";
					document.getElementById('float-div').style.backgroundColor="orange";
					document.getElementById('float-img').src='images/draw-scissors.png';
					window.setTimeout(div,5000);
					function div(){
						document.getElementById('float-div').style.display="none";	
					}
			}
			else if(choosed === 'paper')
			{
				document.getElementById('result').innerHTML = "You win";
				document.getElementById('result').style.color = "green";
				document.getElementById('float-div').style.display="block";
				document.getElementById('float-div').style.backgroundColor="green";
				document.getElementById('float-img').src=won_img[2];
				window.setTimeout(div,5000);
				function div(){
					document.getElementById('float-div').style.display="none";	
				}
			}
			else if(choosed === 'rock')
			{
				document.getElementById('result').innerHTML = "You Loose";
				document.getElementById('result').style.color = "red";
				document.getElementById('float-div').style.display="block";
				document.getElementById('float-div').style.backgroundColor="red";
				document.getElementById('float-img').src=loose_img[2];
				window.setTimeout(div,5000);
				function div(){
					document.getElementById('float-div').style.display="none";	
				}
			}
	}
	
}