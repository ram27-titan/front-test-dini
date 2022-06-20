import React, { useEffect, useState } from 'react';
import './nav.css';

const Nav = ({ handleLogout }) => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix Logo" />
      <img className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Logo" />
      <button className=" nav__button  text-white  bg-[#e50914] py-[6px] px-3 font-semibold rounded-md hover:bg-white hover:text-[#e50914] duration-300  " onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Nav;
