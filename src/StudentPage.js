import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import StudentList from './components/StudentList';
import  AddStudent from './components/AddStudent';
import  EditStudent from './components/EditStudent';

const StudentPage= () => {
  const studentData = [
  ]

  const initialFormState = { id: null, name: '', rollno: '', class: '', section: '' }

  const [students, setStudents] = useState(studentData)
  const [editing, setEditing] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(initialFormState)


  // Add student...
  const addStudent = student => {
    student.id = students.length + 1
    setStudents([...students, student])
  }
  // delete students...
  const deleteStudent = id => {
    setStudents(students.filter(student => student.id !== id))
  }
  // set value for edit student form...
  const editStudent = student => {
    setEditing(true)
    setCurrentStudent({ 
      id: student.id, 
      name: student.name, 
      rollno: student.rollno, 
      class : student.class, 
      section : student.section 
    })
  }
  //  update student
  const updateStudent = (id, updatedStudent) => {
    setEditing(false)
    console.log(id,'iddddd')
    setStudents(students.map(item => (item.id === id ? updatedStudent : item)))
  }

  return (
    <div className="container">
      <h2 className="text-center">Student page</h2>
      <div className="row">
      {editing ? (
        <div>
          <h2 className="text-center">Edit student</h2>
          <div className="col-md-8 col-md-offset-2">
          <EditStudent
            editing={editing}
            setEditing={setEditing}
            currentStudent={currentStudent}
            updateStudent={updateStudent}
          />
          </div>
        </div>
      ) : (
        <div>
        <h3 className="text-center">Add Student</h3>
        <NavLink id="home-link" to="/">Home</NavLink>
        <div className="col-md-8 col-md-offset-2">
          <AddStudent addStudent={addStudent} />
        </div>
        </div>
      )}
        
        


      </div>
      <div className="row">
        <h3 className="text-center">Student List</h3>
        <div className="col-md-6 col-md-offset-3">
          <StudentList students={students} editStudent={editStudent}  deleteStudent={deleteStudent}/>
        </div>
      </div>
    </div>
  );
}

export default StudentPage;
