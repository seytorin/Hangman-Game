// word list array.
// console.log(letter);
let inputArray = [];
// inputArray.push(letter);
let hangmanWords = ["ariel", "elsa", "olaf", "mulan", "mickey", "simba"];
let index;
let rightArray = [];
let wrongArray = [];
let winCount = 0;
let losses = 0;
let dashArray = [];




// console.log(dashArray, dashNum);



// console.log(dashNum, dashArray);
// for(var i = 0; i<hangmanLetter.length;i++){
// 	console.log(hangmanLetter.split(""));
// }

// if(letter.indexOf(hangmanLetter) > -1){
// console.log(letter);
// }
//function that finds letter in word
let start = () => {
	let randWord = null;
	 randWord = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
	let lettersInWord = randWord.split("");
	let dashNum = 0;
	dashNum = lettersInWord.length;
		dashArray =[];
		rightArray = [];
		wrongArray = [];
	let guessNum = 10;

	for(let i = 0; i < dashNum; i++){
		dashArray.push("-");
	}


	let findLetter = (word, letter) => {
		//check if the letter in the word
		index = word.indexOf(letter) > -1;
			// pushLetter();
			//find it's location in the word
		if(index){

			for(let i = 0; i < dashNum; i++){
				//Push each occurence of letter in dashArray
				if(lettersInWord[i] === letter){

					dashArray[i] = letter;
				}
			}
			
			console.log(dashArray);
		}

		else {
			wrongArray.push(letter);
			guessNum--;
			console.log("Number of gueses left: " + guessNum);
			console.log("Wins: " + winCount);
			console.log("Losses: " + losses);
			console.log("Letters guessed: " + wrongArray + "\n");
			console.log(dashArray);


		}

	}

	// findLetter(hangmanWords[0], inputArray[0]);

	//function that pushes answer to wrong or right array
	let pushLetter = () => {

	if(index===true){
			rightArray.push(letter);
			// console.log(rightArray);
		}
	else{
		wrongArray.push(letter);
		// console.log(wrongArray);
	}
	}


	let prompt = () => {
		//prompts user to guess
		console.log("\n");
		document.addEventListener('keypress', (event) => {
			
		});
		inquirer.prompt([

	 		{
	   		type: "input",
	   		name: "userInput",
	    	message: "Guess a letter.",
	  		},


		]).then(function(input) {
			var answer = findLetter(randWord, input.userInput);
	  		

	  		if(lettersInWord.toString() !== dashArray.toString() && guessNum !== 0){

	  		prompt();
	  		return true;	 
	  		}
	  		round();

		});
	}

	let round = () =>{

		 if(lettersInWord.toString() === dashArray.toString()){
			console.log("You got it!");
			winCount++;
			dashArray = [];
			start();
		}
		else if(guessNum === 0){
			console.log("You lost!")
			losses++;
			start();
		}
		
		else{
			console.log("Number of gueses left: " + guessNum);
			console.log("Wins: " + winCount);
			console.log("Losses: " + losses);
			console.log("Letters guessed: " + wrongArray + "\n");
		}
		

	}

	prompt();

}

start();


		var hangmanWords = ["ariel", "elsa", "olaf", "mulan", "mickey", "simba"];
		// document.onkeypress = function(event){}
		// Pulls random word from array and logs
		let underScore = [];
		let rightArray = [];
		let wrongArray = [];
 		var randWord = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
 		var winCount = 0;
 		var losses = 0;
 		var guessNum = 7;
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
	
				// checks if keyLetter matches a letter in array and pushes keyLetter to rightArray
				if(randWord.indexOf(keyLetter) > -1){
				rightArray.push(keyLetter);
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
				//empty wrongArray array
				wrongArray = [];
				//join and send wrongArray array to html
				document.getElementById("letters").innerHTML = "Letters guessed: " + wrongArray.join(' ');
				//choose another random word from array
				randWord = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
				//restart game
				makeUnderscore();

				

				// if(winCount === 5)
				// console.log(underScore);
				// console.log(randWord);
				}
				//if keyLetter doesn't have a match then subtract from guessNum
				else if(randWord.indexOf(keyLetter) === -1){
					guessNum--;
					//push guessNum to html
					document.getElementById("guessNum").innerHTML = "Number of guessNum remaining: " + guessNum;
					if(guessNum===5){
					document.getElementById("lost1").innerHTML = "<img id=\"mal\" src=\"https://orig00.deviantart.net/0add/f/2014/141/3/6/maleficent_prev_by_emeraldsora-d7j5qyb.png\">";
					}
					if(guessNum===4){
					document.getElementById("lost2").innerHTML = "<img id=\"mal\" src=\"https://orig00.deviantart.net/0add/f/2014/141/3/6/maleficent_prev_by_emeraldsora-d7j5qyb.png\">";
					}
					if(guessNum===3){
					document.getElementById("lost3").innerHTML = "<img id=\"mal\" src=\"https://orig00.deviantart.net/0add/f/2014/141/3/6/maleficent_prev_by_emeraldsora-d7j5qyb.png\">";
					}
					if(guessNum===2){
					document.getElementById("lost4").innerHTML = "<img id=\"mal\" src=\"https://orig00.deviantart.net/0add/f/2014/141/3/6/maleficent_prev_by_emeraldsora-d7j5qyb.png\">";
					}
					if(guessNum===1){
					document.getElementById("lost5").innerHTML = "<img id=\"mal\" src=\"https://orig00.deviantart.net/0add/f/2014/141/3/6/maleficent_prev_by_emeraldsora-d7j5qyb.png\">";
					}
					// if(guessNum===0){
					// document.getElementById("mal1").innerHTML = "<img id=\"mal\" src=\"https://orig00.deviantart.net/0add/f/2014/141/3/6/maleficent_prev_by_emeraldsora-d7j5qyb.png\">";
					// }
					//send wrong guess to wrongArray array
					wrongArray.push(keyLetter);
					//join and send wrongArray array to html
					document.getElementById("letters").innerHTML = "Letters guessed: " + wrongArray.join(' ');
					//Display you lost and give option to restart when guessNum equal 0
					if(guessNum === 0){
						$("#lost").empty();
						document.getElementById("lost").innerHTML =  "You lost!!"; 
						
					}
				}



 

	});





