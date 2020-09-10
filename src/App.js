import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import StudentPage from './StudentPage';
import TeacherPage from './TeacherPage';
import Error from './components/Error';
import './App.css';
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/studentpage" component={StudentPage} />
             <Route path="/teacherpage" component={TeacherPage} />
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
