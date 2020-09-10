import React, { useState } from 'react'

const AddTeacher = props => {
  const initialFormState = { id: null, name: '', rollno: '', class: '', section: '' }
  const [teacher, setTeacher] = useState(initialFormState)

  const handleInputChange = event => {
		const { name, value } = event.target

    setTeacher({ ...teacher, [name]: value })
  }

   
    
  
  return (
    <form onSubmit={event => {
      event.preventDefault()
      if (!teacher.name || !teacher.rollno || !teacher.class || !teacher.section) return

      props.addTeacher(teacher)
      setTeacher(initialFormState)
    }}>
      <div><h6>Enter Name </h6>
      <input type="text" name="name"  value={teacher.name} onChange={handleInputChange} />
      </div>
      <div><h6>Enter Roll No </h6>
      <input type="number" name="rollno"  value={teacher.rollno} onChange={handleInputChange} />
      </div>
      <div><h6>Enter class</h6>
      <input type="number" name="class" min="1" max="12" value={teacher.class} onChange={handleInputChange}/>
      </div>
      <div><h6>Section</h6>   
      <input type="text" name="section"  value={teacher.section} onChange={handleInputChange}/>
      </div>
      <button className="btn btn-primary">Add Teacher</button>
    </form>
  )
}

export default AddTeacher
