import React, { useState } from 'react'
import './App.css'
import CourseGoalInput from './components/CourseGoals/CourseGoalInput/CourseGoalInput'
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList'

const App = () => {
  const [goals, setGoals] = useState([
    // {
    //   id: '',
    //   text: '',
    // },
  ])

  const addGoalItems = (goal) => {
    setGoals((prevState) => {
      const updatedGoals = [...prevState]
      updatedGoals.push({ id: Math.random().toString(), text: goal })
      return updatedGoals
    })
  }
  const deleteItemHandler = (itemID) => {
    setGoals((prevState) => {
      const delatedGoals = prevState.filter(
        (deletedItem) => deletedItem.id !== itemID,
      )
      return delatedGoals
    })
  }
  return (
    <div className="App">
      <CourseGoalInput addGoalItems={addGoalItems} />
      <CourseGoalList goals={goals} deleteItemHandler={deleteItemHandler} />
    </div>
  )
}

export default App

// const addGoalHandler = (enteredText) => {
//   setCourseGoals((prevGoals) => {
//     const updatedGoals = [...prevGoals];
//     updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
//     return updatedGoals;
//   });
// };

// const deleteItemHandler = (goalId) => {
//   setCourseGoals((prevGoals) => {
//     const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
//     return updatedGoals;
//   });
// };
