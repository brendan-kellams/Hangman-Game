window.onload = function() {
	// letters for click boxes
	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 
	'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z']

	var characters;			// characters
	var getHint;			// word hint
	var word; 				//selected word
	var guess; 				//guess counter
	var guesses = [];		//stored guesses
	var lives; 				//chances
	var counter; 			//count of correct guesses
	var lines;				//number of spaces in a word '_'

	// get elements
	var showLives = document.getElementById('lives'); 
	var getHint = document.getElementById('hint'); 
	var showClue = document.getElementById('clue'); 

	// create letter buttons
	var buttons = function() {
		myButtons = document.getElementById('buttons');
		letters = document.createElement('ul');

		for (var i = 0; i < alphabet.length; i++) {
			letters.id = 'alphabet';
			list = document.createElement('li');
			list.id = 'letter';
			list.innerHTML = alphabet[i];
			check(); 
			myButtons.appendChild(letters);
			letters.appendChild(list);
		}
	}

	//create guesses ul
	result = function() {
		wordHolder = document.getElementById('hold');
		correct = document.createElement('ul');

		for (var i = 0; i < word.length; i++) {
			correct.setAttribute('id', 'my-word');
			guess = document.createElement('li');
			guess.setAttribute('class', 'guess');
			if (word[i] === '-') {
				guess.innerHTML = '-';
				space = 1;
			}
			else {
				guess.innerHTML = '_';
			}

			guesses.push(guess);
			wordHolder.appendChild(correct);
			correct.appendChild(guess);
		}
	}

	//show lives
	comments = function() {
		showLives.innerHTML = "You have " + lives + " lives";
		if (lives < 1) {
			showLives.innerHTML = 'Game Over';
		}
		for (var i = 0; i < guesses.length; i++) {
			if (counter + space === guesses.length) {
				showLives.innerHTML = 'You Win!';
			}
		}
	}

	// OnClick Function
	check = function () {
		list.onclick = function() {
			var guess = (this.innerHTML);
			this.setAttribute('class', 'active');
			this.onclick = null;
			for (var i = 0; i < word.length; i++) {
				if (word[i] === guess) {
					guesses[i].innerHTML = guess;
					counter += 1;
				}
			}
			var j = (word.indexOf(guess));
			if (j === -1) {
				lives -= 1;
				comments();
			}
			else {
				comments();
			}
		}
	}

	// Play
	play = function() {
		characters = ['daenerys','jon','cersei','tyrion','sansa','arya','gendry',
		'joffery','melisandre','littlefinger','bronn','jamie','theon','brienne',
		'ygritte','jorah','eddard','shae','hodor','missandei','varys','samwell',
		'tormund','stannis','catelyn','bran','gilly','robb','robert','davos',
		'tommen','podrick','rickon','myrcella'];
		
		word = characters[Math.floor(Math.random() * characters.length)];
		word = word.replace(/\s/g, '-');
		console.log(word);
		buttons();

		guesses = [];
		lives = 10;
		counter = 0;
		space = 0;
		result();
		comments();
	}

	play();

	// Hint

	hint.onclick = function() {

		hints = ['Mother of Dragons', 'The White Wolf', 'She wants everyone dead', "I drink and I know things", "The eldest daughter of Winterfell",
		'Now has many faces', 'Bastard son of King Robert', 'WORSE KING EVER!!!', 'The night is dark and full of terrors', 'Always looks out for his best interests', 'Was Tyrion\'s wingman',
		'King Slayer', 'What is dead may never die', 'Oathkeeper', 'You know nothing Jon Snow', 'He dishonored his family and he fled Westeros', 'Why must he die in every movie he is in?',
		'The backstabbing whore', 'Says one thing during the ENTIRE series', 'Woman of many language', 'Has little birds', 'He can\'t really fight but he can read', 'The crazy wildling',
		'Ordered his daughter to be burned alive', 'Niece of the Black Fish', 'The Three Eyed Raven', 'The wildling who is no longer a wildling', "The Young Wolf", 'Killed by a boar',
		'Hand to the King of the North', 'The Naive King', 'The best squire', 'The forgotten Stark', 'The forgotten Lannister']; // make hints about the characters
		var hintIndex = characters.indexOf(word);
		showClue.innerHTML = 'Clue: - ' + hints [hintIndex];
	};

	// Reset

	document.getElementById('reset').onclick = function() {
		correct.parentNode.removeChild(correct);
		letters.parentNode.removeChild(letters);
		showClue.innerHTML = '';
		play();
	}
}

