import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='title'>Hello World!</h1>
      <form action="">        
        <label className='user_label' htmlFor="user_name">Inserisci il tuo nome</label>
        <input className='user_input' type="text" id='user_name' name='user_name' />
      </form>
    </>
  )
}

export default App
