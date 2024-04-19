import React from 'react'

export default function Comment(props){
  const [score, setScore] = React.useState(20)

  function increaseScore(){
    if(score > props.counter){
      return ''
    }
    return setScore((prevDate) => prevDate + 1)
  }
  function decreaseScore(){
    if(score < props.counter){
      return ''
    }
    return setScore((prevDate) => prevDate - 1)
  }

  return(
    <div className='comment flex-desktop'>
      <div>
        <img/>
        <p>{score}</p>
        <img />
      </div>
    </div>
  )
}