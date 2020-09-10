import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
 
const home = () => {
    return (
       <div id="home">
          <h1 id="home-header">Home</h1>
           <NavLink id="home-link" to="/">Home</NavLink>
           <NavLink id="home-link" to="/studentpage">StudentPage</NavLink>
           <NavLink id="home-link" to="/teacherpage">TeacherPage</NavLink>
       </div>
    );
}
 
export default home;