
const questions = [
  { answer: "மாம்பழம்", scrambled: "மா ம்ப ழம்" },
  { answer: "பூனை", scrambled: "பூ நை" },
  { answer: "நாய்", scrambled: "நா ய்" },
  { answer: "மரம்", scrambled: "ம ரம்" },
  { answer: "மீன்", scrambled: "மீ ன்" },
  { answer: "காகம்", scrambled: "கா கம்" },
  { answer: "சூரியன்", scrambled: "சூ ரி யன்" },
  { answer: "தண்ணீர்", scrambled: "த ண்ணீர்" },
  { answer: "வெள்ளம்", scrambled: "வெ ள்ளம்" },
  { answer: "மலர்", scrambled: "ம லர்" }
];

let currentPage = 0;
const perPage = 10;
const quizContainer = document.getElementById("quiz-container");

function loadQuestions() {
  quizContainer.innerHTML = "";
  const start = currentPage * perPage;
  const end = start + perPage;
  const pageQuestions = questions.slice(start, end);

  pageQuestions.forEach((q, i) => {
    const card = document.createElement("div");
    card.className = "question-card";

    const qNum = document.createElement("div");
    qNum.className = "q-number";
    qNum.innerText = start + i + 1;
    card.appendChild(qNum);

    const scrambledDiv = document.createElement("div");
    scrambledDiv.className = "scrambled";
    q.scrambled.split(" ").forEach(ch => {
      const box = document.createElement("div");
      box.className = "letter-box";
      box.innerText = ch;
      scrambledDiv.appendChild(box);
    });
    card.appendChild(scrambledDiv);

    const ansInput = document.createElement("input");
    ansInput.className = "answer-box";
    ansInput.dataset.answer = q.answer;
    card.appendChild(ansInput);

    quizContainer.appendChild(card);
  });
}

function checkAnswers() {
  let score = 0;
  const inputs = document.querySelectorAll(".answer-box");
  inputs.forEach(input => {
    const correct = input.dataset.answer.trim();
    if (input.value.trim() === correct) {
      input.classList.add("correct");
      score++;
    } else {
      input.classList.add("wrong");
    }
  });
  alert(`மொத்த மதிப்பெண்: ${score} / ${questions.length}`);
}

function retryQuiz() {
  document.querySelectorAll(".answer-box").forEach(input => {
    input.value = "";
    input.classList.remove("correct", "wrong");
  });
}

document.getElementById("nextBtn").onclick = () => {
  if ((currentPage + 1) * perPage < questions.length) {
    currentPage++;
    loadQuestions();
  }
};

document.getElementById("prevBtn").onclick = () => {
  if (currentPage > 0) {
    currentPage--;
    loadQuestions();
  }
};

document.getElementById("scoreBtn").onclick = checkAnswers;
document.getElementById("retryBtn").onclick = retryQuiz;

loadQuestions();

  
