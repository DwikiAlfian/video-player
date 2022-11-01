import React from 'react';

export default function History({ history, setHistory, title, setTitle }) {
  const changeVideo = (name, url) => {
    if (name) {
      document.getElementById('videoPlayed').src = url;
      setTitle(name);
    }
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
                  <div
                    className="history-tile"
                    onClick={() => {
                      changeVideo(hist?.name, hist?.url);
                    }}
                  >
                    <h4>{hist?.name}</h4>
                    <span>{hist?.url}</span>
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
