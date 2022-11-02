import React, { useState } from 'react';

export default function SideBar() {
  const [tabs, setTabs] = useState(0);

  return (
    <>
      <div className="sidebar">
        <span
          onClick={() => {
            setTabs(0);
          }}
          className={`sidelist ${tabs === 0 && 'sidelist-active'}`}
        >
          H
        </span>
        <span
          onClick={() => {
            setTabs(1);
          }}
          className={`sidelist ${tabs === 1 && 'sidelist-active'}`}
        >
          P
        </span>
      </div>
    </>
  );
}
