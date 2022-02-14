import React from 'react'
import './CourseGoalItem.css'
const CourseGoalItem = (props) => {
  const deleteHandler = () => {
    props.deleteGoals(props.id)
  }
  return (
    <div className="goal-item-main row">
      <div className="delete-btn col-6">
        <button onClick={deleteHandler}>X</button>
      </div>
      <div className="goal-text col-6">{props.text}</div>
    </div>
  )
}

export default CourseGoalItem
