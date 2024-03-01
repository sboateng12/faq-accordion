function showAnswers() {
  var questions = document.querySelectorAll(".card-question");
  var answers = document.querySelectorAll(".card-answer");
  var icon_plus = document.querySelectorAll(".card-question-plus");
  var icon_minus = document.querySelectorAll(".card-question-minus");

  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function () {
      answers[i].classList.toggle("visible");
      icon_plus[i].classList.toggle("visible");
      icon_minus[i].classList.toggle("visible");
    });
  }
}

showAnswers();
