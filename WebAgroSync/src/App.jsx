import { useState } from 'react'
import './App.css'
import Productcards from '../src/components/ProductCards.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <header className="App-header">
          <Productcards />
        </header>
      </div>
    </>
  )
}

export default App
