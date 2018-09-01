var WORDLIST = ["about","above","across","act","active","add","afraid","after","again","age",
"air","all","alone","along","already","amount","answer", "angry","another","any",
"anyone","anything","anytime","appear","apple","area","arm","army","around","arrive",
"art","ask","aunty","away","angel","ant","arc","aquatic", "adjust", "almond",
"baby","ball","bank","base","basket","bath","bean","bear","bedroom","beef",
"behave","before","begin","behind","below","beside","better","between","bird","birthday",
"bite","blush","block","blow","board","boat","body","breathe","bone","book",
"border","born","borrow","bottle","bottom","branch","brave","braces","bread","break", 
"careful", "careless", "carry","catch", "central", "century", "certain","chance", "change","chase",
"children", "chocolate", "choice", "choose", "circle", "clever", "clean","clear", "climb", "clock", 
"cloth", "clothes", "cloudy","coffee","collect", "color", "comb", "comfortable","common", "compare", 
"complete", "computer", "condition", "continue", "control", "copper", "corner", "correct","contain", "country", 
"dance", "dangerous", "dark", "daughter", "day", "decide", "decrease", "deep", "deer", 
"depend", "desk", "destroy", "develop","different", "difficult", "dinner", "direction", "dirty", "discover", 
"dish","double", "down", "draw", "dream", "dress", "drink", "drive", "drop", "dry", 
"dust", "duty", "drizzle", "dazzle", "dunk", "dozen", "doze", "dimple", "dreamily", "drought",
"each", "early", "earn", "earth", "east", "easy", "eat", "education", "effect", "egg", 
"eight", "either", "electric", "elephant", "else", "empty", "end", "enjoy", "enough", "enter", 
"equal", "entrance", "escape", "even", "evening", "event", "every", "everyone", "exact", "everybody", 
"examination", "example", "except", "excited", "exercise"," expect", "expensive", "explain", "extremely", "eye", 
"fact","fall", "family", "famous","father", "fast","fault", "feelings", "fever","furniture",
"fight", "fill", "film","finger", "finish", "fire", "first","five", "fix", "flag", 
"flat", "float", "floor", "flour", "flower", "food", "foot", "football", "force", "flight",
"foreign", "forest", "forget", "forgive", "freedom", "freeze","friend", "fruit","future","fresh",
"game", "garden", "gate", "general","gentleman", "get", "gift", "give", "glass", "goat",
"gold", "good", "goodbye", "grandfather", "grandmother", "grass", "great", "green", "grey", "ground", 
"group", "grow", "glaze", "grateful", "gratitude", "gem", "gumball", "glimmer", "graphic", "gulp",
"goggles", "goat", "gamma", "gravy", "glove", "graph", "guava", "gull", "gnaw","golf",
"hair", "half", "hall", "hammer", "hand", "happen", "happy", "hard", "hat", "have",
"heat", "head", "healthy", "hear", "heavy", "heart", "height", "hello", "help", "hen", 
"here","hide", "high", "hill", "hit", "hobby","hundred", "hungry", "hour", "hurry",
"hold", "hole", "holiday", "home", "hope", "horse", "hospital", "hot","hotel", "house", 
"ice", "idea", "if", "important", "in", "increase", "inside", "into", "introduce", "invent",
"iron", "invite", "is", "island", "it", "its", 'insight', "incite", "inquire","infix",
"injured", "infant", "ink", "invoke", "itch", "improve", "impact", "infect", "impish", 
"inform", "income", "important", "icon", "idol", "ivory", "image", "irony", "idle", "ideal",
"jelly", "job", "join", "juice", "jump", "just","joy","jig", "junk", "jar", 
"job", "jazz", "jab", "jug", "jumble", "jockey", "jaw", "jumble", "jacket","jolly",
"jog", "jury", "jinx", "joke", "jungle", "joyful", "jigsaw", "jet", "jumbo", "jive",
"Japan", "jewel", "joule", "jerk", "java", "joey", "jail", "join", "jolt", "jeer",
"keep", "key","kind", "king", "kitchen", "knee","knock", "know","kick", "knuckle",
"knob", "knock", "knack", "kibble", "kelp", "kale", "khaki", "kayak", "kid", "knight",
"kiosk", "kept", "kiwi", "kite", "knot", "knit", "kin", "kidney", "kitten",
"karate", "kindle", "knelt", "karma", "knead", "kazoo", "koala", "keypad", "keyword", "kicker",
"ladder", "lady", "lamp", "land", "large", "last", "late", "lately", "laugh", "lazy", 
"lead", "leaf", "learn", "leave", "leg", "left", "lend","length", "less", "lesson",
"letter", "library", "lie", "life", "light", "lion","list", "listen", "little", "live", 
"lock", "lonely", "long", "look", "lose", "lot", "love", "low", "lower", "luck", 
"machine", "main", "make", "most", "more", "many", "map", "mark", "market", "matter", 
"may", "me", "meal", "measure", "meat", "medicine", "member", "mention", "method", "middle", 
"milk","million", "mind", "minute", "miss", "mistake", "mix", "model", "modern", "moment", 
"money", "monkey", "month", "moon","morning","mother", "mountain", "mouth", "move","music", 
"name", "narrow", "nation", "nature", "near", "nearly", "neck", "need", "needle", "neighbor", 
"neither", "net", "never", "new", "news", "newspaper", "next", "nice", "night", "nine", 
"no", "noble", "noise", "none", "north", "nose", "not", "nothing", "notice", "now", 
"number", "nip", "nap", "nibble", "nickel", "nephew", "nomad", "nimble", "network", "numb",
"obey", "object", "ocean", "of", "off", "offer", "office", "often", "oil", "old", 
"on", "one", "only", "open", "opposite", "or", "orange", "order", "other", "our", 
"out", "outside", "over", "own" , "oxygen", "odor", "offline", "oar", "offence", "orchid",
"offset","octopus", "ooze", "occur", "olive", "oven", "ounce", "opal", "oval", "over",
"paint","paper", "parent", "partner", "path", "pay", "peace", "pen", "pencil", "people", 
"pepper", "perfect", "person", "photograph", "piano", "pick", "picture","place", "plane", "plant", 
"plastic", "plate", "play", "please", "plenty", "pocket", "point","police", "polite", "proper",
"position", "possible", "potato", "pour", "power", "present", "press",  "probably", "pupil", "produce", 
"queen", "question", "quick", "quiet", "quite", "quake", "quell", "quill", "quirk", "quibble",
"queer", "quantity", "quotient", "quote", "quarter", "quickly", "quail", "quality", "qualify", "quit",
"quilt", "quiet", "quiver", "quaint", "quarry", "queasy", "qualm", "quints", "quest", "quack", 
"quiz", "quota", "quip", "quad", "quartz", "quietly", "quicken", "quartet", "queenly", "quarrel",
"radio", "rain", "rainy","raise", "reach", "read", "ready", "real", "really", "receive", 
"record", "red", "remember", "remind", "remove", "rent", "repair", "repeat", "reply", "report", 
"rest", "restaurant", "result", "return", "rice", "rich", "ride", "right", "ring", "rise", 
"road", "rock", "room", "round", "rubber", "rude", "rule", "ruler", "run", "rush", 
"science", "scissors", "search", "seat", "second", "send", "sentence", "serve", "seven","sage", 
"several", "shade", "shadow", "shoulder", "signal", "silence", "silly", "silver", "similar", "simple", 
"single","sing", "sink", "sound", "soup", "south", "space","speed", "spell", "spend", 
"student", "study", "subject", "substance", "sudden", "sugar", "suitable", "summer", "sunny","support",
"table","tall", "taste", "taxi", "tea", "teach", "team", "tear","telephone", "television", 
"tennis",  "test", "their", "then", "there", "therefore", "these", "thick", "thin", "think", 
"third", "though", "threat", "three", "tidy", "tie", "title", "today", "toe", "trust",
"together", "tomorrow", "tonight", "tool", "tooth", "top", "total", "touch", "town", "travel",
"uncle", "under", "understand", "unit", "until", "up", "use", "useful", "usual", "usually", 
"uncuff", "unique", "utilize", "unlock", "urgent", "upper", "unify", "uncle", "urge","unity",
"undo", "union", "user", "uniform", "uphill", "umpire", "unplug", "unravel", "urn", "ukelele",
"unveil", "universe", "ultimate", "umbrella", "upstream", "unleash", "unsure", "uneven", "upbeat", "urban",
"very", "void", "violet", "victory","vex", "verbs", "vivid", "velvet", "viking", "vouch", 
"vocal", "vaccine", "vapor", "vehicle", "visible", "voice", "vague", "volume", "venom", "voyage",
"volcano", "verse", "verge", "vortex", "veggies", "verify", "vowel", "view", "vanish", "vegan", 
"veins", "veer", "vase", "vault", "vow", "vend", "vine", "volts", "veil", "vast", 
"wait", "wake", "walk", "want", "warm", "was", "wash", "waste", "watch", "water",
"way", "wear", "weather", "week", "welcome", "were", "well", "west", "what", "wheel", 
"when", "where", "which", "while", "wide", "wild", "will", "win", "wind", "window", 
"winter", "wire", "wise", "wish", "with", "without","wonder", "word", "work", "world", 
"xerox", "xylophone", "xylograph", "xenon",
"yard", "yell", "yesterday", "yet", "you", "young", "your","yellow", "youth", "yeast",
"yearn", "yogurt", "year", "yearbooks", "yield", "yawn", "yarn", "yelp", "yacht", "yoke",
"yogi", "yoga", "yes", "yam", 'yipped', "yak", "yapped", "yearly", "yonder", "yields", 
"yowl", "yelping", "yearning", "yours", "yardstick", "yachts", "yams", "yogis", "yearning", "yokes",
"zero", "zoo", "zeroes", "zoos", "zipper", "zippers", "zap", "zapped", "zapping", "zoomed", 
"zoom", "zoo", "zoology", "zodiac", "zebra", "zebras", "zeal", "zealous", "zest", "zesty",
"zips", "zigzag", "zig", "zag", "zit", "zits", "zing", "zings", "zinc", "zipped"];


