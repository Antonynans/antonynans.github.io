import React, { useState } from 'react'

const AddStudent = props => {
  const initialFormState = { id: null, name: '', rollno: '', class: '', section: '' }
  const [student, setStudent] = useState(initialFormState)

  const handleInputChange = event => {
		const { name, value } = event.target

    setStudent({ ...student, [name]: value })
  }

   
    
  
  return (
    <form onSubmit={event => {
      event.preventDefault()
      if (!student.name || !student.rollno || !student.class || !student.section) return

      props.addStudent(student)
      setStudent(initialFormState)
    }}>
      <div><h6>Enter Name </h6>
      <input type="text" name="name"  value={student.name} onChange={handleInputChange} />
      </div>
      <div><h6>Enter Roll No </h6>
      <input type="number" name="rollno"  value={student.rollno} onChange={handleInputChange} />
      </div>
      <div><h6>Enter class</h6>
      <input type="number" name="class" min="1" max="12" value={student.class} onChange={handleInputChange}/>
      </div>
      <div><h6>Section</h6>   
      </div>
      <input type="radio" name="section" value="A" onChange={handleInputChange}/>A
     <input type="radio" name="section" value="B" onChange={handleInputChange}/>B
     <input type="radio" name="section" value="C" onChange={handleInputChange}/>C
     <input type="radio" name="section" value="D" onChange={handleInputChange}/>D
     <input type="radio" name="section" value="E" onChange={handleInputChange}/>E
     <input type="radio" name="section" value="F" onChange={handleInputChange}/>F
    <br/>
      <button className="btn btn-primary">Add Student</button>
    </form>
  )
}

export default AddStudent
