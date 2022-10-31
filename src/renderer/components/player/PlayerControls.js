import React, { useEffect, useState } from 'react';
import { HiPlay, HiPause } from 'react-icons/hi';
import { BsStopCircleFill } from 'react-icons/bs';
import { CgChevronDoubleLeftO, CgChevronDoubleRightO } from 'react-icons/cg';

export default function PlayerControls() {
  const [length, setLength] = useState();
  const [currentTime, setCurrentTime] = useState();

  const setTimeInterval = (vid) => {
    setInterval(() => {
      setCurrentTime(vid.currentTime);
    }, 1000);
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
    videoPlayer.play();
  };

  const pauseVid = () => {
    var vid = document.getElementById('videoPlayed');
    videoPlayer.pause();
  };

  const stopVid = () => {
    var vid = document.getElementById('videoPlayed');
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  };

  document.onkeydown = (e) => {
    if (e.key == 'ArrowRight') {
      videoPlayer.currentTime += 5;
    }
    if (e.key == 'ArrowLeft') {
      videoPlayer.currentTime -= 5;
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

  const dragControlHandler = (e) => {
    const currentLength = e.clientX - e.target.getBoundingClientRect().left - 7;
    const width = e.target.getBoundingClientRect().width;

    const percentage = (currentLength / width) * 100;
    const time = (length * percentage) / 100;
    videoPlayer.currentTime = time;
  };

  //   useEffect(() => {
  //     var vid = document.getElementById('videoPlayed');
  //     vid.onplaying = function () {
  //     };
  //   }, []);

  return (
    <>
      <div className="player-controls-container">
        <div className="player-controls">
          <div className="player-inline">
            <span className="player-time">
              {currentTime < 3600
                ? new Date(currentTime * 1000).toISOString().substring(14, 19)
                : currentTime > 3600
                ? new Date(currentTime * 1000).toISOString().substring(11, 19)
                : '--:--'}
            </span>
            <div
              className="drag-control"
              onClick={(e) => {
                // console.log();
                dragControlHandler(e);
              }}
            >
              <div
                className="drag-control-bar"
                style={{
                  width: length ? `${(currentTime / length) * 100}%` : '0%',
                }}
              ></div>
              <span
                className="button"
                style={{
                  left: length ? `${(currentTime / length) * 100}%` : '0%',
                }}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              ></span>
            </div>
            <span className="player-time">
              {length < 3600
                ? new Date(length * 1000).toISOString().substring(14, 19)
                : length > 3600
                ? new Date(length * 1000).toISOString().substring(11, 19)
                : '--:--'}
            </span>
          </div>
        </div>
        <div
          className="player-controls player-between"
          style={{ paddingTop: 15, paddingBottom: 15 }}
        >
          <button className="button button-off">
            <CgChevronDoubleLeftO size={18} />
          </button>
          <div className="flex-inline gap-5 player-center">
            <button
              className="button"
              onClick={() => {
                pauseVid();
              }}
            >
              <HiPause size={15} />
            </button>
            <button
              className="button button-big"
              onClick={() => {
                playVid();
              }}
            >
              <HiPlay size={28} />
            </button>
            <button
              className="button"
              onClick={() => {
                stopVid();
              }}
            >
              <BsStopCircleFill size={15} />
            </button>
          </div>
          <button className="button button-off">
            <CgChevronDoubleRightO size={18} />
          </button>
        </div>
      </div>
    </>
  );
}
