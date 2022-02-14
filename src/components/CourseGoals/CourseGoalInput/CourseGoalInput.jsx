import React, { useState } from 'react'
import './CourseGoalInput.css'

const CourseGoalInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('')
  const [isValid, setIsValid] = useState(true)

  const inputChangeHandler = (e) => {
    setEnteredValue(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    if (enteredValue.trim().length === 0) {
      setIsValid(false)
      return
    }
    props.addGoalItems(enteredValue)
    setEnteredValue('')
  }

  return (
    <form className="form-main" onSubmit={submitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? 'red' : 'black' }}>
          Course Goals
        </label>
        <input type="text" value={enteredValue} onChange={inputChangeHandler} />
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

export default CourseGoalInput
