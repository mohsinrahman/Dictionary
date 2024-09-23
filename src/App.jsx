import { useState } from 'react'
import SearchBar from './SearchBar'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
      <h1>DICTIONARY</h1>
      <SearchBar/>
    </>
  )
}

export default App
