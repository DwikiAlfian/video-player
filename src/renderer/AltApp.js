import React, { useEffect, useState } from 'react';
import Explore from './components/explore/Explore';
import Player from './components/player/Player';
import TitleBar from './components/titlebar/TitleBar';
import useLocalStorage from './hooks/useLocalStorage';
import useAdvancedAlert from './hooks/useAdvancedAlert';

export default function AltApp() {
  // Local State
  const [title, setTitle] = useState('');
  const [currentUrl, setCurrentUrl] = useState('');
  const [drawer, setDrawer] = useState(true);

  // Local History State
  const [history, setHistory] = useState([]);

  // Local Storage History
  const [savedHistory, setSavedHistory] = useLocalStorage('history');

  // Save new history on local state to local storage
  useEffect(() => {
    setSavedHistory(history);
  }, [history]);

  // Set local state with data from local storage on first launch
  useEffect(() => {
    setHistory(savedHistory);
    setDrawer(true);
  }, []);

  // Auto Hide Controls
  let hideBar;

  const mouseMoveHandler = (e) => {
    e &&
      e.currentTarget.addEventListener('mousemove', () => {
        clearTimeout(hideBar);
        document.body.classList.remove('hide');
        hideBar = setTimeout(() => {
          document.body.classList.add('hide');
        }, 6500);
      });
    e &&
      e.currentTarget.addEventListener('mouseleave', () => {
        clearTimeout(hideBar);
        document.body.classList.remove('hide');
      });
  };

  const mouseEnterHandler = (e) => {
    document.body.classList.add('force-open');
    e &&
      e.currentTarget.addEventListener('mouseleave', () => {
        document.body.classList.remove('force-open', 'hide');
      });
  };

  const mouseLeaveHandler = () => {};

  // ======================
  // Media Player Functions
  // ======================

  const [length, setLength] = useState();
  const [currentTime, setCurrentTime] = useState();
  const [seekTime, setSeekTime] = useState(0);

  const setTimeInterval = (vid) => {
    setInterval(() => {
      setCurrentTime(vid.currentTime);
    }, 500);
  };

  useEffect(() => {
    var vid = document.getElementById('videoPlayed');
    vid.onplaying = function () {
      setLength(vid.duration);
      setTimeInterval(vid);
    };
  }, []);

  var videoPlayer = document.getElementById('videoPlayed');

  const playVid = () => {
    if (!title) {
      useAdvancedAlert('danger', 'Please open a file first');
      return;
    }
    if (
      videoPlayer.src.slice(-4).toLowerCase() === '.mp4' ||
      videoPlayer.src.slice(-4).toLowerCase() === '.mkv'
    ) {
      if (videoPlayer.src.slice(0, 4) === 'file') {
        try {
          videoPlayer.play();
        } catch (e) {}
        useAdvancedAlert('success', 'Playing now');
      }
    } else {
      useAdvancedAlert('danger', 'File format seems to be not supported');
    }
  };

  const pauseVid = () => {
    var vid = document.getElementById('videoPlayed');
    videoPlayer.pause();
    useAdvancedAlert('primary', 'Paused');
  };

  const stopVid = () => {
    var vid = document.getElementById('videoPlayed');
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    useAdvancedAlert('danger', 'Stopped');
  };

  document.onkeydown = (e) => {
    if (e.key === 'Escape') {
      setDrawer((prevState) => !prevState);
    }
    if (e.key == 'ArrowRight') {
      videoPlayer.currentTime += 5;
      useAdvancedAlert('success', 'Skipped Forward 5sec');
    }
    if (e.key == 'ArrowLeft') {
      videoPlayer.currentTime -= 5;
      useAdvancedAlert('success', 'Skipped Backward 5sec');
    }
    if (e.key == ' ') {
      try {
        if (videoPlayer.paused) {
          playVid();
        } else {
          pauseVid();
        }
      } catch (e) {}
    }
  };

  const seekTimeHandler = (e) => {
    const currentLength = e.clientX - e.target.getBoundingClientRect().left - 7;
    const width = e.target.getBoundingClientRect().width;

    const percentage = (currentLength / width) * 100;
    const time = (length * percentage) / 100;

    setSeekTime(time);
  };

  const dragControlHandler = (e) => {
    if (seekTime) {
      videoPlayer.currentTime = seekTime;
    }
  };

  // ======================
  // End of Media Functions
  // ======================

  return (
    <>
      <div
        // onMouseMove={(e) => {
        //   mouseMoveHandler(e);
        // }}
        style={{ width: '100%', height: '100%' }}
      >
        <TitleBar
          history={history}
          setHistory={setHistory}
          title={title}
          setTitle={setTitle}
          currentUrl={currentUrl}
          setCurrentUrl={setCurrentUrl}
          drawer={drawer}
          setDrawer={setDrawer}
          mouseEnterHandler={mouseEnterHandler}
          mouseLeaveHandler={mouseLeaveHandler}
        />
        <div id="exploreMedia">
          <Explore
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
        <div id="playerMedia" style={{ width: '100%', height: '100%' }}>
          <Player
            history={history}
            setHistory={setHistory}
            drawer={drawer}
            setDrawer={setDrawer}
            hidebar={hideBar}
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
            mouseMoveHandler={mouseMoveHandler}
            mouseEnterHandler={mouseEnterHandler}
            mouseLeaveHandler={mouseLeaveHandler}
          />
        </div>
      </div>
    </>
  );
}
