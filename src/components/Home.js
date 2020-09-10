import React from 'react';
import { NavLink } from 'react-router-dom';
 
const home = () => {
    return (
       <div>
          <h1>Home</h1>
           <p>Home page body content</p>
           <NavLink to="/">Home</NavLink>
           <NavLink to="/studentpage">StudentPage</NavLink>
           <NavLink to="/teacherpage">TeacherPage</NavLink>
       </div>
    );
}
 
export default home;