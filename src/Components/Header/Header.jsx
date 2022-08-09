import React from "react";

function Header() {
  return (
    <div>
      <nav className="nav-bar" style={style.navBar}>
        <h1 className="logo">Lofi Music Player</h1>
      </nav>
    </div>
  );
}

const style = {
  navBar: {
    border:'1px solid red',
    padding:'1rem',
    textAlign:'center',
    fontFamily: 'DynaPuff, cursive',
    fontSize: '1.4rem'

  }
}

export default Header;
