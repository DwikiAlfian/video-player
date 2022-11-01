import React, { useEffect, useState } from 'react';
import { BsX, BsChevronCompactLeft, BsChevronDown } from 'react-icons/bs';
import { FiMinus } from 'react-icons/fi';
import { VscWindow } from 'react-icons/vsc';
import { SiPlayerfm } from 'react-icons/si';
import useDropdown from 'renderer/hooks/useDropdown';
import { useNavigate, useLocation } from 'react-router-dom';

export default function TitleBar({ history, setHistory, title, setTitle }) {
  const [drawer, setDrawer] = useState(true);

  const location = useLocation();
  useEffect(() => {
    console.log('Pathnames changed');
  }, [location]);

  useEffect(() => {
    if (drawer) {
      document.body.classList.add('open-explore');
    } else {
      document.body.classList.remove('open-explore');
    }
  }, [drawer]);

  useEffect(() => {
    setDrawer(false);
  }, [history, title]);

  const changeVideo = (e) => {
    e.currentTarget.blur();
    if (e.target.files[0]?.path) {
      document.getElementById(
        'videoPlayed'
      ).src = `file://${e.target.files[0]?.path}`;
      setTitle(e.target.files[0]?.name);
      setHistory((prevState) => {
        if (prevState) {
          return [
            {
              name: e.target.files[0]?.name,
              url: `file://${e.target.files[0]?.path}`,
              date: Date.now(),
            },
            ...prevState,
          ];
        } else {
          return [
            {
              name: e.target.files[0]?.name,
              url: `file://${e.target.files[0]?.path}`,
              date: Date.now(),
            },
          ];
        }
      });
    }
  };

  return (
    <>
      <div className="app-title">
        <div className="flex-inline gap-15">
          <div
            className="button button-icon-back"
            onClick={() => {
              setDrawer((prevState) => !prevState);
            }}
          >
            <BsChevronCompactLeft className="chevron-left" size={18} />
            <SiPlayerfm size={24} />
          </div>
          <span id="videoTitle">{title}</span>
        </div>
        <button
          className="button button-text"
          onClick={(e) => {
            useDropdown(e, [
              {
                name: 'Settings',
                link: '/settings',
              },
              {
                name: 'About',
                link: '/about',
              },
            ]);
          }}
        >
          Open
        </button>
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
