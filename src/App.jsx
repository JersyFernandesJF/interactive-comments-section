import { useState } from 'react'
import '../style.css'
import Comment from '../components/Comment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <p>Jersy</p>
     <Comment/>
    </div>
  )
}

export default App
