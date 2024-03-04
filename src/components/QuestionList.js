import React from "react";
import QuestionItem from "./QuestionItem";


function QuestionList({questions, setQuestions}) {

  const handleDelete = (id) => {
    const filtered = questions.filter((question) => question.id !== id)
    setQuestions(filtered)

    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
    .then((res) => res.json())
   
  }
  return (
    <section>
      
      <h1>Quiz Questions</h1>
      <ul>
      {Array.isArray(questions) && questions.map((question) => (
    <QuestionItem
        num={question.id}
        key={question.id}
        question={question}
        onDelete={() => handleDelete(question.id)}
        setQuestions={setQuestions}
        questions={questions}
    />
))}
      </ul>
    </section>
  );
}

export default QuestionList;
