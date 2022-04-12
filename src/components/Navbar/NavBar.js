import React from 'react';
import NavButton from './NavButton';

const NavBar = (props) => {
  return (
    <nav style={{
      display:'flex',
      backgroundColor: "blue",
      position: "absolute",
      width: "100%",
      zIndex: 9999,
      top: 0,
      left: 0,
      flexDirection:'row',
      height: '75px'
    }}>
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0em 1.2em'
      }}>
        <h1 style={{color: "lightpink"}}>Hell-Way</h1>
      </div>
        <div style={{
          flex: 1,
          marginTop: "0em",
          display: "flex",
          flexDirection: "row",
          borderRadius: "70px 0px 0px 70px",
          background: "transparent",
          userSelect: "none",
          alignItems: 'center',
          padding: '0em 1.2em',
          justifyContent: 'flex-end'
        }}>
          <NavButton to="/" label="home"/>
          <NavButton to="/posts" label="posts"/>
          <NavButton to="/locker" label="Lockers"/>
          <NavButton to="/developers" label="Devs"/>
        </div>
    </nav> 
  )
}

export default NavBar;