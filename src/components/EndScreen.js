import React, { useContext, useState } from 'react'
import { QuizContext } from './Helpers/Context'
import { Questions } from './Helpers/QuestionBank'

const EndScreen = () => {
  const [showQuizAnswers, setShowQuizAnswers] = useState(false)
  const { score, setScore, setGameState, answers, setAnswers, name } =
    useContext(QuizContext)

  const restartGame = () => {
    setGameState('menu')
    setScore(0)
    setAnswers([])
  }

  if (!showQuizAnswers) {
    return (
      <section className='end-screen'>
        <div className='col'>
          <h1>
            Here are your results <span>{name}</span>
          </h1>
          <div className='answers'>
            <div className='answers-item'>
              <h2>Your answers:</h2>
              <div className='answers-list'>{answers.join(', ')}</div>
            </div>
            <div className='answers-item'>
              <h2>Correct answers:</h2>
              <div className='answers-list'>
                {/* {Questions.join(', ')} */}
                {Questions.map((question) => {
                  return question.answer
                }).join(', ')}
              </div>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='score'>
            {score} / {Questions.length}
          </div>
          <button className='submit-btn' onClick={restartGame}>
            Restart
          </button>
          <button
            className='submit-btn submit-btn__answer'
            onClick={() => setShowQuizAnswers(true)}
          >
            See Answers
          </button>
        </div>
      </section>
    )
  } else {
    return (
      <section className='questions-answer-list'>
        {Questions.map((question) => {
          let answer = ''
          switch (question.answer) {
            case 'A':
              answer = question.optionA
              break
            case 'B':
              answer = question.optionB
              break
            case 'C':
              answer = question.optionC
              break
            case 'D':
              answer = question.optionD
              break
          }
          return (
            <div key={question.id} class='question-answer-item'>
              <h3>{question.prompt}</h3>
              <span>{answer}</span>
            </div>
          )
        })}
        <button
          className='submit-btn'
          onClick={() => setShowQuizAnswers(false)}
        >
          Return to results
        </button>
      </section>
    )
  }
}

export default EndScreen
