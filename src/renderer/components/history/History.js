import React from 'react';
import useChangeVideo from 'renderer/hooks/useChangeVideo';
import { HiPause, HiPlay, HiStop } from 'react-icons/hi';
import useTooltip from 'renderer/hooks/useTooltip';
import useMouseOver from 'renderer/hooks/useMouseOver';

export default function History({
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
  const changeVideo = (name, url) => {
    if (name) {
      document.getElementById('videoPlayed').src = url;
      setTitle(name);
    }
    useChangeVideo(false, setTitle, setCurrentUrl, setHistory, name, url);
  };

  return (
    <>
      <div style={{ paddingTop: 75 }}>
        <div className="history">
          <div className="history-title">
            <h4>Now Playing</h4>
          </div>
          <div className="history-content history-recent-content">
            <div className="history-tile">
              <div className="flex-column">
                <h1 style={{ wordBreak: 'break-all' }}>{title}</h1>
                <span>{currentUrl}</span>
                <div
                  className="flex-inline"
                  style={{
                    width: 550,
                    backgroundColor: 'rgba(150,150,150,0.15',
                    borderRadius: 7,
                    padding: 5,
                    marginTop: 35,
                  }}
                >
                  <span className="player-time">
                    {currentTime < 3600
                      ? new Date(currentTime * 1000)
                          .toISOString()
                          .substring(14, 19)
                      : currentTime > 3600
                      ? new Date(currentTime * 1000)
                          .toISOString()
                          .substring(11, 19)
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
                          ? new Date(seekTime * 1000)
                              .toISOString()
                              .substring(14, 19)
                          : seekTime > 3600
                          ? new Date(seekTime * 1000)
                              .toISOString()
                              .substring(11, 19)
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
                        width: length
                          ? `${(currentTime / length) * 100}%`
                          : '0%',
                      }}
                    ></div>
                    <span
                      className="button-bar"
                      style={{
                        left: length
                          ? `${(currentTime / length) * 100}%`
                          : '0%',
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
                  <div className="buttons">
                    <div
                      onMouseEnter={(e) => {
                        useTooltip(e, 'Play video');
                      }}
                      onClick={() => {
                        pauseVid();
                      }}
                      className="button button-stop-alt"
                    >
                      <HiPause size={35} />
                    </div>
                    <div
                      onMouseEnter={(e) => {
                        useTooltip(e, 'Play video');
                      }}
                      onClick={() => {
                        playVid();
                      }}
                      className="button"
                    >
                      <HiPlay size={35} />
                    </div>
                    <div
                      onMouseEnter={(e) => {
                        useTooltip(e, 'Play video');
                      }}
                      onClick={() => {
                        stopVid();
                      }}
                      className="button button-stop-alt"
                    >
                      <HiStop size={35} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="history-title">
            <h4>Recently Played</h4>
          </div>
          <div className="history-content">
            {history ? (
              history.slice(0, 3).map((hist) => {
                return (
                  <>
                    <div className="history-tile history-tile-alt">
                      <div className="flex-column gap-5">
                        <h4>{hist?.name}</h4>
                        <span
                          // onMouseMove={(e) => {
                          //   useMouseOver(e, hist?.url, 'center', 'y');
                          // }}
                          onMouseEnter={(e) => {
                            useTooltip(e, hist?.url);
                          }}
                          className="url-short"
                        >
                          {hist?.url?.slice(0, 40)}
                        </span>
                      </div>
                      <div
                        onMouseEnter={(e) => {
                          useTooltip(e, 'Play video');
                        }}
                        onClick={() => {
                          changeVideo(hist?.name, hist?.url);
                        }}
                        className="button"
                      >
                        <HiPlay size={29} />
                      </div>
                    </div>
                  </>
                );
              })
            ) : (
              <>
                <span>No histories recorded yet</span>
              </>
            )}
          </div>
          {/* LISTS */}
          <div className="history-content history-content-lists">
            <div className="history-lists">
              <span className="history-date">All Lists</span>
              {history ? (
                history.slice(0).map((hist) => {
                  return (
                    <>
                      <div className="history-tile history-tile-alt">
                        <div className="flex-column gap-5">
                          <h4>{hist?.name}</h4>
                          <span
                            // onMouseMove={(e) => {
                            //   useMouseOver(e, hist?.url, 'center', 'y');
                            // }}
                            onMouseEnter={(e) => {
                              useTooltip(e, hist?.url);
                            }}
                            className="url-short"
                          >
                            {hist?.url.slice(0, 40)}
                          </span>
                        </div>
                        <div
                          onMouseEnter={(e) => {
                            useTooltip(e, 'Play video');
                          }}
                          onClick={() => {
                            changeVideo(hist?.name, hist?.url);
                          }}
                          className="button"
                        >
                          <HiPlay size={29} />
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <>
                  <span>No histories recorded yet</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
