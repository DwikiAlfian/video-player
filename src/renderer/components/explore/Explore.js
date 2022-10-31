import React from 'react';
import SideBar from '../sidebar/SideBar';
import History from '../history/History';

export default function Explore() {
  return (
    <>
      <div className="explore-media">
        <SideBar />
        <History />
      </div>
    </>
  );
}
