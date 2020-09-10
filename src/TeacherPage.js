import React, { useState } from 'react';
import TeacherList from './components/TeacherList';
import  AddTeacher from './components/AddTeacher';
import  EditTeacher from './components/EditTeacher';

const TeacherPage= () => {
  const teacherData = [
  ]

  const initialFormState = { id: null, name: '', teacherId: '', class: '', section: '' }

  const [teachers, setTeachers] = useState(teacherData)
  const [editing, setEditing] = useState(false);
  const [currentTeacher, setCurrentTeacher] = useState(initialFormState)


  // Add student...
  const addTeacher = teacher => {
    teacher.id = teacher.length + 1
    setTeachers([...teachers, teacher])
  }
  // delete students...
  const deleteTeacher = id => {
    setTeachers(teachers.filter(teacher => teacher.id !== id))
  }
  // set value for edit student form...
  const editTeacher = teacher => {
    setEditing(true)
    setCurrentTeacher({ 
      id: teacher.id, 
      name: teacher.name, 
      teacherId: teacher.teacherId, 
      class : teacher.class, 
      section : teacher.section 
    })
  }
  //  update student
  const updateTeacher = (id, updatedTeacher) => {
    setEditing(false)
    console.log(id,'iddddd')
    setTeachers(teachers.map(item => (item.id === id ? updatedTeacher : item)))
  }

  return (
    <div className="container">
      <h2 className="text-center">Teacher Page</h2>
      <div className="row">
      {editing ? (
        <div>
          <h2 className="text-center">Edit teacher</h2>
          <div className="col-md-8 col-md-offset-2">
          <EditTeacher
            editing={editing}
            setEditing={setEditing}
            currentTeacher={currentTeacher}
            updateTeacher={updateTeacher}
          />
          </div>
        </div>
      ) : (
        <div>
        <h3 className="text-center">Add Teacher</h3>
        <div className="col-md-8 col-md-offset-2">
          <AddTeacher addTeacher={addTeacher} />
        </div>
        </div>
      )}
        
        


      </div>
      <div className="row">
        <h3 className="text-center">Teacher List</h3>
        <div className="col-md-6 col-md-offset-3">
          <TeacherList teachers={teachers} editTeacher={editTeacher}  deleteTeacher={deleteTeacher}/>
        </div>
      </div>
    </div>
  );
}

export default TeacherPage;
