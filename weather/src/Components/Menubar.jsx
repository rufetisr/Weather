import React, { useState } from 'react';
import './Menubar.css'

const Menubar = () => {
  const [btnClass, setClass] = useState('burger-bar unclick');
  const [menuClass, setMenuClass] = useState('menu hidden');
  const [isMenuClick, setIsMenuClick] = useState(false);

  let updateMenu = ()=>{
    if (!isMenuClick) {
      setClass('burger-bar click');
      setMenuClass('menu visible');
    }
    else{
      setClass("burger-bar unclick");
      setMenuClass('menu hidden');
    }
  }
  return (
    <div>
        <div className='burger-menu'>
          <div className={btnClass} onClick={updateMenu}></div>
          <div className={btnClass} onClick={updateMenu}></div>
          <div className={btnClass} onClick={updateMenu}></div>
        </div>
    </div>
  );
}

export default Menubar;
