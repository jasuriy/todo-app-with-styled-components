import React from 'react'
import CourseGoalItem from '../CourseGoalItem/CourseGoalItem'
import './CourseGoalList.css'

const CourseGoalList = (props) => {
  return (
    <div className="goal-list">
      {props.goals.map((item) => (
        <CourseGoalItem
          key={item.id}
          id={item.id}
          text={item.text}
          deleteGoals={props.deleteItemHandler}
        />
      ))}
    </div>
  )
}

export default CourseGoalList
