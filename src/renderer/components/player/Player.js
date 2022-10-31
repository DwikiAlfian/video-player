import React from 'react';
import PlayerControls from './PlayerControls';

export default function Player() {
  let hideBar;

  const mouseMoveHandler = () => {
    document.body.classList.remove('hide');
    clearTimeout(hideBar);
    hideBar = setTimeout(() => {
      document.body.classList.add('hide');
    }, 4500);
  };

  return (
    <>
      <div
        className="player-container"
        onMouseMove={() => {
          mouseMoveHandler();
        }}
      >
        <video src="" id="videoPlayed" className="video-player" autoPlay={true}>
          <source src="" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <PlayerControls />
      </div>
    </>
  );
}
