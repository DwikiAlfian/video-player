import React from 'react';
import SideBar from '../sidebar/SideBar';
import History from '../history/History';

export default function Explore({ history, setHistory }) {
  return (
    <>
      <div className="explore-media">
        <SideBar history={history} setHistory={setHistory} />
        <History history={history} setHistory={setHistory} />
      </div>
    </>
  );
}
