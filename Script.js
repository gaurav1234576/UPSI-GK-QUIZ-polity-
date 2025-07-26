const questions = [
  {
    q: "भारतीय संविधान का कौन सा अनुच्छेद 'भारत एक धर्मनिरपेक्ष राष्ट्र है' यह घोषित करता है?",
    options: ["अनुच्छेद 14", "अनुच्छेद 25", "अनुच्छेद 51A", "अनुच्छेद 1"],
    answer: 1
  },
  {
    q: "भारत का राष्ट्रपिता किसे कहा जाता है?",
    options: ["लाल बहादुर शास्त्री", "सुभाष चंद्र बोस", "महात्मा गांधी", "बाल गंगाधर तिलक"],
    answer: 2
  },
  {
    q: "प्रथम लोकसभा चुनाव कब हुए थे?",
    options: ["1950", "1951-52", "1947", "1955"],
    answer: 1
  },
  {
    q: "राज्यपाल की नियुक्ति कौन करता है?",
    options: ["प्रधानमंत्री", "गृह मंत्री", "राष्ट्रपति", "मुख्यमंत्री"],
    answer: 2
  },
  {
    q: "भारत में कितने केंद्रशासित प्रदेश हैं? (2025 तक)",
    options: ["7", "8", "9", "10"],
    answer: 1
  }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreBox = document.getElementById("score-box");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const currQ = questions[current];
  questionEl.textContent = currQ.q;
  optionsEl.innerHTML = "";
  currQ.options.forEach((opt, index) => {
    const div = document.createElement("div");
    div.className = "option";
    div.textContent = opt;
    div.onclick = () => checkAnswer(div, index);
    optionsEl.appendChild(div);
  });
}

function checkAnswer(selected, index) {
  const correctIndex = questions[current].answer;
  const allOptions = document.querySelectorAll(".option");
  allOptions.forEach((opt, i) => {
    opt.classList.add(i === correctIndex ? "correct" : "incorrect");
    opt.onclick = null;
  });
  if (index === correctIndex) score++;
}

nextBtn.onclick = () => {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("question-box").classList.add("hidden");
    nextBtn.classList.add("hidden");
    scoreBox.classList.remove("hidden");
    scoreEl.textContent = score;
  }
};

loadQuestion();
