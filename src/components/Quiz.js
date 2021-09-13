import React, { useState, useContext } from 'react'
import { QuizContext } from './Helpers/Context'
import { Questions } from './Helpers/QuestionBank'

const Quiz = () => {
  const { score, setScore, setGameState, answers, setAnswers } =
    useContext(QuizContext)
  const [currQuestion, setCurrQuestion] = useState(0)
  const [optionChosen, setOptionChosen] = useState('')

  const [isError, setIsError] = useState(false)

  const nextQuestion = () => {
    if (optionChosen) {
      if (Questions[currQuestion].answer === optionChosen) {
        setScore(score + 1)
      }
      setCurrQuestion(currQuestion + 1)
      setAnswers((prevAnswers) => {
        return [...prevAnswers, optionChosen]
      })
      setIsError(false)
      setOptionChosen('')
    } else {
      setIsError(true)
    }
  }

  const finishQuiz = () => {
    if (optionChosen) {
      if (Questions[currQuestion].answer === optionChosen) {
        setScore(score + 1)
      }
      setAnswers((prevAnswers) => {
        return [...prevAnswers, optionChosen]
      })
      setGameState('endScreen')
      setIsError(false)
    } else {
      setIsError(true)
    }
  }

  return (
    <section className='quiz'>
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className='options'>
        <button onClick={() => setOptionChosen('A')}>
          {Questions[currQuestion].optionA}
        </button>
        <button onClick={() => setOptionChosen('B')}>
          {Questions[currQuestion].optionB}
        </button>
        <button onClick={() => setOptionChosen('C')}>
          {Questions[currQuestion].optionC}
        </button>
        <button onClick={() => setOptionChosen('D')}>
          {Questions[currQuestion].optionD}
        </button>
      </div>

      {currQuestion === Questions.length - 1 ? (
        <button className='submit-btn' onClick={finishQuiz}>
          Finish Quiz
        </button>
      ) : (
        <button className='submit-btn' onClick={nextQuestion}>
          Next Question
        </button>
      )}
      <div className={`error ${isError ? '' : 'hide'}`}>
        Please choose an answer
      </div>
    </section>
  )
}

export default Quiz
