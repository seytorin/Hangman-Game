// word list array.
var hangman = function (){
		var wordList = ["ariel", "elsa", "olaf", "mulan"];
// document.onkeypress = function(event){}
// Pulls random word from array and logs
		let underScore = [];
		let pushRight = [];
		let pushWrong = [];
 		var randWord = wordList[Math.floor(Math.random() * wordList.length)];
 		var wins = 0;
 		var losses = 0;
 		var chances = 6;
 		console.log(randWord);
 		
		// Prints "-" = to randWord length
		let makeUnderscore = () => {

		for(let i = 0; i < randWord.length;i++){
		
			underScore.push('-');
		}
		return underScore;
	}

	console.log(makeUnderscore());



document.addEventListener( 'keypress', (event) => {
	console.log(event);
	
	let keyword = String.fromCharCode(event.keyCode);
	
	// push to right array
	
	if(randWord.indexOf(keyword) > -1){
		pushRight.push(keyword);
    
		underScore[randWord.indexOf(keyword)] = keyword;
		console.log(underScore);
		console.log(pushRight);
		console.log(randWord);
		console.log(keyword);
	
}

			if(underScore.join('') == randWord){
				wins++;
				console.log("number of " + wins);
				console.log(underScore);
				console.log(randWord);

			}
	
	else{
		chances--;
	}
	 if(chances === 0){
		losses++;
		console.log("you have lost " + losses + " times");
		hangman();

	}
	// else{
	// 	pushWrong.push(keyword);
	// 	underScore.push(keyword);

	// }


	


 

});

}
hangman();