import React from "react";


function QuestionItem({ question, onDelete, num, setQuestions, questions}) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

    fetch(`http://localhost:4000/questions/${num}`, {
      method: "PATCH",
      headers: {
        "content-type": "application.json"
      },
      body: JSON.stringify({"correctIndex": question.correctIndex})

    })
    .then((res) => res.json())
    .then((data) => {
      setQuestions(data)
    })

  return (
    <li>
      
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={onDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
