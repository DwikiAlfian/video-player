import React, { useEffect, useState } from 'react';
import { BsX, BsChevronCompactLeft, BsChevronDown } from 'react-icons/bs';
import { FiMinus } from 'react-icons/fi';
import { VscWindow } from 'react-icons/vsc';
import { SiPlayerfm } from 'react-icons/si';
import useDropdown from 'renderer/hooks/useDropdown';
import { useNavigate, useLocation } from 'react-router-dom';
import useChangeVideo from 'renderer/hooks/useChangeVideo';

export default function TitleBar({
  history,
  setHistory,
  title,
  setTitle,
  currentUrl,
  setCurrentUrl,
  drawer,
  setDrawer,
  mouseEnterHandler,
  mouseLeaveHandler,
}) {
  // ==================
  // Title Bar Function
  // Calling IPC Renderer
  const ipcRenderer = window.require('electron')?.ipcRenderer;

  // Close Window Function
  const closeWindow = () => {
    ipcRenderer?.invoke('close-event');
  };

  // Minimize Window Function
  const minimizeWindow = () => {
    ipcRenderer?.invoke('minimize-event');
  };

  // Maximize Window Function
  const maximizeWindow = () => {
    ipcRenderer?.invoke('maximize-event');
  };

  // Drawer
  useEffect(() => {
    if (drawer) {
      document.body.classList.add('open-explore');
    } else {
      document.body.classList.remove('open-explore', 'force-open');
    }
  }, [drawer]);

  useEffect(() => {
    if (title) {
      setDrawer(false);
    }
  }, [history, title]);

  const changeVideo = (e) => {
    useChangeVideo(e, setTitle, setCurrentUrl, setHistory);
  };

  return (
    <>
      <div
        className="app-title"
        onMouseMove={(e) => {
          mouseEnterHandler(e);
        }}
      >
        <div className="flex-inline gap-15">
          <div
            className="button button-icon-back will-hide"
            onClick={() => {
              setDrawer((prevState) => !prevState);
            }}
          >
            <BsChevronCompactLeft className="chevron-left" size={18} />
            <SiPlayerfm size={24} />
          </div>
          <span id="videoTitle" className="will-hide">
            {title}
          </span>
        </div>
        {/* <button
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
        </button> */}
        <div className="flex-inline gap-5 will-show">
          <div
            className="custom-input"
            onMouseDown={() => {
              document.getElementById('customInput').click();
            }}
          >
            <button className="button button-text">
              Open File
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
              accept=".mp4, .mkv"
            />
          </div>
        </div>
        <div className="app-icons">
          <button
            onClick={() => {
              minimizeWindow();
            }}
            className="app-title-icon"
          >
            <FiMinus size={20} />
          </button>
          <button
            onClick={() => {
              maximizeWindow();
            }}
            className="app-title-icon"
          >
            <VscWindow size={14} />
          </button>
          <button
            onClick={() => {
              closeWindow();
            }}
            className="app-title-icon app-title-icon-close"
          >
            <BsX size={24} />
          </button>
        </div>
      </div>
    </>
  );
}
