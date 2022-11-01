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
          <h1>History</h1>
        </div>
        <div className="history-content">
          {history ? (
            history.map((hist) => {
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
                      <HiPlay size={24} />
                    </div>
                    <div className="flex-column">
                      <h4>{hist?.name}</h4>
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
      </div>
    </>
  );
}
