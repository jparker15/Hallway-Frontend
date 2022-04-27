import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import NavBar from '../Navbar/NavBar';
import Home from '../Home/Home';
import Students from '../Students/Students';
import Lockers from '../Lockers/Lockers';
import Stuffs from '../Stuffs/Stuffs';

const AppRouter = () => {
  return (
    <div style={{width: '100%'}}>
      <NavBar />
      <div style={{marginTop: "75px", width: '100%'}}>

        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/students" element={<Students />} />
            <Route path="/stuffs" element={<Stuffs />} />
            <Route path="/lockers" element={<Lockers />} />
        </Routes>
      </div>
    </div>
  )
}

export default AppRouter;