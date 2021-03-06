triviaObj = {    
    masterQuestions: [{
            question: "How old was Mozart when he wrote his first symphony?",
            answers: ["8 Years Old", "19 Years Old", "6 Years Old", "12 Years Old"],
            correctAnswer: "8 Years Old",
            visual: 'assets/images/mozart.jpg',
            sound: 'assets/audio/mozart.mp3',
            fact: "Over his short life span Mozart wrote 9 symphonies, 32 piano sonatas, 1 opera, 5 piano concertos and many chamber works."
        }, {
            question: "What is best-selling single of all time?",
            answers: ["My Heart Will Go On by Celine Dion", "It's Now Or Never by Elvis Presley", "I Will Survive by Gloria Gaynor", "White Christmas by Bing Crosby"],
            correctAnswer: "White Christmas by Bing Crosby",
            visual: 'assets/images/bing.gif',
            sound: 'assets/audio/bing.mp3',
            fact: "This single has sold more than 100 million copies worldwide."
        }, {
            question: "What was The Beatles first hit single in America?",
            answers: ["Twist And Shout", "I Want To Hold Your Hand", "Love Me Do", "I Saw Her Standing There"],
            correctAnswer: "I Want To Hold Your Hand",
            visual: 'assets/images/beatles.gif',
            sound: 'assets/audio/beatles.mp3',
            fact: "This song was released in 1963 and charted at #1 on the US Billboards on January 13, 1964."
        }, {
            question: "What artist has acheived the highest sales in history of an album in its first week?",
            answers: ["Taylor Swift", "NSYNC", "Adele", "Britney Spears"],
            correctAnswer: "Adele",
            visual: 'assets/images/adele.gif',
            sound: 'assets/audio/hello.mp3',
            fact: "Adele sold 3.38 million copies of her album 25 in the first week of its release."
        }, {
            question: "Who was most streamed artist of 2015?",
            answers: ["Ed Sheeran", "Drake", "Taylor Swift", "Katy Perry"],
            correctAnswer: "Drake",
            visual: 'assets/images/drake.gif',
            sound: "assets/audio/drake.mp3",
            fact: "Drake's music was streamed over 1.8 billion times in 2015.",
        }, {
            question: "What English Rock band from the 1970s had a one armed drummer?",
            answers: ["The Who", "Def Leppard", "Led Zepplin", "Queen"],
            correctAnswer: "Def Leppard",
            visual: 'assets/images/def.gif',
            sound: "assets/audio/def.mp3",
            fact: 'The drummer, Rick Allen was involved in a driving accident in 1984 that led to the amputation of his right arm.',
        }, {
            question: "What is the first ever rap song to win the Academy Award for Best Original Song?",
            answers: ["Thrift Shop by Macklemore", "Gansta's Paradise by Coolio", "Lose Yourself by Eminem", "Holy Grail by Jay-z"],
            correctAnswer: "Lose Yourself by Eminem",
            visual: 'assets/images/eminem.gif',
            sound: "assets/audio/eminem.mp3",
            fact: "Lose Yourself was written in 2002 for the motion picture 8 Mile."
        }, {
            question: "Who was the first American to hear of Joseph Stalin's Death?",
            answers: ["Dwight Eisenhower", "Johnny Cash", "Tony Blair", "Pat Benatar"],
            correctAnswer: "Johnny Cash",
            visual: 'assets/images/johnny.gif',
            sound: "assets/audio/johnny.mp3",
            fact: "Johnny was working as a radio operator with the US Airforce intercepting Soviet Army transmissions during the time of Stalin's death.",
        }, {
            question: "What famous song was recorded in only one take?",
            answers: ["Hey Jude by The Beatles", "All I Want for Christmas is You by Mariah Carey", "My Heart Will Go On by Celine Dion", "The Ocean by Led Zepplin"],
            correctAnswer: "My Heart Will Go On by Celine Dion",
            visual: 'assets/images/celine.gif',
            sound: "assets/audio/celine.mp3",
            fact: "Intially Celine didn't even want to record this famous love song but was convinced by her husband and producers of film Titantic.",
        }, {
            question: "Who is the youngest artist to win a Grammy Award?",
            answers: ["Meghan Trainor", "Ed Sheeran", "Taylor Swift", "Bruno Mars"],
            correctAnswer: "Taylor Swift",
            visual: 'assets/images/taylor.gif',
            sound: "assets/audio/taylor.mp3",
            fact: "Taylor is the youngest artist to win a Grammy at the age of 20 for her album Fearless.",
        }
    ],
    // Push the correct guess here and then get the length of the array and display that number at end
    guessesCorrect: 0,

    // Push the incorrect guesses here and then displayed
    guessesIncorrect: 0,

    // If the timer goes off before you guess it falls into this catagory
    unansweredGuesses: 0,

    // This will house the current question selected at random and removed from the master question once the masterQuestions array is empty move onto the final answer page
    currentQuestion: [],

    currentGuess: "",

    userGuess: "",

    timerCount: 14,

    masterIndex: "",

    // This function loads the page and loads the timer
    pageLoad: {
        run: function() {
            counter = setInterval(this.decrement, 1000);
        },
        // The decremeent function.
        decrement: function() {

            // Show the number in the #show-number tag.
            $('#timer').html('<h2>' + 'Time Remaining: ' + triviaObj.timerCount + '</h2>');
            // Decrease number by one.
            triviaObj.timerCount--;

            // Once number hits zero...
            if (triviaObj.timerCount === -1) {
                triviaObj.emptyDivs();
                triviaObj.timesUp();
                triviaObj.unansweredGuesses++;
                console.log("Unanswered Guesses:" + triviaObj.unansweredGuesses);
                triviaObj.spliceArray();
                // is the timeout function to automatically switch the page
                triviaObj.pageTimeout.timeout();
            }
        },
        // This stops the timer
        stop: function() {
            // Clears our "counter" interval.
            // We just pass the name of the interval
            // to the clearInterval function.
            clearInterval(counter);
        }
    },
    // Timeout function
    pageTimeout: {

        timeout: function() {
            setTimeout(this.fiveSeconds, 1000 * 7);
        },
        fiveSeconds: function() {
            triviaObj.emptyDivs();
            triviaObj.currentQuestion = [];
            console.log("This is the current question (should be blank): " + triviaObj.currentQuestion.length);

            // game over
            if (triviaObj.masterQuestions.length == 0) {
                // Game is over and display progress
                triviaObj.summaryPage();
                triviaObj.pageLoad.stop();
            } else {
                triviaObj.questionLoad();
            }
        }
    },

    timerReset: function() {
        var timerCount = 0;
        return timerCount;
        $('#timer').html('<h2>' + 'Time Remaining: ' + triviaObj.timerCount + '</h2>');
    },

    questionLoad: function() {
        this.timerCount = 14;
        // Show the number in the #show-number tag.
        $('#timer').html('<h2>' + 'Time Remaining: ' + 15 + '</h2>');
        this.pageLoad.run();
        // This pushes the random picked question object to the current question array
        this.currentQuestion.push(this.randomPick());

        console.log("Current Question: " + JSON.stringify(this.currentQuestion));
        $('#question').html('<h2>' + triviaObj.currentQuestion[0].question + '<h2>');

        // Setting the variable of current answers equal to the answers section with the current question array
        var currentAnswers = this.currentQuestion[0].answers

        // stores get element in variable parent 
        var parent = document.getElementById('answers');

        //  a for each function that runs for every answer in the array
        currentAnswers.forEach(function(answer, index, array) {
            // creates a p element
            var div = document.createElement('div');
            // Add other classes to update the background
            div.setAttribute('class', 'col-sm-12 col-md-6 col-lg-6 guess center-block');

            // storing creating a text node of answer in text
            var text = document.createTextNode(answer);
            // appending text to the previously created p tag
            div.appendChild(text);
            // appending the child to the parent in this case the p tag to the parent variable
            parent.appendChild(div);
        });
    },
    // Randomly picks the next question
    randomPick: function() {
        
        this.masterIndex = Math.floor(Math.random() * this.masterQuestions.length);
        var initialPick = this.masterQuestions[this.masterIndex];

        console.log("Initial Pick: " + JSON.stringify(initialPick));
        return initialPick;
    },
    // splice function to remove the current question object from the array so that it cannot be populated again
    spliceArray: function() {
        triviaObj.masterQuestions.splice(this.masterIndex, 1);
        console.log("The remove index value is: " + JSON.stringify(this.masterIndex));
        console.log("masterQuestions should have been altered! It is now: " + JSON.stringify(triviaObj.masterQuestions));
        console.log("Master Questions length is: " + triviaObj.masterQuestions.length)
        console.log("Current Question Length: " + triviaObj.currentQuestion.length); 
    },

    // Function to empty currently populated divs with questions and answers
    emptyDivs: function() {
        $('#question').empty();
        $('#answers').empty();
        $('#fact').empty();
        $('#picture').empty();
        $('#correctAnswer').empty();
        $('#audioplayer').attr('src', '');
        $('#timer').empty();
    },

    // The time up function
    timesUp: function() {
        $('#timer').attr('style', 'font-size: 40px;').html('Times UP!');
        $('#correctAnswer').html('The Correct Answer Is: ' + '<span>' + triviaObj.currentQuestion[0].correctAnswer + '</span>');
        console.log(triviaObj.currentQuestion[0].correctAnswer);

        triviaObj.displayAssets();
        triviaObj.pageLoad.stop();
    },
    // Correct Guess function
    correctGuess: function() {
        $('#question').attr('style', 'font-size: 40px;').html('Correct!');
        triviaObj.displayAssets();
    },

    // Incorrect guess function
    incorrectGuess: function() {
        $('#timer').attr('style', 'font-size: 40px;').html('Wrong!');
        $('#correctAnswer').html('The Correct Answer Is: ' + '<span>' + triviaObj.currentQuestion[0].correctAnswer + '</span>');
        triviaObj.displayAssets();
    },

    // Create displayAssets function to display the selected audio and video assets for the questions guesses. This would be added to win, times up and loss display
    displayAssets: function() {
        // Sets the image on the screen
        var img = $('<img>');
        img.attr('src', triviaObj.currentQuestion[0].visual);
        img.attr('class', 'img-rounded m-x-auto d-block pictureframe');
        img.attr('alt', 'Image');
        $('#picture').html(img);

        // Sets the fun fact
        $('#fact').html('<h3>' + 'Fun Fact: ' + triviaObj.currentQuestion[0].fact + '</h3>');

        // sets the audio on the page
        var audio = triviaObj.currentQuestion[0].sound;
        // audio.autoplay = true;
        audioplayer = $('#audioplayer');
        audioplayer.attr('src', audio);
        audioplayer.attr('autoplay', 'autoplay');
    },

    summaryPage: function() {

            $('#question').html('<h2>' + 'Thank you for playing. Here is your game summary: ' + '</h2>');

            // display correct guesses
            $('#answers').html("<p>" + "Correct Guesses: " + triviaObj.guessesCorrect + "</p>");

            // display incorrect guesses
            $('#answers').append("<p>" + "Incorrect Guesses: " + triviaObj.guessesIncorrect + "</p>");

            // display unanswered guesses
            $('#answers').append("<p>" + "Unanswered Guesses: " + triviaObj.unansweredGuesses + "</p>");
        }   
}

