// word list array.


		var wordList = ["ariel", "elsa", "olaf", "mulan", "mickey", "simba"];
		// document.onkeypress = function(event){}
		// Pulls random word from array and logs
		let underScore = [];
		let pushRight = [];
		let pushWrong = [];
 		var randWord = wordList[Math.floor(Math.random() * wordList.length)];
 		var winCount = 0;
 		var losses = 0;
 		var guesses = 7;
 		console.log(randWord);
 		
 		
		// Prints "-" = to randWord length
		let makeUnderscore = () => {

			for(let i = 0; i < randWord.length;i++){
		
				underScore.push('-');
			}
			document.getElementById("word").innerHTML = underScore.join(' ');
				return underScore;
		}


//listens for keypress, joins elements of array and starts game
document.addEventListener( 'keypress', (event) => {


	//assigns letter of button pressed to keyLetter	
	let keyLetter = String.fromCharCode(event.keyCode);
	
				// checks if keyLetter matches a letter in array and pushes keyLetter to pushRight
				if(randWord.indexOf(keyLetter) > -1){
				pushRight.push(keyLetter);
    			console.log(underScore);
				underScore[randWord.indexOf(keyLetter)] = keyLetter;
				console.log(underScore);
				document.getElementById("word").innerHTML = underScore;
				console.log(underScore);
				
				}
			//compare to word entered to random word in array.
			if(underScore.join('') == randWord){
				//if words match then increase win by 1
				winCount++;
				document.getElementById("wins").innerHTML = "Wins: " + winCount;
				//empty underscore array
				underScore = [];
				//empty pushWrong array
				pushWrong = [];
				//join and send pushWrong array to html
				document.getElementById("letters").innerHTML = "Letters guessed: " + pushWrong.join(' ');
				//choose another random word from array
				randWord = wordList[Math.floor(Math.random() * wordList.length)];
				//restart game
				makeUnderscore();

				

				// if(winCount === 5)
				// console.log(underScore);
				// console.log(randWord);
				}
				//if keyLetter doesn't have a match then subtract from guesses
				else if(randWord.indexOf(keyLetter) === -1){
					guesses--;
					//pring guesses to html
					document.getElementById("guesses").innerHTML = "Number of guesses remaining: " + guesses;
					if(guesses<6){
					document.getElementById("mal").innerHTML = "<img id=\"mal\" src=\"https://orig00.deviantart.net/0add/f/2014/141/3/6/maleficent_prev_by_emeraldsora-d7j5qyb.png\">";
					}
					//send wrong guess to pushWrong array
					pushWrong.push(keyLetter);
					//join and send pushWrong array to html
					document.getElementById("letters").innerHTML = "Letters guessed: " + pushWrong.join(' ');
					//Display you lost and give option to restart when guesses equal 0
					if(guesses === 0){
						$("#lost").empty();
						document.getElementById("lost").innerHTML =  "You lost!!"; 
						
					}
				}


			
			
			// else{
			// chances--;
			
			// }

	 	// 	if(chances === 0){
			// losses++;
			// console.log("you have lost " + losses + " times");
			// hangman();

			// }
		
	// else{
	// 	pushWrong.push(keyword);
	// 	underScore.push(keyword);

	// }
			

	



 

	});





