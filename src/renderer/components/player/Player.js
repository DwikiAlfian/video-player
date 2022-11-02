import React from 'react';
import PlayerControls from './PlayerControls';

export default function Player({
  history,
  setHistory,
  drawer,
  setDrawer,
  hideBar,
}) {
  const mouseMoveHandler = () => {
    document.body.classList.remove('hide');
    clearTimeout(hideBar);
    hideBar = setTimeout(() => {
      document.body.classList.add('hide');
    }, 6500);
  };

  const mouseEnterHandler = () => {
    document.body.classList.remove('hide');
    clearTimeout(hideBar);
  };

  return (
    <>
      <div
        className="player-container"
        onMouseMove={(e) => {
          mouseMoveHandler();
        }}
      >
        <video
          onClick={() => {
            setDrawer(false);
          }}
          src=""
          id="videoPlayed"
          className="video-player"
          autoPlay={true}
        >
          <source type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <PlayerControls timeoutFunction={mouseEnterHandler} />
      </div>
    </>
  );
}
