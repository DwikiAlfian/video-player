import React, { useEffect, useState } from 'react';
import { BsX, BsChevronCompactLeft, BsChevronDown } from 'react-icons/bs';
import { FiMinus } from 'react-icons/fi';
import { VscWindow } from 'react-icons/vsc';
import { SiPlayerfm } from 'react-icons/si';

export default function TitleBar() {
  const [title, setTitle] = useState();
  const [drawer, setDrawer] = useState(true);

  useEffect(() => {
    if (drawer) {
      document.body.classList.add('open-explore');
    } else {
      document.body.classList.remove('open-explore');
    }
  }, [drawer]);

  const changeVideo = (e) => {
    e.currentTarget.blur();
    if (e.target.files[0]?.path) {
      document.getElementById(
        'videoPlayed'
      ).src = `file://${e.target.files[0]?.path}`;
      setTitle(e.target.files[0]?.name);
    }
  };

  return (
    <>
      <div className="app-title">
        <div className="flex-inline gap-15">
          <button
            className="button button-icon-back"
            onClick={() => {
              setDrawer((prevState) => !prevState);
            }}
          >
            <BsChevronCompactLeft className="chevron-left" size={18} />
            <SiPlayerfm size={24} />
          </button>
          <span id="videoTitle">{title}</span>
        </div>
        <div
          className="custom-input"
          onMouseDown={() => {
            document.getElementById('customInput').click();
          }}
        >
          <button className="button button-text">
            <BsChevronDown size={12} />
          </button>
          <input
            id="customInput"
            className="custom-input"
            onChange={(e) => {
              changeVideo(e);
              e.currentTarget.parentElement.blur();
            }}
            type="file"
          />
        </div>
        <div className="app-icons">
          <button className="app-title-icon">
            <FiMinus size={20} />
          </button>
          <button className="app-title-icon">
            <VscWindow size={14} />
          </button>
          <button className="app-title-icon app-title-icon-close">
            <BsX size={24} />
          </button>
        </div>
      </div>
    </>
  );
}
