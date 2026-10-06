import { useState } from "react"

function App() {
  //    [stateName, updaterFunction] = useState(initialValue)
  const [count, setCount] = useState(0)


  const allStudents = [
    {
      studentName: "Mahdi",
      grade: 101,
      city:"Manama",
      age:22
    },
    {
      studentName: "Abdullah",
      grade: 102,
      city:"Manama2",
      age:22

    },
    {
      studentName: "Ahmed",
      grade: 103,
      city:"Manama3",
      age:21

    },
  ]

  const [students, setStudents] = useState(allStudents)
  const [deletedStudents, setDeletedStudents] = useState([])

  function handleIncrease(){
    setCount(count + 1)
  }

  function deleteStudent(clickedStudent){
    console.log(clickedStudent)

    const filteredStudents = students.filter((oneStudent)=>{
      return oneStudent.studentName !== clickedStudent.studentName
    })

    console.log(filteredStudents)
    setStudents(filteredStudents)
    setDeletedStudents([...deletedStudents,clickedStudent])
  }

  // Exercise 1:
  // 1. make a - button
  // 2. when this button is clicked the count should go down
  // 3. BONUS: if the count is 0 dont go down
  // 4. BONUS BONUS: Make a reset button that resets the count to 0
  return (
    <>
      <h1>React State Management</h1>

      <p>Count: {count}</p>
      <button onClick={handleIncrease}>+</button>



      <h2>All Students</h2>

      {students.map((oneStudent)=>
      <div key={oneStudent.studentName}>
        <p>Name: {oneStudent.studentName}</p>
        <button onClick={()=>{deleteStudent(oneStudent)}}>Delete Student</button>
      </div>
      )}

      <h2>Deleted Students</h2>
      {deletedStudents.map((oneStudent)=>
      <div key={oneStudent.studentName}>
        <p>Name: {oneStudent.studentName}</p>
      </div>
      )}
    </>
  )
}

export default App
