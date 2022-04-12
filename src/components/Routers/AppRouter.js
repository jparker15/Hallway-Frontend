import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import NavBar from '../Navbar/NavBar';
import Home from '../Home/Home';
import Devs from '../Devs/Devs'
import Lockers from '../Lockers/Lockers';

const AppRouter = () => {
  return (
    <div style={{width: '100%'}}>
      <NavBar />
      <div style={{marginTop: "75px", width: '100%'}}>

        <Routes>
          <Route path="/" exact element={<Home />}/>
            
          {/* <Route path="/posts">
            <h1>posts</h1>
            </Route> */}
            <Route path="/developers" element={<Devs />} />
            <Route path="/lockers" element={<Lockers />} />
        </Routes>
      </div>
    </div>
  )
}

export default AppRouter;