$(document).ready(function() {
    var NUM_ROWS = 10;
	var NUM_COLUMNS = 10;
	var rainWords = new Array();
	var boxLetter = "";
	var points = 0;
	var paddlePosition = 6;	
	
	
	var getPoints = function(){
		return points;
	};
	
	var getRandBoxLetter = function(){
		var i = 'a';
	    if (i.charCodeAt(0)>97){
	    	$("#letter_box").html("");
	    } else {
			var randBoxNum = Math.random()*26;
			randBoxNum = Math.floor(randBoxNum);
	    	boxLetter = String.fromCharCode(i.charCodeAt(0)+ randBoxNum);
			$("#letter_box").html(boxLetter);
	    }
		
		
	};
	var randomDrop = function(rainWords_index){
		
		var rainObject = rainWords[rainWords_index];
				  
			var cellId = '#' + rainObject.i + rainObject.j;
		
			$(cellId).html(rainObject.word);
			//hiding the word from previous cell ID    
			if (rainObject.i.charCodeAt(0) > 97) {  // 97 corresponds to 'a'
				var prevCellId = '#' +  String.fromCharCode((rainObject.i.charCodeAt(0)-1)) + rainObject.j;
			  	$(prevCellId).html("");
			  } 
			  
		    if (rainObject.i.charCodeAt(0) < 107) {
		        var nextRowIndex = rainObject.i.charCodeAt(0)+1;
				rainObject.i = String.fromCharCode(nextRowIndex);
				//terminate word if reach last cell
			} else if(rainObject.i === "k"){
                // Word has reached last row. 
                // Check if it starts with the letter in the box.
                if(rainObject.word.charAt(0) === boxLetter.charAt(0)) {
                    console.log("Updating score for word "+rainObject.word+" at column "+rainObject.j+" and row "+rainObject.i+
                    ". Paddle is at "+paddlePosition);
                    updateScore(rainObject.j, 1);
                } else if(rainObject.word.charAt(0) != boxLetter.charAt(0)){
                	updateScore(rainObject.j, -0.5);
                }
                window.clearInterval(rainObject.timer);                                
			} 

		    //console.log(cellId + ' to ' + " element :" + rainWords[rainWords_index].i + " and " + rainWords[rainWords_index].j );
		
   	};
        
        /**
         * Check if the paddle was in the same column as the word.
         * If so, then increment the score by one point, otherwise deduct half a point. 
         * @param {type} column where word rained down
         * @returns {undefined}
         */
        var updateScore = function(column, wordpoint) {
            
            if(paddlePosition === column) {
                points = points + wordpoint;                
            }
			if(points < 0){
			   points = 0;
            }
            $('#point_box').html(points);
        };
	
	        //randomDrop.word
	    var seedWord = function() {
		    //first, seed rand word in first row
			// 5 is the amount of letters including the letter box letter itself and 40 is the number of words per letter.
			var randNum = Math.random() * 5 * 40;  
			//This finds out how far the letter is from a
			var distanceToBoxLetter = boxLetter.charCodeAt(0) - 97;
			//If the distance is less than two there will be no letters so find other words for letters like a or b
			if (distanceToBoxLetter < 2) distanceToBoxLetter = 2;
			randNum = (distanceToBoxLetter - 2)*40 + Math.floor(randNum);
	        //This finds the word that has the same index number of randNum and assign that word to randWord
	  	    randWord = WORDLIST[randNum];
		    console.log("seedWord is called here " + randWord);
		    //Math.random multiplies by the amount of items in row1Boxes. The number is assigned to randNum2
		    var randNum2 = Math.random()*NUM_COLUMNS;
		    //randNum2 is reassigned to the rounded version of the previous randNum2
		    randNum2 = Math.floor(randNum2);
		    // let word drop
		
	   
		
		    var rainObject = {
		        "word": randWord,
		        "i": 'a',
		    	"j": randNum2,
	            "timer": null
		    };
		    rainWords.push(rainObject);
	        rainObject.timer = window.setInterval(randomDrop,1000,rainWords.length-1 );	
	    };
	
	

		var newWordTimer;
	
		var movePaddleLeft = function(){
			console.log("paddleLeft called"); 
	                if(paddlePosition > 1) {
	                    toggle();
	                    paddlePosition = paddlePosition - 1;  
	                    toggle();
	                } 
		};
		var movePaddleRight = function(){
			console.log("paddleRight called");
	                if(paddlePosition < NUM_COLUMNS) {
	                    toggle();
	                    paddlePosition = paddlePosition + 1; 
	                    toggle();
	                } 
		};
        
	        var toggle = function(){
	            var p_Pos = "#j" + paddlePosition;
	            $(p_Pos).toggleClass("paddle");
	        };
	
	    $('#start').click(function(){
			console.log("Start is clicked");	
			//initialize points
			$('#point_box').html(points);
			// initialize box letter
		    getRandBoxLetter();
			//initialize paddle
			var p_Pos = "#j" + paddlePosition;
			$(p_Pos).toggleClass("paddle");
			//Initialize key events
			document.onkeydown = function(event) {
				e = event || window.event;
				if(e.keyCode == '37'){
					movePaddleLeft();
				} else if (e.keyCode == '39'){
					movePaddleRight();
				}
			};
		 
	        // setting global timer 
		    newWordTimer = window.setInterval(seedWord, 1000);
	    });
	
		$('#stop').click(function(){
			console.log("Stop is clicked");
	        window.clearInterval(newWordTimer);
			for(var i=0; i<rainWords.length; i++){
				window.clearInterval(rainWords[i].timer);
				//if (rainWords.length > 0){
				//	rainWords = [];
				//}
				//TODO erase the word from the grid after stop pressed
			}

			console.log("Interval is cleared");
		
	    });

	});
