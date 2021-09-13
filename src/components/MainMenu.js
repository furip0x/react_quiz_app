import React, { useContext, useState } from 'react'
import { QuizContext } from './Helpers/Context'

const MainMenu = () => {
  const [isError, setIsError] = useState(false)
  const { setGameState, name, setName } = useContext(QuizContext)

  const handleForm = (e) => {
    e.preventDefault()
    if (name) {
      setGameState('quiz')
      setIsError(false)
    } else {
      setIsError(true)
    }
  }

  return (
    <section className='menu'>
      <form onSubmit={handleForm}>
        <label htmlFor='name'>Enter your name:</label>
        <input
          type='text'
          id='name'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Start Quiz</button>
      </form>
      <div className={`error ${isError ? '' : 'hide'}`}>
        Please write your name
      </div>
    </section>
  )
}

export default MainMenu
