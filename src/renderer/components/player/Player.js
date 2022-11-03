import React from 'react';
import PlayerControls from './PlayerControls';

export default function Player({
  history,
  setHistory,
  drawer,
  setDrawer,
  hideBar,
  mouseMoveHandler,
  mouseEnterHandler,
  length,
  setLength,
  currentTime,
  setCurrentTime,
  seekTime,
  setSeekTime,
  setTimeInterval,
  videoPlayer,
  playVid,
  pauseVid,
  stopVid,
  seekTimeHandler,
  dragControlHandler,
  mouseLeaveHandler,
}) {
  return (
    <>
      <div className="player-container">
        <video
          onClick={() => {
            setDrawer(false);
          }}
          onMouseMove={(e) => {
            mouseMoveHandler(e);
          }}
          src=""
          id="videoPlayed"
          className="video-player"
          autoPlay={true}
        >
          <source type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <PlayerControls
          length={length}
          setLength={setLength}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          seekTime={seekTime}
          setSeekTime={setSeekTime}
          setTimeInterval={setTimeInterval}
          videoPlayer={videoPlayer}
          playVid={playVid}
          pauseVid={pauseVid}
          stopVid={stopVid}
          seekTimeHandler={seekTimeHandler}
          dragControlHandler={dragControlHandler}
          // MOUSE HANDLER
          mouseEnterHandler={mouseEnterHandler}
          mouseLeaveHandler={mouseLeaveHandler}
        />
      </div>
    </>
  );
}
