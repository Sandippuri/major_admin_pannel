import React from 'react'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import AddCollege from './Pages/AddCollege';
import AddStudent from './Pages/AddStudent';
import College from './Pages/College';
import Student from './Pages/Student';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route exact path='/' element={<Homepage />}/>
          <Route  path='/login' element={<Login/>}/>
          <Route  path='/addCollege' element={<AddCollege/>}/>
          <Route  path='/addStudent' element={<AddStudent/>}/>
          <Route  path='/colleges' element={<College/>}/>
          <Route  path='/students' element={<Student/>}/>
        </Routes>
      </div>
      {/* <Login/> */}
    </Router>
  );
}

export default App;
