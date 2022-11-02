import React from 'react';
import useChangeVideo from 'renderer/hooks/useChangeVideo';
import { HiPlay } from 'react-icons/hi';
import useTooltip from 'renderer/hooks/useTooltip';

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
      <div className="history">
        <div className="history-title">
          <h4>Recently Played</h4>
        </div>
        <div className="history-content history-recent-content">
          {history ? (
            history.slice(0, 1).map((hist) => {
              return (
                <>
                  <div className="history-tile">
                    <div
                      onMouseEnter={(e) => {
                        useTooltip(e, 'Play video');
                      }}
                      onClick={() => {
                        changeVideo(hist?.name, hist?.url);
                      }}
                      className="button"
                    >
                      <HiPlay size={54} />
                    </div>
                    <div className="flex-column">
                      <h2>{hist?.name}</h2>
                      <span>{hist?.url}</span>
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
        <div className="history-title">
          <h4>All Lists</h4>
        </div>
        <div className="history-content">
          {history ? (
            history.slice(1).map((hist) => {
              return (
                <>
                  <div className="history-tile">
                    <div className="flex-column">
                      <h4>{hist?.name}</h4>
                      <span>{hist?.url}</span>
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
    </>
  );
}
