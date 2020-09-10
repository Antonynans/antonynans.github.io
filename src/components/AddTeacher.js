import React, { useState } from 'react'

const AddTeacher = props => {
  const initialFormState = { id: null, name: '', teacherId: '', class: '', section: '' }
  const [teacher, setTeacher] = useState(initialFormState)

  const handleInputChange = event => {
		const { name, value } = event.target

    setTeacher({ ...teacher, [name]: value })
  }

   
    
  
  return (
    <form onSubmit={event => {
      event.preventDefault()
      if (!teacher.name || !teacher.teacherId || !teacher.class || !teacher.section) return

      props.addTeacher(teacher)
      setTeacher(initialFormState)
    }}>
      <div><h6>Enter Name </h6>
      <input type="text" name="name"  value={teacher.name} onChange={handleInputChange} />
      </div>
      <div><h6>Enter Teacher ID </h6>
      <input type="text" name="teacherId"  value={teacher.teacherId} onChange={handleInputChange} />
      </div>
      <div><h6>Enter class</h6>
      <input type="number" name="class" min="1" max="12" value={teacher.class} onChange={handleInputChange}/>
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
     
      <button className="btn btn-primary">Add Teacher</button>
    </form>
  )
}

export default AddTeacher
