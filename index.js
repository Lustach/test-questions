const questions = [
  {
    title: "Сколько океанов на нашей планете?",
    answer: ["4", "5", "6"],
    correctAnswer: "1"
  },
  {
    title: "Единица измерения силы тока - это?",
    answer: ["Ампер", "Вольт", "Ватт"],
    correctAnswer: "0"
  },
  {
    title: "Сатурн - это какая по счёту планета от Солнца?",
    answer: ["Пятая", "Шестая", "Седьмая"],
    correctAnswer: "1"
  },
  {
    title: "Сколько будет 0,2 км в дециметрах?",
    answer: ["20000 дм", "2000 дм", "200 дм"],
    correctAnswer: "1"
  },
  {
    title: "Самая длинная река в мире - это?",
    answer: ["Амазонка", "Нил", "Янцзы"],
    correctAnswer: "0"
  }
];

let intermediateAnswer = null;
let myAnswer = {
  length: 0
};

(function(arrOfTasks) {
  let defaultAnswer = 0;
  let doc = document;
  console.log(arrOfTasks);

  let qContainer = document.querySelector(".test-container");
  console.log(qContainer);
  let questForm = doc.querySelector(".test-quest");

  createOneTask(defaultAnswer);

  function createOneTask(param) {
    questForm.innerHTML = "";
    let title = doc.createElement("p");
    title.setAttribute("class", "title");
    title.textContent = questions[param].title;
    questForm.appendChild(title);

    let p = doc.createElement("p");
    let radioInput = doc.createElement("input");
    let textContent = "";

    for (let i = 0; i < questions[param].answer.length; i++) {
      radioInput = doc.createElement("input");
      p = doc.createElement("p");
      radioInput.setAttribute("name", questions[param].title);
      radioInput.setAttribute("type", "radio");
      radioInput.setAttribute("value", questions[param].answer[i]);

      radioInput.addEventListener("click", e => {
        console.log(e.target.value);
        intermediateAnswer = { answer: e.target.value, quesNumber: param };
        console.log(intermediateAnswer, param);
      });
      p.appendChild(radioInput);
      textContent = doc.createTextNode(questions[param].answer[i]);
      p.appendChild(textContent);
      console.log(p);

      questForm.appendChild(p);
    }
    console.log(defaultAnswer);
  }

  let btnSetAnswer = document.querySelector(".set-answer");
  let btnForward = document.querySelector(".forward");
  let btnBack = document.querySelector(".back");

  btnSetAnswer.addEventListener("click", () => {
    if (intermediateAnswer != null) {
      if (myAnswer.hasOwnProperty(intermediateAnswer.quesNumber)) {
        console.log("est`");
      } else {
        myAnswer.length++;
      }
      console.log(
        intermediateAnswer.quesNumber,
        "intermediateAnswer.quesNumber"
      );
      myAnswer[intermediateAnswer.quesNumber] = intermediateAnswer;

      console.log(myAnswer);
      plusDefaultAnswer();
      if (myAnswer.length == 5) {
        alert("Тест закончен");
        //Здесь вызвать функцию на замену контента(показать результаты)
        getResult();
      }
    } else {
      alert("Выберите ответ");
    }
  });

  btnBack.addEventListener("click", minusDefaulAnswer);
  btnForward.addEventListener("click", plusDefaultAnswer);
  function minusDefaulAnswer() {
    console.log("a");
    if (defaultAnswer == 0) {
      defaultAnswer = questions.length - 1;
      createOneTask(defaultAnswer);
    } else {
      defaultAnswer -= 1;
      createOneTask(defaultAnswer);
    }
  }

  function plusDefaultAnswer() {
    console.log("b");
    if (defaultAnswer == questions.length - 1) {
      defaultAnswer = 0;
      createOneTask(defaultAnswer);
    } else {
      defaultAnswer += 1;
      createOneTask(defaultAnswer);
    }
  }

  function getResult() {
    console.log("function getResult");
    questForm.innerHTML = "";
    let TotalrightAnswer = 0;

    for (const key in questions) {
      let questionTitle = document.createElement("p");
      let questionAnswer = document.createElement("p");
      let rightAnswer = document.createElement("p");
      questionTitle.textContent = `Вопрос:` + questions[key].title;
      questionAnswer.textContent = `Ваш ответ:` + myAnswer[key].answer;
      rightAnswer.textContent =
        `Верный ответ:` + questions[key].answer[questions[key].correctAnswer];
      questionTitle.style = "border-bottom:1px solid black;width: 500px;";
      questForm.appendChild(questionTitle);
      questForm.appendChild(questionAnswer);
      questForm.appendChild(rightAnswer);

      if (
        myAnswer[key].answer ==
        questions[key].answer[questions[key].correctAnswer]
      ) {
        TotalrightAnswer++;
      }
    }
    let results = document.createElement("p");
    results.textContent = `Всего правильных ответов:` + TotalrightAnswer;
    questForm.appendChild(results);
  }
})(questions);
