// Variable for the timer that starts from 60seconds
var seconds = 60; 
// Variable that holds the Interval ID when we execute the "run" function
var intervalId; 
// Variable that holds trivia questions
var triviaQuestions = ['1. what was the first movie made by Walt Disney?', 
'2. which was a first movie mickey mouse and minnie mouse was introduced in?', 
'3. what are the names of walt disney three brothers?',
'4. In Aladdin, what is the name of Jasmine’s pet tiger?', 
'5. In Peter Pan, Captain Hook had a hook on which one of his hands?', 
'6.what was the first mickey mouse cartoon made in color?', 
'7. Where do the lions live in the Lion King?',
'8.What time does the royal ball start in Cinderella?',
'9.How long has the curse been over the castle in Beauty and the Beast?',
'10.Which is the fastest ride at Disney World?',
]; 
// Variable that stores correct Answers
var correctAnswers = 0;
// Variable that stores wrong answers
var wrongAnswers = 0;
// Start button function





//display of the questions from 1 to 10

$('.questionOne').append(triviaQuestions[0]);
		$('.questionOne').append("<br>" + "<br>" + "<input type='radio' name='questionOne' class='wrong'>" + "Cinderella" +"</input>");
		$('.questionOne').append("<input type='radio' name='questionOne' class='wrong'>"+"Thelionking"+ "</input>");
		$('.questionOne').append("<input type='radio' name='questionOne' class='wrong'>" + " Aladdin"+"</input>");
		$('.questionOne').append("<input type='radio' name='questionOne'class='correct'>" + "snow white and the seven darfs" +"</input>" + "<br>");

$('.questionTwo').append(triviaQuestions[1]);
		$('.questionTwo').append("<br>" + "<br>" + "<input type='radio' name='questionTwo' class='wrong'>" + " mickey mouse" + "</input>");
		$('.questionTwo').append("<input type='radio' name='questionTwo' class='wrong'>" + " The Barn Dance" + "</input>");
		$('.questionTwo').append("<input type='radio' name='questionTwo' class='wrong'>" + " The plow boy" + "</input>");
		$('.questionTwo').append("<input type='radio' name='questionTwo' class='correct'>" + " The Steamline boat" + "</input>" + "<br>");

$('.questionThree').append(triviaQuestions[2]);
		$('.questionThree').append("<br>" + "<br>" + "<input type='radio' name='questionThree' class='correct'>" + " roy,ray and herb" +"</input>");
		$('.questionThree').append("<input type='radio' name='questionThree' class='wrong'>" + "ray,smith and john" + "</input");
		$('.questionThree').append("<input type='radio' name='questionThree' class='wrong'>" + " herb,david and john" +"</input>");
		$('.questionThree').append("<input type='radio' name='questionThree' class='wrong'>" + "  " + "</input>" + "<br>");

		$('.questionFour').append(triviaQuestions[3]);
		$('.questionFour').append("<br>" + "<br>" + "<input type='radio' name='questionFour' class='wrong'>" + " tiger" + "</input>");
		$('.questionFour').append("<input type='radio' name='questionFour' class='correct'>" + " Rajah" +"<input>");
		$('.questionFour').append("<input type='radio' name='questionFour' class='wrong'>" + "dog"+"</input>");
		$('.questionFour').append("<input type='radio' name='questionFour' class='wrong'>" + "nemo" +"</input>" +"<br>");
		
		$('.questionFive').append(triviaQuestions[4]);
		$('.questionFive').append("<br>" + "<br>" + "<input type='radio' name='questionFive' class='wrong'>" + "  " + "</input>");
		$('.questionFive').append("<input type='radio' name='questionFive' class='wrong'>" + "  " + "</input>");
		$('.questionFive').append("<input type='radio' name='questionFive' class='wrong'>" + "  " + "</input>");
		$('.questionFive').append("<input type='radio' name='questionFive' class='correct'>" + "  " + "</input>" + "<br>");
		
		$('.questionSix').append(triviaQuestions[5]);
		$('.questionSix').append("<br>" + "<br>" + "<input type='radio' name='questionSix' class='wrong'>" + "  " + "</input>");
		$('.questionSix').append("<input type='radio' name='questionSix' class='correct'>" + " " + "</input>");
		$('.questionSix').append("<input type='radio' name='questionSix' class='wrong'>" + "  " + "</input>");
		$('.questionSix').append("<input type='radio' name='questionSix' class='wrong'>" + " " + "</input>" + "<br>");
		
		$('.questionSeven').append(triviaQuestions[6]);
		$('.questionSeven').append("<br>" + "<br>" + "<input type='radio' name='questionSeven' class='wrong'>" + "  " + "</input>");
		$('.questionSeven').append("<input type='radio' name='questionSeven' class='wrong'>" + "  " + "</input>");
		$('.questionSeven').append("<input type='radio' name='questionSeven' class='wrong'>" + "  " + "</input>");
		$('.questionSeven').append("<input type='radio' name='questionSeven' class='correct'>" + "  " + "</input>" + "<br>");
		
// displays submit button at the end of questions 

		$('.submit').html ("<button class='btn btn-info btn-lg'>" +  "submit" + "</button>");


// creates click for submit button
	$('.submit').click(function(){
		$('.time-remaining').html("<h3>your score:<h3>");
		// Show number of correct and incorrect answer
		$('.totalscore').html("correct Answers:"+ correctAnswers + "<br>" + "Not correctAnswer:" + wrongAnswers);
		// resets the timer
		clearInterval(intervalId);
		// submit button clears all question
		$('.questionOne').remove();
		$('.questionTwo').remove();
		$('.questionThree').remove();
		$('.questionFour').remove();
		$('.questionFive').remove();
		$('.questionSix').remove();
		$('.questionSeven').remove();
		$('.questionEight').remove();
		$('.questionNine').remove();
		$('.questionTen').remove();
		$('.submit').remove();
		$('.reset').html("<button class='btn btn-info btn-lg'>" + "Reset" + "</button>");

	});

	// sets the interval to 1 sec and calls the decrease function
			intervalId = setInterval(decrease, 1000);
			// create function to decrease the timer by 1 every second
		function decrease() {

// decrease second by 1
			seconds--;
			// show the seconds in the div with class time-left
			$('.time-left').html("<h3>" + "Time Remaining: " + seconds + "</h3>");
			

// When seconds left hits 0, show The End
		
		if (seconds <= 0){
			$('.time-remaining').html("<h3> The End</h3>");
			// Show answers when you click the done button 
			$('.totalscore').html("correctAnswers: " + correctAnswers + "<br>" + "Not Correct Answers: " + wrongAnswers);
			// removes all the questions from screen when you click done
			$('.questionOne').remove();
			$('.questionTwo').remove();
			$('.questionThree').remove();
			$('.questionFour').remove();
			$('.questionFive').remove();
			$('.questionSix').remove();
			$('.questionSeven').remove();
			$('.questionEight').remove();
			$('.questionNine').remove();
			$('.questionsTen').remove();
			// resets the interalId variable
			clearInterval(intervalId);
			$('.done').remove();
			$('.reset').html("<button class='btn btn-info btn-lg'>" + "Reset" + "</button>");
		}
	}

// calculates how many questions the player guessed correctly 
$('.correct').click(function(){
	if ($('.correct' == true)){
		correctAnswers++;
	}
});
// calculates how many questions the player guessed incorrectly 
$('.wrong').click(function(){
	if ($('.wrong' == true)){
		wrongAnswers++;
	}
});
// resets the page 
$('.reset').click(function(){
	location.reload();
});

