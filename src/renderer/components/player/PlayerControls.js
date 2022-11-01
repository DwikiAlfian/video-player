import React, { useEffect, useState } from 'react';
import { HiPlay, HiPause, HiVolumeUp } from 'react-icons/hi';
import { BsStopCircleFill } from 'react-icons/bs';
import { CgChevronDoubleLeftO, CgChevronDoubleRightO } from 'react-icons/cg';
import useTooltip from 'renderer/hooks/useTooltip';
import useMouseOver from 'renderer/hooks/useMouseOver';
import useAdvancedAlert from 'renderer/hooks/useAdvancedAlert';

export default function PlayerControls() {
  const [length, setLength] = useState();
  const [currentTime, setCurrentTime] = useState();
  const [seekTime, setSeekTime] = useState(0);

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
    if (videoPlayer.src.slice(0, 4) === 'file') {
      videoPlayer.play();
      useAdvancedAlert('success', 'Playing now');
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
                dragControlHandler(e);
              }}
              onMouseMove={(e) => {
                // e.currentTarget.cli
                useMouseOver(
                  e,
                  seekTime < 3600
                    ? new Date(seekTime * 1000).toISOString().substring(14, 19)
                    : seekTime > 3600
                    ? new Date(seekTime * 1000).toISOString().substring(11, 19)
                    : '--:--',
                  'center',
                  'y'
                );
                seekTimeHandler(e);
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
          <div className="button button-off">
            <CgChevronDoubleLeftO size={18} />
          </div>
          <div className="flex-inline gap-5 player-center">
            <div
              className="button"
              onClick={() => {
                pauseVid();
              }}
              onMouseEnter={(e) => {
                useTooltip(e, 'Pause video');
              }}
            >
              <HiPause size={17} />
            </div>
            <div
              className="button button-big"
              onClick={() => {
                playVid();
              }}
              onMouseEnter={(e) => {
                useTooltip(e, 'Play video');
              }}
            >
              <HiPlay size={28} />
            </div>
            <div
              className="button"
              onClick={() => {
                stopVid();
              }}
              onMouseEnter={(e) => {
                useTooltip(e, 'Stop video');
              }}
            >
              <BsStopCircleFill size={15} />
            </div>
          </div>
          <div className="button">
            <HiVolumeUp size={14} />
          </div>
        </div>
      </div>
    </>
  );
}
