import React from 'react';
const TeacherList = props =>(
  
  <div className="table-responsive">
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Teacher ID</th>
        <th>Class</th>
        <th>Section</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {props.teachers.length > 0 ? (
        props.teachers.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.teacherId}</td>
            <td>{item.class}</td>
            <td>{item.section}</td>
            <td>
              <button onClick={() => { props.editTeacher(item) }} className="btn btn-default">Edit</button>
              <button onClick={() => props.deleteTeacher(item.id)} className="btn btn-default">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4}>No teacher available</td>
        </tr>
      )}
      
    </tbody>
  </table>
  </div>
)

export default TeacherList