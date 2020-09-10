import React from 'react';
const StudentList = props =>(
  
  <div className="table-responsive">
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Roll No</th>
        <th>Class</th>
        <th>Section</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {props.students.length > 0 ? (
        props.students.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.rollno}</td>
            <td>{item.class}</td>
            <td>{item.section}</td>
            <td>
              <button onClick={() => { props.editStudent(item) }} className="btn btn-default">Edit</button>
              <button onClick={() => props.deleteStudent(item.id)} className="btn btn-default">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4}>No student available</td>
        </tr>
      )}
      
    </tbody>
  </table>
  </div>
)

export default StudentList