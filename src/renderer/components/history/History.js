import React from 'react';
import useChangeVideo from 'renderer/hooks/useChangeVideo';
import { HiPlay } from 'react-icons/hi';
import useTooltip from 'renderer/hooks/useTooltip';
import useMouseOver from 'renderer/hooks/useMouseOver';

export default function History({ history, setHistory, title, setTitle }) {
  const changeVideo = (name, url) => {
    if (name) {
      document.getElementById('videoPlayed').src = url;
      setTitle(name);
    }
    useChangeVideo(false, setTitle, false, name, url);
  };

  return (
    <>
      <div style={{ paddingTop: 75 }}>
        <div className="history">
          <div className="history-title">
            <h4>Now Playing</h4>
          </div>
          <div className="history-content history-recent-content">
            {/* {history ? (
            history.slice(0, 1).map((hist) => {
              return (
                <> */}
            <div className="history-tile">
              <div
                onMouseEnter={(e) => {
                  useTooltip(e, 'Play video');
                }}
                // onClick={() => {
                //   changeVideo(hist?.name, hist?.url);
                // }}
                className="button"
              >
                <HiPlay size={54} />
              </div>
              <div className="flex-column">
                <h1>{title}</h1>
                {/* <span>{hist?.url}</span> */}
              </div>
            </div>
            {/* </>
              );
            })
          ) : (
            <>
              <span>No histories recorded yet</span>
            </>
          )} */}
          </div>
          <div className="history-title">
            <h4>Recently Played</h4>
          </div>
          <div className="history-content">
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
    </>
  );
}
