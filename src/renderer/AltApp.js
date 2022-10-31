import React, { useState } from 'react';
import Explore from './components/explore/Explore';
import Player from './components/player/Player';
import TitleBar from './components/titlebar/TitleBar';

export default function AltApp() {
  const [history, setHistory] = useState([]);
  return (
    <>
      <TitleBar history={history} setHistory={setHistory} />
      <div id="exploreMedia">
        <Explore history={history} setHistory={setHistory} />
      </div>
      <div id="playerMedia" style={{ width: '100%', height: '100%' }}>
        <Player history={history} setHistory={setHistory} />
      </div>
    </>
  );
}
