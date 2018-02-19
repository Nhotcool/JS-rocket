
var timer = null;
var countdownNumber = 10;

var changeState = function (state) {
	document.body.className = 'body-state' + state;
	clearInterval (timer);
	countdownNumber = 10;
	document.getElementById("countdown").innerHTML = countdownNumber;
//countdown
	if (state == 2) {
		timer = setInterval(function () {
			countdownNumber = countdownNumber -1;
			document.getElementById("countdown").innerHTML = countdownNumber;

			if (countdownNumber > 1 && countdownNumber <= 3){
				document.getElementById('Miss').className = 'Miss show';
			} else { 
				document.getElementById('Miss').className = 'Miss';
			};

			if (countdownNumber > 4 && countdownNumber <= 7){
				document.getElementById('Babe').className = 'Babe show';
			} else { 
				document.getElementById('Babe').className = 'Babe';
			};

			if  (countdownNumber <=0) {
				changeState(3);
			};
		}, 500);

	} // this }; is the "If" end

	else if (state == 3) {
		var success = setTimeout(function(){
             var randomNumber = Math.round(Math.random()*10)
             console.log("randomNumber:", randomNumber)
            if (randomNumber > 5) {
            	changeState(4)
            } else {
            	changeState(5) 
            };
		}, 2000);
	};

	if (state == 2 && state == 1) {

	}

} //var changeState end