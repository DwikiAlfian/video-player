import React from 'react';
import PlayerControls from './PlayerControls';

export default function Player({
  history,
  setHistory,
  drawer,
  setDrawer,
  hideBar,
  mouseEnterHandler,
}) {
  return (
    <>
      <div className="player-container">
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
