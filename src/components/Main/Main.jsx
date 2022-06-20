import React from 'react';
import Nav from '../Nav/Nav';
import Banner from '../Banner/Banner';
import MainRow from '../Row/MainRow';

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <div>
      <Nav handleLogout={handleLogout} />
      <Banner />
      <MainRow />
    </div>
  );
};

export default Main;
