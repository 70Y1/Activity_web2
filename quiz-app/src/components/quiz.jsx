import React from "react";
import "../App.css";  


function QuizApp(props) {
  return (
    <div className="quiz-container">
      <h1 className="quiz-title">{props.title}</h1>
      <h3 className="project-name">{props.project}</h3>

    
      <div className="quiz-block">
        <h3 className="quiz-question">{props.quiz1}</h3>
        <div className="answer-block bg-red">
          <p>{props.answer1}</p>
        </div>
        <div className="answer-block bg-red">
          <p>{props.answer2}</p>
        </div>
        <div className="answer-block bg-green">
          <p>{props.answer3}</p>
        </div>
        <div className="answer-block bg-red">
          <p>{props.answer4}</p>
        </div>
      </div>

      
      <div className="quiz-block">
        <h3 className="quiz-question">{props.quiz2}</h3>
        <div className="answer-block bg-red">
          <p>{props.answer5}</p>
        </div>
        <div className="answer-block bg-green">
          <p>{props.answer6}</p>
        </div>
        <div className="answer-block bg-red">
          <p>{props.answer7}</p>
        </div>
        <div className="answer-block bg-red">
          <p>{props.answer8}</p>
        </div>
      </div>

      <div className="quiz-block">
        <h3 className="quiz-question">{props.quiz3}</h3>
        <div className="answer-block bg-red">
          <p>{props.answer9}</p>
        </div>
        <div className="answer-block bg-red">
          <p>{props.answer10}</p>
        </div>
        <div className="answer-block bg-green">
          <p>{props.answer11}</p>
        </div>
        <div className="answer-block bg-red">
          <p>{props.answer12}</p>
        </div>
      </div>
    </div>
  );
}

export default QuizApp;
