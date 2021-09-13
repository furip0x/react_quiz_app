import React, { useState } from 'react'
import Header from './components/Header'
import MainMenu from './components/MainMenu'
import EndScreen from './components/EndScreen'
import Quiz from './components/Quiz'
import { QuizContext } from './components/Helpers/Context'

function App() {
  const [gameState, setGameState] = useState('menu')
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState([])
  const [name, setName] = useState('')

  return (
    <QuizContext.Provider
      value={{
        gameState,
        setGameState,
        score,
        setScore,
        answers,
        setAnswers,
        name,
        setName,
      }}
    >
      <div className='quiz-wrapper'>
        <Header />
        <main className='quiz-body'>
          {gameState === 'menu' && <MainMenu />}
          {gameState === 'quiz' && <Quiz />}
          {gameState === 'endScreen' && <EndScreen />}
        </main>
      </div>
    </QuizContext.Provider>
  )
}

export default App
