import React, { useEffect, useState } from 'react';
import Explore from './components/explore/Explore';
import Player from './components/player/Player';
import TitleBar from './components/titlebar/TitleBar';
import useLocalStorage from './hooks/useLocalStorage';

export default function AltApp() {
  // Local State
  const [title, setTitle] = useState('');

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
  }, []);

  return (
    <>
      <TitleBar
        history={history}
        setHistory={setHistory}
        title={title}
        setTitle={setTitle}
      />
      <div id="exploreMedia">
        <Explore
          history={history}
          setHistory={setHistory}
          title={title}
          setTitle={setTitle}
        />
      </div>
      <div id="playerMedia" style={{ width: '100%', height: '100%' }}>
        <Player history={history} setHistory={setHistory} />
      </div>
    </>
  );
}
