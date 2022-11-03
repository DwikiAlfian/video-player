import React from 'react';
import SideBar from '../sidebar/SideBar';
import History from '../history/History';

export default function Explore({
  history,
  setHistory,
  title,
  setTitle,
  currentUrl,
  setCurrentUrl,
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
}) {
  return (
    <>
      <div className="explore-media">
        <SideBar history={history} setHistory={setHistory} />
        <History
          history={history}
          setHistory={setHistory}
          title={title}
          setTitle={setTitle}
          currentUrl={currentUrl}
          setCurrentUrl={setCurrentUrl}
          // PLAYER FUNCTION
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
        />
      </div>
    </>
  );
}
