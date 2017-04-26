// Variable for the timer that starts from 60seconds
var seconds = 60; 
// Variable that holds the Interval ID when we execute the "start" function
var intervalId; 
// Variable that holds trivia questions
var triviaQuestions = ['1. what was the first movie made by Walt Disney?', 
'2. which was a first movie mickey mouse and minnie mouse was introduced in?', 
'3. what are the names of walt disney three brothers?',
'4. In Aladdin, what is the name of Jasmine’s pet tiger?', 
'5. In Peter Pan, Captain Hook had a hook on which one of his hands?', 
'6.when was the first mickey mouse cartoon made in color?', 
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

$(document).ready(function() {
$(".start").on("click",function(){
//Start the game
$(this).hide();
console.log("populateScreen");
populateScreen();
});
});



//display of the questions from 1 to 10
var populateScreen = function() {

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
		$('.questionThree').append("<input type='radio' name='questionThree' class='wrong'>" + "jay,neil and jose" + "</input>" + "<br>");

		$('.questionFour').append(triviaQuestions[3]);
		$('.questionFour').append("<br>" + "<br>" + "<input type='radio' name='questionFour' class='wrong'>" + " tiger" + "</input>");
		$('.questionFour').append("<input type='radio' name='questionFour' class='correct'>" + " Rajah" +"</input>");
		$('.questionFour').append("<input type='radio' name='questionFour' class='wrong'>" + "dog"+"</input>");
		$('.questionFour').append("<input type='radio' name='questionFour' class='wrong'>" + "nemo" +"</input>" +"<br>");
		
		$('.questionFive').append(triviaQuestions[4]);
		$('.questionFive').append("<br>" + "<br>" + "<input type='radio' name='questionFive' class='wrong'>" + "both hands" + "</input>");
		$('.questionFive').append("<input type='radio' name='questionFive' class='wrong'>" + "right hand  " + "</input>");
		$('.questionFive').append("<input type='radio' name='questionFive' class='wrong'>" + "on his shoulder " + "</input>");
		$('.questionFive').append("<input type='radio' name='questionFive' class='correct'>" + "left hand" + "</input>" + "<br>");
		
		$('.questionSix').append(triviaQuestions[5]);
		$('.questionSix').append("<br>" + "<br>" + "<input type='radio' name='questionSix' class='wrong'>" + "1925  " + "</input>");
		$('.questionSix').append("<input type='radio' name='questionSix' class='correct'>" + "1928 " + "</input>");
		$('.questionSix').append("<input type='radio' name='questionSix' class='wrong'>" + "1950  " + "</input>");
		$('.questionSix').append("<input type='radio' name='questionSix' class='wrong'>" + "1850 " + "</input>" + "<br>");
		
		$('.questionSeven').append(triviaQuestions[6]);
		$('.questionSeven').append("<br>" + "<br>" + "<input type='radio' name='questionSeven' class='wrong'>" + "mountain rock  " + "</input>");
		$('.questionSeven').append("<input type='radio' name='questionSeven' class='wrong'>" + " skyrock  " + "</input>");
		$('.questionSeven').append("<input type='radio' name='questionSeven' class='wrong'>" + "everest rock  " + "</input>");
		$('.questionSeven').append("<input type='radio' name='questionSeven' class='correct'>" + "pride rock  " + "</input>" + "<br>");

		$('.questionEight').append(triviaQuestions[7]);
		$('.questionEight').append("<br>" + "<br>" + "<input type='radio' name='questionEight' class='wrong'>" + " 5:00PM  " + "</input>");
		$('.questionEight').append("<input type='radio' name='questionEight' class='wrong'>" + " 12:00AM  " + "</input>");
		$('.questionEight').append("<input type='radio' name='questionEight' class='wrong'>" + "10:00AM " + "</input>");
		$('.questionEight').append("<input type='radio' name='questionEight' class='correct'>" + "8:00PM " + "</input>" + "<br>");

		$('.questionNine').append(triviaQuestions[8]);
		$('.questionNine').append("<br>" + "<br>" + "<input type='radio' name='questionNine' class='wrong'>" + " 2years  " + "</input>");
		$('.questionNine').append("<input type='radio' name='questionNine' class='wrong'>" + " 5years  " + "</input>");
		$('.questionNine').append("<input type='radio' name='questionNine' class='wrong'>" + "1years" + "</input>");
		$('.questionNine').append("<input type='radio' name='questionNine' class='correct'>" + "11years " + "</input>" + "<br>");

		$('.questionTen').append(triviaQuestions[9]);
		$('.questionTen').append("<br>" + "<br>" + "<input type='radio' name='questionTen' class='wrong'>" + " Expedition everest " + "</input>");
		$('.questionTen').append("<input type='radio' name='questionTen' class='wrong'>" + " Rock N roller coaster  " + "</input>");
		$('.questionTen').append("<input type='radio' name='questionTen' class='correct'>" + "Tower of Terror" + "</input>");
		$('.questionTen').append("<input type='radio' name='questionTen' class='wrong'>" + "TestTrack " + "</input>" + "<br>");


		
// displays submit button at the end of questions 

		$('.submit').append("<button class='btn btn-info btn-md'>" +  "submit" + "</button>");
$('.submit').click(submitfunction);
}

function submitfunction(){
		console.log("submit on click");
		$('.time-remaining').html("<h3>Your Score:<h3>");
		// Show number of correct and incorrect answer
		$('.totalscore').html("correct Answers:"+ correctAnswers + "<br>" + "Incorrect Answer:" + wrongAnswers);
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
		$('.reset').html("<button class='btn btn-info btn-md'>" + "Reset" + "</button>");

	}

// creates click for submit button
	$('.submit').click(submitfunction);

	// sets the time to decrease
			intervalId = setInterval(decrease, 1000);
			// create function to decrease the timer by 1 every second
		function decrease() {

// decrease seconds each time
			seconds--;
			// show the seconds in the div with class time-left
			$('.time-remaining').html("<h3>" + "Time Remaining: " + seconds + "</h3>");
			

// When seconds left hits 0, show The End
		
		if (seconds <= 0){
			$('.time-remaining').html("<h3> The End</h3>");
			// Show answers when you click the done button 
			$('.totalscore').html("correctAnswers: " + correctAnswers + "<br>" + "Incorrect Answers: " + wrongAnswers);
			// removes all the questions from screen when you click submit
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

			// resets the  variable
			clearInterval(intervalId);
			$('.submit').remove();
			$('.reset').html("<button class='btn btn-info btn-md'>" + "Reset" + "</button>");
		}
	}

// calculates how many questions the player guessed correctly 
$('.correct').click(function(){
	if ($('.correct' === true)){
		CorrectAnswers++;
	}
});
// calculates how many questions the player guessed incorrectly 
$('.wrong').click(function(){
	if ($('.wrong' === true)){
		wrongAnswers++;
	}
});


