import { useState } from 'react'
import TodoWrapper from '../components/TodoWrapper'
import './index.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <TodoWrapper/>
    </div>
   
  )
}

export default App
