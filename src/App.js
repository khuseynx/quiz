import React from "react";
import "./index.scss";

const questions = [
  {
    title: "hospitality",
    variants: ["гостеприимство", "гостиница", "расположение"],
    correct: 0,
  },
  {
    title: "lack",
    variants: ["карабкаться", "недостаток", "колено"],
    correct: 1,
  },
  {
    title: "remarkable",
    variants: ["отражение", "уникальный", "выдающийся"],
    correct: 2,
  },
  {
    title: "consequences",
    variants: ["последствия", "конференция", "обратная связь"],
    correct: 0,
  },
  {
    title: "He ... his homework",
    variants: ["does", "do", "is"],
    correct: 0,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href='/'>
      <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const percentage = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>
            {" "}
            {text}{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
        setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct}/>
      )}
    </div>
  );
}

export default App;