// GAME BEGINS with Initial setup of page and start click push

// Throw up a start button and when clicked it displays the first question page
$(document).ready(function() {
    // Intial page load with the button created dynamically
    var b = $('<button>');
    b.addClass('waves-effect waves-light btn-lg text-center startButton');
    b.html('START!');

    $('#start').append(b);

    // STAGE 1: Loads the page after a user click and displays first question and timer
    $('#start').on('click', function(event) {
        $(this).hide();
        triviaObj.questionLoad();
    });

    // STAGE 2: User guesses 

    // This initiates the user click/guess after the buttons are created on the screen
    $(document.body).on('click', '.guess', function(event) {
        var click = $(this).text();
       
        triviaObj.pageLoad.stop();

        // correct guess
        if (click == triviaObj.currentQuestion[0].correctAnswer) {

            triviaObj.emptyDivs();
            triviaObj.correctGuess();
            triviaObj.guessesCorrect++;
            console.log("This is the user pick: " + click);
            console.log("This is the correct answer: " + triviaObj.currentQuestion[0].correctAnswer);
            console.log("Guesses Correct: " + triviaObj.guessesCorrect);
            triviaObj.spliceArray();
            // is the timeout function to automatically switch the page
            triviaObj.pageTimeout.timeout();
        }
        // incorrect guess
        else if (click != triviaObj.currentQuestion[0].correctAnswer) {
            triviaObj.emptyDivs();
            triviaObj.incorrectGuess();
            triviaObj.guessesIncorrect++;
            console.log("This is the user pick: " + click);
            console.log("This is the correct answer: " + triviaObj.currentQuestion[0].correctAnswer);
            console.log("Guesses incorrect: " + triviaObj.guessedIncorrect);
            triviaObj.spliceArray();
            // is the timeout function to automatically switch the page
            triviaObj.pageTimeout.timeout();
        }
    });
});