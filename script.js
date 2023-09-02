// script.js
const questions = [
    {
        question: "What is the square root of 49?",
        options: ["3", "5", "6", "7"],
        correctAnswer: "7"
    },
    {
        question: "How many sides does a hexagon have?",
        options: ["4", "5", "6", "7"],
        correctAnswer: "6"
    },
    {
        question: "Find the hidden answer! What color is the sky?",
        options: ["Red", "Green", "Blue", "Yellow"],
        correctAnswer: "Blue",
        hiddenAnswer: true // This indicates that the answer is hidden
    },
    {
        question: "Which planet is closest to the Sun?",
        options: ["Earth", "Mars", "Venus", "Mercury"],
        correctAnswer: "Mercury"
    },
    {
        question: "Solve this riddle: I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
        options: ["Whistle", "Cloud", "Echo", "Candle"],
        correctAnswer: "Echo"
    },
    // Add more questions and answers here
];

let currentQuestion = 0;

const questionContainer = document.getElementById("question-container");
const nextButton = document.getElementById("next-button");

function displayQuestion() {
    const question = questions[currentQuestion];
    questionContainer.innerHTML = `
        <p>${question.question}</p>
        <ul>
            ${question.options.map(option => `<li>${option}</li>`).join('')}
        </ul>
    `;
}

displayQuestion();

nextButton.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        // End of the quiz logic (show score or completion message)
        questionContainer.innerHTML = "<p>Congratulations, you've completed the quiz!</p>";
        nextButton.style.display = "none"; // Hide the "Next" button
    }
});

// Additional logic to handle hidden answers
questionContainer.addEventListener("click", () => {
    const currentQuestionObj = questions[currentQuestion];
    if (currentQuestionObj.hiddenAnswer) {
        alert("You found the hidden answer! The sky is indeed Blue.");
        currentQuestionObj.hiddenAnswer = false; // Mark the answer as found
    }
});
