const questions = [
    { question: "What does HTML stand for?", choices: ["Hyper Text Markup Language", "High Text Machine Language", "Home Tool Markup Language"], answer: 0 },
    { question: "Which language is used for web page behavior?", choices: ["HTML", "CSS", "JavaScript"], answer: 2 },
    { question: "Which symbol starts a JavaScript comment?", choices: ["//", "##", "<!--"], answer: 0 }
];

let current = 0;
let score = 0;

function showQuestion() {
    if (current >= questions.length) {
        document.getElementById("question").textContent = "Quiz finished!";
        document.getElementById("choices").innerHTML = "";
        document.getElementById("score").textContent = "Score: " + score + "/" + questions.length;
        return;
    }

    let q = questions[current];
    document.getElementById("question").textContent = q.question;
    document.getElementById("choices").innerHTML = "";

    q.choices.forEach((choice, index) => {
        let button = document.createElement("button");
        button.textContent = choice;
        button.onclick = function() {
            if (index === q.answer) score++;
            current++;
            showQuestion();
        };
        document.getElementById("choices").appendChild(button);
    });
}

showQuestion();