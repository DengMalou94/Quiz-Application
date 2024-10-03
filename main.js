// Creating a List of Questions
let questions = [
    "What is your favorite course? (Frontend)",
    "How do you define success? (Fulfilment)",
    "What motivates you the most? (Purpose)",
    "What are your career goals? (Usability)",
    "How do you handle stress and pressure? (Resilience)"
];

// Function to start the quiz
function startQuiz() {
    let score = 0; // Initialize the score

    // Looping through each question
    for (let question of questions) {
        // Split the string to separate the query from the answer
        let [quiz, answer] = question.split(" (");

        // Check if the answer exists and clean up the string
        if (answer) {
            answer = answer.replace(")", "").toLowerCase();
        }

        // Collect User Input
        let userAnswer = prompt(quiz).toLowerCase();

        // Check the User's Answer
        if (userAnswer === answer) {
            score++;
            alert("Correct!");
        } else {
            alert("Incorrect! The correct answer is: " + answer);
        }
    }

    // Display Final Score
    alert("You scored " + score + " out of " + questions.length);
}

// Start the quiz by calling the function
startQuiz();

// Bonus Challenge: Ask if the user wants to retake the quiz
function retakeQuiz() {
    let retake = confirm("Would you like to retake the quiz?");
    if (retake) {
        startQuiz();
    } else {
        alert("Thank you for playing!");
    }
}

// Call the function to ask for a retake after the quiz
retakeQuiz();
